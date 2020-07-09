import { Component, OnInit, ViewChild, ElementRef, Input, Output, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
import { Position } from '../position';

declare var AMap: any;
declare var AMapLoader: any;

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html'
})
export class MapComponent implements OnInit, OnChanges {

    constructor() {
        this.readonly = false;
        this.disabled = false;
    }

    /**
     * 地图对象
     */
    private map: any;

    /**
     * 标记
     */
    private marker: any;

    /**
     * 城市
     */
    private city: string;

    /**
     * 输入位置
     */
    @Input()
    position: Position;

    /**
     * 组件是否只读
     */
    @Input()
    readonly: boolean;

    /**
     * 组件是否禁用
     */
    @Input()
    disabled: boolean;

    /**
     * 输出位置选择事件
     */
    @Output()
    positionChange: EventEmitter<Position> = new EventEmitter<Position>();

    ngOnInit() {

        AMapLoader.load({
            key: '30ec74b63a74d427b0df1f1ef3323075', //首次调用load必须填写key
            version: '2.0',     //JSAPI 版本号
            plugins: ['AMap.Scale']  //同步加载的插件列表
        }).then((AMap) => {
            this.map = new AMap.Map('container', {
                zoom: 10
            });

            this.map.addControl(new AMap.Scale());

            this.map.on('click', (ev) => {

                if (this.readonly || this.disabled) return;

                if (ev.type == 'click') {
                    this.positionChange.emit(ev.lnglat as Position);
                    this.setCenter(ev.lnglat as Position);
                }
            });

            this.map.getCity((info) => {
                this.city = info.city;
            });

            this.setCenter(this.position);

        }).catch((e) => {
            console.error(e);
        });
    }

    ngOnChanges(changes: SimpleChanges) {

        if (changes.hasOwnProperty("position")) {
            this.setCenter(this.position);
            return;
        }

        if (changes.hasOwnProperty("disabled") && this.map) {
            if (this.disabled) {
                this.map.setStatus({
                    showIndoorMap: false,
                    resizeEnable: true,
                    dragEnable: false,
                    keyboardEnable: false,
                    doubleClickZoom: false,
                    zoomEnable: false,
                    rotateEnable: false
                })
            } else {
                this.map.setStatus({
                    showIndoorMap: false,
                    resizeEnable: true,
                    dragEnable: true,
                    keyboardEnable: false,
                    doubleClickZoom: false,
                    zoomEnable: true,
                    rotateEnable: false
                })
            }
        }
    }

    /**
     * 设置中心位置，并做标记
     * @param pos 地理位置
     */
    private setCenter(pos: Position) {
        if (!this.map || !pos) return;

        if (pos.lat == undefined || pos.lng == undefined) return;

        if (pos.lat == 0 && pos.lng == 0) {
            this.map.setCity(this.city);
            return;
        }

        this.map.setCenter(
            [pos.lng, pos.lat],
            false,
            1500
        );

        // 将创建的点标记添加到已有的地图实例
        this.marker && this.map.remove(this.marker);
        this.marker = new AMap.Marker({
            position: [pos.lng, pos.lat],
            title: '活动位置'
        });
        this.map.add(this.marker);
    }
}

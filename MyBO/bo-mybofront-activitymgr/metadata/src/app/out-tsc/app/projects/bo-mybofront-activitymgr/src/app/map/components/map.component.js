import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var MapComponent = /** @class */ (function () {
    function MapComponent() {
        /**
         * 输出位置选择事件
         */
        this.positionChange = new EventEmitter();
        this.readonly = false;
        this.disabled = false;
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        AMapLoader.load({
            key: '30ec74b63a74d427b0df1f1ef3323075',
            version: '2.0',
            plugins: ['AMap.Scale'] //同步加载的插件列表
        }).then(function (AMap) {
            _this.map = new AMap.Map('container', {
                zoom: 10
            });
            _this.map.addControl(new AMap.Scale());
            _this.map.on('click', function (ev) {
                if (_this.readonly || _this.disabled)
                    return;
                if (ev.type == 'click') {
                    _this.positionChange.emit(ev.lnglat);
                    _this.setCenter(ev.lnglat);
                }
            });
            _this.map.getCity(function (info) {
                _this.city = info.city;
            });
            _this.setCenter(_this.position);
        }).catch(function (e) {
            console.error(e);
        });
    };
    MapComponent.prototype.ngOnChanges = function (changes) {
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
                });
            }
            else {
                this.map.setStatus({
                    showIndoorMap: false,
                    resizeEnable: true,
                    dragEnable: true,
                    keyboardEnable: false,
                    doubleClickZoom: false,
                    zoomEnable: true,
                    rotateEnable: false
                });
            }
        }
    };
    /**
     * 设置中心位置，并做标记
     * @param pos 地理位置
     */
    MapComponent.prototype.setCenter = function (pos) {
        if (!this.map || !pos)
            return;
        if (pos.lat == undefined || pos.lng == undefined)
            return;
        if (pos.lat == 0 && pos.lng == 0) {
            this.map.setCity(this.city);
            return;
        }
        this.map.setCenter([pos.lng, pos.lat], false, 1500);
        // 将创建的点标记添加到已有的地图实例
        this.marker && this.map.remove(this.marker);
        this.marker = new AMap.Marker({
            position: [pos.lng, pos.lat],
            title: '活动位置'
        });
        this.map.add(this.marker);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], MapComponent.prototype, "position", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], MapComponent.prototype, "readonly", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], MapComponent.prototype, "disabled", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], MapComponent.prototype, "positionChange", void 0);
    MapComponent = tslib_1.__decorate([
        Component({
            selector: 'app-map',
            templateUrl: './map.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());
export { MapComponent };

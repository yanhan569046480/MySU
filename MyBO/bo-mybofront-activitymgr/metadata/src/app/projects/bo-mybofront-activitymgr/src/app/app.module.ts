import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule, SystemJsNgModuleLoaderConfig, LOCALE_ID, NgModuleFactoryLoader } from '@angular/core'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AppComponent } from './app.component'; 
import { AppRoutingModule } from './app-routing.module'; 
import { HttpClientModule } from '@angular/common/http';
import { CacheService, HttpService, SessionService } from '@ecp-caf/caf-common';
import { FrameworkService, FrmEventBus, LoadingService, AppService, FuncsService } from '@gsp-sys/rtf-common';
import { CommonModule } from '@angular/common';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SystemjsLcModuleloaderGenerator } from './systemjs-lc-moduleloader';

@NgModule({

    declarations: [

        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        CommonModule,
        HttpClientModule
    ],
    providers: [
        CacheService,
        SessionService,
        FrmEventBus,
        HttpService,
        FuncsService,
        AppService,
        LoadingService,
        { provide: LOCALE_ID, useValue: localStorage.getItem('languageCode') || 'zh-CHS' },
        FrameworkService,
        {
            provide: SystemJsNgModuleLoaderConfig, useValue: {
                factoryPathPrefix: '',
                factoryPathSuffix: '.js'
            }
        },
        {provide: NgModuleFactoryLoader, useClass: SystemjsLcModuleloaderGenerator}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private router: Router){
        // 截获路由事件
        router.events
            .pipe(filter(event => event instanceof NavigationStart))
            .subscribe((event: NavigationStart) => {
                // 读取当前路由Url地址
                const uriHash = event.url;
                const pathArr = uriHash.split("?");
                if (pathArr[1]){
                    const queryStringMap = this.getQueryStringMap(pathArr[1]);
                    const dim1 = queryStringMap.get('dim1');
                    const dim2 = queryStringMap.get('dim2');
                    const basicRoutePath = pathArr[0].substr(1);
                    if (dim1 && dim2){//维度1维度2一定会成对出现
                        const basicRouteIndex = this.router.config.findIndex(config => config.path == basicRoutePath);//设计器生成表单，默认一个表单一个主路由Path
                        const basicRoute = this.router.config[basicRouteIndex];
                        const basicLoadPath = basicRoute.loadChildren.toString();//"./cgddcard/cgddcard#cgddcardModule" 设计器生成的路径都是这样的格式
                        const lpa = basicLoadPath.split("/");
                        this.router.config.splice(basicRouteIndex, 1, {
                            path: basicRoute.path,
                            loadChildren: lpa[0] + "/" + lpa[1] + "/" + dim1 + "/" + dim2 + "/" + lpa[2]
                        })
                    }
                }
            });

    }
    /**
     * 把URL的queryParam转换为Map
    */
    private getQueryStringMap(queryString: string): Map<string, string> {
        const queryStringMap = new Map<string, string>();
        queryString.split('&').forEach((pair: string) => {
            queryStringMap.set(pair.split('=')[0], pair.split('=')[1]);
        });
        return queryStringMap;
    }
}
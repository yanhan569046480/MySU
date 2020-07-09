System.register(['@angular/core', 'tslib', '@angular/platform-browser', '@angular/platform-browser/animations', '@angular/router', '@angular/common/http', '@ecp-caf/caf-common', '@gsp-sys/rtf-common', '@angular/common', 'rxjs/operators', 'rxjs', '@angular/animations/browser', '@angular/animations'], function () {
    'use strict';
    var Component, NgModule, Injectable, Optional, Compiler, SystemJsNgModuleLoaderConfig, LOCALE_ID, NgModuleFactoryLoader, ɵcmf, ɵmod, ɵmpd, ComponentFactoryResolver, ɵCodegenComponentFactoryResolver, NgModuleRef, ɵcrt, ɵccf, ɵvid, ɵeld, ɵdid, ViewContainerRef, ChangeDetectorRef, APP_ID, ɵangular_packages_core_core_h, IterableDiffers, ɵangular_packages_core_core_q, KeyValueDiffers, ɵangular_packages_core_core_r, Sanitizer, NgZone, PLATFORM_ID, ɵConsole, RendererFactory2, Testability, Injector, APP_BOOTSTRAP_LISTENER, ApplicationRef, ErrorHandler, NgProbeToken, APP_INITIALIZER, ApplicationInitStatus, ApplicationModule, ɵAPP_ROOT, __decorate, __param, __metadata, BrowserModule, DomSanitizer, ɵDomSanitizerImpl, HAMMER_GESTURE_CONFIG, HammerGestureConfig, EVENT_MANAGER_PLUGINS, ɵDomEventsPlugin, ɵKeyEventsPlugin, ɵHammerGesturesPlugin, HAMMER_LOADER, EventManager, ɵDomSharedStylesHost, ɵDomRendererFactory2, ɵSharedStylesHost, DOCUMENT$1, ɵangular_packages_platform_browser_platform_browser_a, ɵangular_packages_platform_browser_platform_browser_j, platformBrowser, BrowserAnimationsModule, ɵangular_packages_platform_browser_animations_animations_a, ɵangular_packages_platform_browser_animations_animations_b, ɵInjectableAnimationEngine, ɵangular_packages_platform_browser_animations_animations_c, ɵBrowserAnimationBuilder, ANIMATION_MODULE_TYPE, RouterModule, Router, NavigationStart, ɵangular_packages_router_router_a, ɵEmptyOutletComponent, RouterOutlet, ChildrenOutletContexts, ActivatedRoute, ɵangular_packages_router_router_g, NoPreloading, PreloadingStrategy, RouterPreloader, PreloadAllModules, ɵangular_packages_router_router_n, ɵangular_packages_router_router_c, ROUTER_CONFIGURATION, ROUTER_INITIALIZER, ɵangular_packages_router_router_j, ɵangular_packages_router_router_h, ɵangular_packages_router_router_b, ɵangular_packages_router_router_i, ɵangular_packages_router_router_e, UrlSerializer, DefaultUrlSerializer, ɵangular_packages_router_router_d, ROUTES, ɵangular_packages_router_router_f, UrlHandlingStrategy, RouteReuseStrategy, HttpClient, HttpClientModule, HttpXsrfTokenExtractor, ɵangular_packages_common_http_http_g, ɵangular_packages_common_http_http_e, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_f, HTTP_INTERCEPTORS, ɵangular_packages_common_http_http_d, XhrFactory, HttpXhrBackend, HttpBackend, HttpHandler, ɵHttpInterceptingHandler, HttpClientXsrfModule, CacheService, SessionService, HttpService, CacheStorageAbstract, FrmEventBus, FuncsService, AppService, LoadingService, FrameworkService, FrameworkVariableService, CommonModule, NgLocalization, NgLocaleLocalization, ɵangular_packages_common_common_a, DOCUMENT, ViewportScroller, LocationStrategy, PlatformLocation, APP_BASE_HREF, Location, switchMap, filter, from, AnimationDriver, ɵAnimationStyleNormalizer, ɵAnimationEngine, AnimationBuilder;
    return {
        setters: [function (module) {
            Component = module.Component;
            NgModule = module.NgModule;
            Injectable = module.Injectable;
            Optional = module.Optional;
            Compiler = module.Compiler;
            SystemJsNgModuleLoaderConfig = module.SystemJsNgModuleLoaderConfig;
            LOCALE_ID = module.LOCALE_ID;
            NgModuleFactoryLoader = module.NgModuleFactoryLoader;
            ɵcmf = module.ɵcmf;
            ɵmod = module.ɵmod;
            ɵmpd = module.ɵmpd;
            ComponentFactoryResolver = module.ComponentFactoryResolver;
            ɵCodegenComponentFactoryResolver = module.ɵCodegenComponentFactoryResolver;
            NgModuleRef = module.NgModuleRef;
            ɵcrt = module.ɵcrt;
            ɵccf = module.ɵccf;
            ɵvid = module.ɵvid;
            ɵeld = module.ɵeld;
            ɵdid = module.ɵdid;
            ViewContainerRef = module.ViewContainerRef;
            ChangeDetectorRef = module.ChangeDetectorRef;
            APP_ID = module.APP_ID;
            ɵangular_packages_core_core_h = module.ɵangular_packages_core_core_h;
            IterableDiffers = module.IterableDiffers;
            ɵangular_packages_core_core_q = module.ɵangular_packages_core_core_q;
            KeyValueDiffers = module.KeyValueDiffers;
            ɵangular_packages_core_core_r = module.ɵangular_packages_core_core_r;
            Sanitizer = module.Sanitizer;
            NgZone = module.NgZone;
            PLATFORM_ID = module.PLATFORM_ID;
            ɵConsole = module.ɵConsole;
            RendererFactory2 = module.RendererFactory2;
            Testability = module.Testability;
            Injector = module.Injector;
            APP_BOOTSTRAP_LISTENER = module.APP_BOOTSTRAP_LISTENER;
            ApplicationRef = module.ApplicationRef;
            ErrorHandler = module.ErrorHandler;
            NgProbeToken = module.NgProbeToken;
            APP_INITIALIZER = module.APP_INITIALIZER;
            ApplicationInitStatus = module.ApplicationInitStatus;
            ApplicationModule = module.ApplicationModule;
            ɵAPP_ROOT = module.ɵAPP_ROOT;
        }, function (module) {
            __decorate = module.__decorate;
            __param = module.__param;
            __metadata = module.__metadata;
        }, function (module) {
            BrowserModule = module.BrowserModule;
            DomSanitizer = module.DomSanitizer;
            ɵDomSanitizerImpl = module.ɵDomSanitizerImpl;
            HAMMER_GESTURE_CONFIG = module.HAMMER_GESTURE_CONFIG;
            HammerGestureConfig = module.HammerGestureConfig;
            EVENT_MANAGER_PLUGINS = module.EVENT_MANAGER_PLUGINS;
            ɵDomEventsPlugin = module.ɵDomEventsPlugin;
            ɵKeyEventsPlugin = module.ɵKeyEventsPlugin;
            ɵHammerGesturesPlugin = module.ɵHammerGesturesPlugin;
            HAMMER_LOADER = module.HAMMER_LOADER;
            EventManager = module.EventManager;
            ɵDomSharedStylesHost = module.ɵDomSharedStylesHost;
            ɵDomRendererFactory2 = module.ɵDomRendererFactory2;
            ɵSharedStylesHost = module.ɵSharedStylesHost;
            DOCUMENT$1 = module.DOCUMENT;
            ɵangular_packages_platform_browser_platform_browser_a = module.ɵangular_packages_platform_browser_platform_browser_a;
            ɵangular_packages_platform_browser_platform_browser_j = module.ɵangular_packages_platform_browser_platform_browser_j;
            platformBrowser = module.platformBrowser;
        }, function (module) {
            BrowserAnimationsModule = module.BrowserAnimationsModule;
            ɵangular_packages_platform_browser_animations_animations_a = module.ɵangular_packages_platform_browser_animations_animations_a;
            ɵangular_packages_platform_browser_animations_animations_b = module.ɵangular_packages_platform_browser_animations_animations_b;
            ɵInjectableAnimationEngine = module.ɵInjectableAnimationEngine;
            ɵangular_packages_platform_browser_animations_animations_c = module.ɵangular_packages_platform_browser_animations_animations_c;
            ɵBrowserAnimationBuilder = module.ɵBrowserAnimationBuilder;
            ANIMATION_MODULE_TYPE = module.ANIMATION_MODULE_TYPE;
        }, function (module) {
            RouterModule = module.RouterModule;
            Router = module.Router;
            NavigationStart = module.NavigationStart;
            ɵangular_packages_router_router_a = module.ɵangular_packages_router_router_a;
            ɵEmptyOutletComponent = module.ɵEmptyOutletComponent;
            RouterOutlet = module.RouterOutlet;
            ChildrenOutletContexts = module.ChildrenOutletContexts;
            ActivatedRoute = module.ActivatedRoute;
            ɵangular_packages_router_router_g = module.ɵangular_packages_router_router_g;
            NoPreloading = module.NoPreloading;
            PreloadingStrategy = module.PreloadingStrategy;
            RouterPreloader = module.RouterPreloader;
            PreloadAllModules = module.PreloadAllModules;
            ɵangular_packages_router_router_n = module.ɵangular_packages_router_router_n;
            ɵangular_packages_router_router_c = module.ɵangular_packages_router_router_c;
            ROUTER_CONFIGURATION = module.ROUTER_CONFIGURATION;
            ROUTER_INITIALIZER = module.ROUTER_INITIALIZER;
            ɵangular_packages_router_router_j = module.ɵangular_packages_router_router_j;
            ɵangular_packages_router_router_h = module.ɵangular_packages_router_router_h;
            ɵangular_packages_router_router_b = module.ɵangular_packages_router_router_b;
            ɵangular_packages_router_router_i = module.ɵangular_packages_router_router_i;
            ɵangular_packages_router_router_e = module.ɵangular_packages_router_router_e;
            UrlSerializer = module.UrlSerializer;
            DefaultUrlSerializer = module.DefaultUrlSerializer;
            ɵangular_packages_router_router_d = module.ɵangular_packages_router_router_d;
            ROUTES = module.ROUTES;
            ɵangular_packages_router_router_f = module.ɵangular_packages_router_router_f;
            UrlHandlingStrategy = module.UrlHandlingStrategy;
            RouteReuseStrategy = module.RouteReuseStrategy;
        }, function (module) {
            HttpClient = module.HttpClient;
            HttpClientModule = module.HttpClientModule;
            HttpXsrfTokenExtractor = module.HttpXsrfTokenExtractor;
            ɵangular_packages_common_http_http_g = module.ɵangular_packages_common_http_http_g;
            ɵangular_packages_common_http_http_e = module.ɵangular_packages_common_http_http_e;
            ɵangular_packages_common_http_http_h = module.ɵangular_packages_common_http_http_h;
            ɵangular_packages_common_http_http_f = module.ɵangular_packages_common_http_http_f;
            HTTP_INTERCEPTORS = module.HTTP_INTERCEPTORS;
            ɵangular_packages_common_http_http_d = module.ɵangular_packages_common_http_http_d;
            XhrFactory = module.XhrFactory;
            HttpXhrBackend = module.HttpXhrBackend;
            HttpBackend = module.HttpBackend;
            HttpHandler = module.HttpHandler;
            ɵHttpInterceptingHandler = module.ɵHttpInterceptingHandler;
            HttpClientXsrfModule = module.HttpClientXsrfModule;
        }, function (module) {
            CacheService = module.CacheService;
            SessionService = module.SessionService;
            HttpService = module.HttpService;
            CacheStorageAbstract = module.CacheStorageAbstract;
        }, function (module) {
            FrmEventBus = module.FrmEventBus;
            FuncsService = module.FuncsService;
            AppService = module.AppService;
            LoadingService = module.LoadingService;
            FrameworkService = module.FrameworkService;
            FrameworkVariableService = module.FrameworkVariableService;
        }, function (module) {
            CommonModule = module.CommonModule;
            NgLocalization = module.NgLocalization;
            NgLocaleLocalization = module.NgLocaleLocalization;
            ɵangular_packages_common_common_a = module.ɵangular_packages_common_common_a;
            DOCUMENT = module.DOCUMENT;
            ViewportScroller = module.ViewportScroller;
            LocationStrategy = module.LocationStrategy;
            PlatformLocation = module.PlatformLocation;
            APP_BASE_HREF = module.APP_BASE_HREF;
            Location = module.Location;
        }, function (module) {
            switchMap = module.switchMap;
            filter = module.filter;
        }, function (module) {
            from = module.from;
        }, function (module) {
            AnimationDriver = module.AnimationDriver;
            ɵAnimationStyleNormalizer = module.ɵAnimationStyleNormalizer;
            ɵAnimationEngine = module.ɵAnimationEngine;
        }, function (module) {
            AnimationBuilder = module.AnimationBuilder;
        }],
        execute: function () {

            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'jit engine auto generated';
                }
                AppComponent = __decorate([
                    Component({
                        selector: 'app-root',
                        templateUrl: './app.component.html',
                        styleUrls: ['./app.component.scss']
                    })
                ], AppComponent);
                return AppComponent;
            }());

            var routes = [
                { path: 'ActivityDemo', loadChildren: './activitydemo/activitydemo#ActivityDemoModule' }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                AppRoutingModule = __decorate([
                    NgModule({
                        imports: [RouterModule.forRoot(routes, { useHash: true })],
                        exports: [RouterModule]
                    })
                ], AppRoutingModule);
                return AppRoutingModule;
            }());

            var _SEPARATOR = '#';
            var FACTORY_CLASS_SUFFIX = 'NgFactory';
            var DEFAULT_CONFIG = {
                factoryPathPrefix: '',
                factoryPathSuffix: '.ngfactory',
            };
            /**
             * SystemjsLcModuleloaderGenerator that uses SystemJS to load NgModuleFactory
             * @publicApi
             * @deprecated the `string` form of `loadChildren` is deprecated, and `SystemJsNgModuleLoader` is
             * part of its implementation. See `LoadChildren` for more details.
             */
            var SystemjsLcModuleloaderGenerator = /** @class */ (function () {
                function SystemjsLcModuleloaderGenerator(http, _compiler, config) {
                    this.http = http;
                    this._compiler = _compiler;
                    this._config = config || DEFAULT_CONFIG;
                }
                SystemjsLcModuleloaderGenerator.prototype.load = function (path) {
                    return this.loadFactory(path);
                };
                SystemjsLcModuleloaderGenerator.prototype.loadFactory = function (path) {
                    var _this = this;
                    var _a = path.split(_SEPARATOR), module = _a[0], exportName = _a[1];
                    var factoryClassSuffix = FACTORY_CLASS_SUFFIX;
                    if (exportName === undefined) {
                        exportName = 'default';
                        factoryClassSuffix = '';
                    }
                    var splitWithSeperator = module.split("/");
                    var formFileName = splitWithSeperator[splitWithSeperator.length - 1];
                    var httpObservable = this.http.get("/apps/gsp/mysu/web/bo-mybofront-activitymgr/version.json?version=" + new Date().getTime()).pipe(switchMap(function (responseData) {
                        var newVersion = "0.0.1";
                        if (responseData) {
                            responseData.forEach(function (item) {
                                if (item && item.category == "form" && item.key == (formFileName + _this._config.factoryPathSuffix)) {
                                    newVersion = item.value;
                                }
                            });
                        }
                        var sysjsPromise = System.import(_this._config.factoryPathPrefix + module + _this._config.factoryPathSuffix + "?version=" + newVersion)
                            .then(function (module) { return module[exportName + factoryClassSuffix]; })
                            .then(function (factory) { return _this.checkNotEmpty(factory, module, exportName); });
                        var systemjsObservable = from(sysjsPromise);
                        return systemjsObservable;
                    }));
                    return httpObservable.toPromise();
                };
                SystemjsLcModuleloaderGenerator.prototype.checkNotEmpty = function (value, modulePath, exportName) {
                    if (!value) {
                        throw new Error("Cannot find " + exportName + " in " + modulePath);
                    }
                    return value;
                };
                SystemjsLcModuleloaderGenerator = __decorate([
                    Injectable(),
                    __param(2, Optional()),
                    __metadata("design:paramtypes", [HttpClient, Compiler, SystemJsNgModuleLoaderConfig])
                ], SystemjsLcModuleloaderGenerator);
                return SystemjsLcModuleloaderGenerator;
            }());

            var ɵ0 = localStorage.getItem('languageCode') || 'zh-CHS', ɵ1 = {
                factoryPathPrefix: '',
                factoryPathSuffix: '.js'
            };
            var AppModule = /** @class */ (function () {
                function AppModule(router) {
                    var _this = this;
                    this.router = router;
                    // 截获路由事件
                    router.events
                        .pipe(filter(function (event) { return event instanceof NavigationStart; }))
                        .subscribe(function (event) {
                        // 读取当前路由Url地址
                        var uriHash = event.url;
                        var pathArr = uriHash.split("?");
                        if (pathArr[1]) {
                            var queryStringMap = _this.getQueryStringMap(pathArr[1]);
                            var dim1 = queryStringMap.get('dim1');
                            var dim2 = queryStringMap.get('dim2');
                            var basicRoutePath_1 = pathArr[0].substr(1);
                            if (dim1 && dim2) { //维度1维度2一定会成对出现
                                var basicRouteIndex = _this.router.config.findIndex(function (config) { return config.path == basicRoutePath_1; }); //设计器生成表单，默认一个表单一个主路由Path
                                var basicRoute = _this.router.config[basicRouteIndex];
                                var basicLoadPath = basicRoute.loadChildren.toString(); //"./cgddcard/cgddcard#cgddcardModule" 设计器生成的路径都是这样的格式
                                var lpa = basicLoadPath.split("/");
                                _this.router.config.splice(basicRouteIndex, 1, {
                                    path: basicRoute.path,
                                    loadChildren: lpa[0] + "/" + lpa[1] + "/" + dim1 + "/" + dim2 + "/" + lpa[2]
                                });
                            }
                        }
                    });
                }
                /**
                 * 把URL的queryParam转换为Map
                */
                AppModule.prototype.getQueryStringMap = function (queryString) {
                    var queryStringMap = new Map();
                    queryString.split('&').forEach(function (pair) {
                        queryStringMap.set(pair.split('=')[0], pair.split('=')[1]);
                    });
                    return queryStringMap;
                };
                AppModule = __decorate([
                    NgModule({
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
                            { provide: LOCALE_ID, useValue: ɵ0 },
                            FrameworkService,
                            {
                                provide: SystemJsNgModuleLoaderConfig, useValue: ɵ1
                            },
                            { provide: NgModuleFactoryLoader, useClass: SystemjsLcModuleloaderGenerator }
                        ],
                        bootstrap: [AppComponent]
                    }),
                    __metadata("design:paramtypes", [Router])
                ], AppModule);
                return AppModule;
            }());

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var RouterModuleNgFactory = ɵcmf(RouterModule, [], function (_l) { return ɵmod([ɵmpd(512, ComponentFactoryResolver, ɵCodegenComponentFactoryResolver, [[8, [ɵEmptyOutletComponentNgFactory]], [3, ComponentFactoryResolver], NgModuleRef]), ɵmpd(1073742336, RouterModule, RouterModule, [[2, ɵangular_packages_router_router_a], [2, Router]])]); });
            var styles_ɵEmptyOutletComponent = [];
            var RenderType_ɵEmptyOutletComponent = ɵcrt({ encapsulation: 2, styles: styles_ɵEmptyOutletComponent, data: {} });
            function View_ɵEmptyOutletComponent_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), ɵdid(1, 212992, null, 0, RouterOutlet, [ChildrenOutletContexts, ViewContainerRef, ComponentFactoryResolver, [8, null], ChangeDetectorRef], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
            function View_ɵEmptyOutletComponent_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "ng-component", [], null, null, null, View_ɵEmptyOutletComponent_0, RenderType_ɵEmptyOutletComponent)), ɵdid(1, 49152, null, 0, ɵEmptyOutletComponent, [], null, null)], null, null); }
            var ɵEmptyOutletComponentNgFactory = ɵccf("ng-component", ɵEmptyOutletComponent, View_ɵEmptyOutletComponent_Host_0, {}, {}, []);

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles = [""];

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles_AppComponent = [styles];
            var RenderType_AppComponent = ɵcrt({ encapsulation: 0, styles: styles_AppComponent, data: {} });
            function View_AppComponent_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), ɵdid(1, 212992, null, 0, RouterOutlet, [ChildrenOutletContexts, ViewContainerRef, ComponentFactoryResolver, [8, null], ChangeDetectorRef], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
            function View_AppComponent_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), ɵdid(1, 49152, null, 0, AppComponent, [], null, null)], null, null); }
            var AppComponentNgFactory = ɵccf("app-root", AppComponent, View_AppComponent_Host_0, {}, {}, []);

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var AppModuleNgFactory = ɵcmf(AppModule, [AppComponent], function (_l) { return ɵmod([ɵmpd(512, ComponentFactoryResolver, ɵCodegenComponentFactoryResolver, [[8, [ɵEmptyOutletComponentNgFactory, AppComponentNgFactory]], [3, ComponentFactoryResolver], NgModuleRef]), ɵmpd(4352, LOCALE_ID, ɵ0, []), ɵmpd(4608, NgLocalization, NgLocaleLocalization, [LOCALE_ID, [2, ɵangular_packages_common_common_a]]), ɵmpd(5120, APP_ID, ɵangular_packages_core_core_h, []), ɵmpd(5120, IterableDiffers, ɵangular_packages_core_core_q, []), ɵmpd(5120, KeyValueDiffers, ɵangular_packages_core_core_r, []), ɵmpd(4608, DomSanitizer, ɵDomSanitizerImpl, [DOCUMENT]), ɵmpd(6144, Sanitizer, null, [DomSanitizer]), ɵmpd(4608, HAMMER_GESTURE_CONFIG, HammerGestureConfig, []), ɵmpd(5120, EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new ɵDomEventsPlugin(p0_0, p0_1, p0_2), new ɵKeyEventsPlugin(p1_0), new ɵHammerGesturesPlugin(p2_0, p2_1, p2_2, p2_3)]; }, [DOCUMENT, NgZone, PLATFORM_ID, DOCUMENT, DOCUMENT, HAMMER_GESTURE_CONFIG, ɵConsole, [2, HAMMER_LOADER]]), ɵmpd(4608, EventManager, EventManager, [EVENT_MANAGER_PLUGINS, NgZone]), ɵmpd(135680, ɵDomSharedStylesHost, ɵDomSharedStylesHost, [DOCUMENT]), ɵmpd(4608, ɵDomRendererFactory2, ɵDomRendererFactory2, [EventManager, ɵDomSharedStylesHost, APP_ID]), ɵmpd(5120, AnimationDriver, ɵangular_packages_platform_browser_animations_animations_a, []), ɵmpd(5120, ɵAnimationStyleNormalizer, ɵangular_packages_platform_browser_animations_animations_b, []), ɵmpd(4608, ɵAnimationEngine, ɵInjectableAnimationEngine, [DOCUMENT, AnimationDriver, ɵAnimationStyleNormalizer]), ɵmpd(5120, RendererFactory2, ɵangular_packages_platform_browser_animations_animations_c, [ɵDomRendererFactory2, ɵAnimationEngine, NgZone]), ɵmpd(6144, ɵSharedStylesHost, null, [ɵDomSharedStylesHost]), ɵmpd(4608, Testability, Testability, [NgZone]), ɵmpd(4608, AnimationBuilder, ɵBrowserAnimationBuilder, [RendererFactory2, DOCUMENT$1]), ɵmpd(5120, ActivatedRoute, ɵangular_packages_router_router_g, [Router]), ɵmpd(4608, NoPreloading, NoPreloading, []), ɵmpd(6144, PreloadingStrategy, null, [NoPreloading]), ɵmpd(135680, RouterPreloader, RouterPreloader, [Router, NgModuleFactoryLoader, Compiler, Injector, PreloadingStrategy]), ɵmpd(4608, PreloadAllModules, PreloadAllModules, []), ɵmpd(5120, ɵangular_packages_router_router_n, ɵangular_packages_router_router_c, [Router, ViewportScroller, ROUTER_CONFIGURATION]), ɵmpd(5120, ROUTER_INITIALIZER, ɵangular_packages_router_router_j, [ɵangular_packages_router_router_h]), ɵmpd(5120, APP_BOOTSTRAP_LISTENER, function (p0_0) { return [p0_0]; }, [ROUTER_INITIALIZER]), ɵmpd(4608, HttpXsrfTokenExtractor, ɵangular_packages_common_http_http_g, [DOCUMENT, PLATFORM_ID, ɵangular_packages_common_http_http_e]), ɵmpd(4608, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_h, [HttpXsrfTokenExtractor, ɵangular_packages_common_http_http_f]), ɵmpd(5120, HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [ɵangular_packages_common_http_http_h]), ɵmpd(4608, CacheService, CacheService, [[2, CacheStorageAbstract]]), ɵmpd(4608, SessionService, SessionService, []), ɵmpd(4608, FrmEventBus, FrmEventBus, []), ɵmpd(4608, HttpService, HttpService, [HttpClient, SessionService]), ɵmpd(4608, FuncsService, FuncsService, [[2, FrameworkVariableService]]), ɵmpd(4608, AppService, AppService, [HttpService, SessionService]), ɵmpd(4608, LoadingService, LoadingService, [ApplicationRef, ComponentFactoryResolver, Injector]), ɵmpd(4608, FrameworkService, FrameworkService, [HttpService, Router, CacheService, SessionService, FrmEventBus, FuncsService, LoadingService, [2, AppService]]), ɵmpd(1073742336, CommonModule, CommonModule, []), ɵmpd(1024, ErrorHandler, ɵangular_packages_platform_browser_platform_browser_a, []), ɵmpd(1024, NgProbeToken, function () { return [ɵangular_packages_router_router_b()]; }, []), ɵmpd(512, ɵangular_packages_router_router_h, ɵangular_packages_router_router_h, [Injector]), ɵmpd(1024, APP_INITIALIZER, function (p0_0, p1_0) { return [ɵangular_packages_platform_browser_platform_browser_j(p0_0), ɵangular_packages_router_router_i(p1_0)]; }, [[2, NgProbeToken], ɵangular_packages_router_router_h]), ɵmpd(512, ApplicationInitStatus, ApplicationInitStatus, [[2, APP_INITIALIZER]]), ɵmpd(131584, ApplicationRef, ApplicationRef, [NgZone, ɵConsole, Injector, ErrorHandler, ComponentFactoryResolver, ApplicationInitStatus]), ɵmpd(1073742336, ApplicationModule, ApplicationModule, [ApplicationRef]), ɵmpd(1073742336, BrowserModule, BrowserModule, [[3, BrowserModule]]), ɵmpd(1073742336, BrowserAnimationsModule, BrowserAnimationsModule, []), ɵmpd(1024, ɵangular_packages_router_router_a, ɵangular_packages_router_router_e, [[3, Router]]), ɵmpd(512, UrlSerializer, DefaultUrlSerializer, []), ɵmpd(512, ChildrenOutletContexts, ChildrenOutletContexts, []), ɵmpd(256, ROUTER_CONFIGURATION, { useHash: true }, []), ɵmpd(1024, LocationStrategy, ɵangular_packages_router_router_d, [PlatformLocation, [2, APP_BASE_HREF], ROUTER_CONFIGURATION]), ɵmpd(512, Location, Location, [LocationStrategy]), ɵmpd(512, ɵangular_packages_common_http_http_d, ɵangular_packages_common_http_http_d, []), ɵmpd(2048, XhrFactory, null, [ɵangular_packages_common_http_http_d]), ɵmpd(512, HttpXhrBackend, HttpXhrBackend, [XhrFactory]), ɵmpd(2048, HttpBackend, null, [HttpXhrBackend]), ɵmpd(512, HttpHandler, ɵHttpInterceptingHandler, [HttpBackend, Injector]), ɵmpd(512, HttpClient, HttpClient, [HttpHandler]), ɵmpd(512, Compiler, Compiler, []), ɵmpd(256, SystemJsNgModuleLoaderConfig, ɵ1, []), ɵmpd(512, NgModuleFactoryLoader, SystemjsLcModuleloaderGenerator, [HttpClient, Compiler, [2, SystemJsNgModuleLoaderConfig]]), ɵmpd(1024, ROUTES, function () { return [[{ path: "ActivityDemo", loadChildren: "./activitydemo/activitydemo#ActivityDemoModule" }]]; }, []), ɵmpd(1024, Router, ɵangular_packages_router_router_f, [ApplicationRef, UrlSerializer, ChildrenOutletContexts, Location, Injector, NgModuleFactoryLoader, Compiler, ROUTES, ROUTER_CONFIGURATION, [2, UrlHandlingStrategy], [2, RouteReuseStrategy]]), ɵmpd(1073742336, RouterModule, RouterModule, [[2, ɵangular_packages_router_router_a], [2, Router]]), ɵmpd(1073742336, AppRoutingModule, AppRoutingModule, []), ɵmpd(1073742336, HttpClientXsrfModule, HttpClientXsrfModule, []), ɵmpd(1073742336, HttpClientModule, HttpClientModule, []), ɵmpd(1073742336, AppModule, AppModule, [Router]), ɵmpd(256, ɵAPP_ROOT, true, []), ɵmpd(256, ANIMATION_MODULE_TYPE, "BrowserAnimations", []), ɵmpd(256, ɵangular_packages_common_http_http_e, "XSRF-TOKEN", []), ɵmpd(256, ɵangular_packages_common_http_http_f, "X-XSRF-TOKEN", [])]); });

            platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)
                .catch(function (err) { return console.error(err); });

        }
    };
});

import * as tslib_1 from "tslib";
import { Injectable, SystemJsNgModuleLoaderConfig, Optional, Compiler } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { from } from "rxjs";
import { switchMap } from "rxjs/operators";
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
    SystemjsLcModuleloaderGenerator = tslib_1.__decorate([
        Injectable(),
        tslib_1.__param(2, Optional()),
        tslib_1.__metadata("design:paramtypes", [HttpClient, Compiler, SystemJsNgModuleLoaderConfig])
    ], SystemjsLcModuleloaderGenerator);
    return SystemjsLcModuleloaderGenerator;
}());
export { SystemjsLcModuleloaderGenerator };

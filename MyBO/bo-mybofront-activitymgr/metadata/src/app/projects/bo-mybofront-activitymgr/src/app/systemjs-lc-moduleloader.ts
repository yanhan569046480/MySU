
import { Injectable, NgModuleFactoryLoader, SystemJsNgModuleLoaderConfig, NgModuleFactory, Optional, Compiler } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { from } from "rxjs";
import { switchMap } from "rxjs/operators";

declare var System: any;
const _SEPARATOR = '#';
const FACTORY_CLASS_SUFFIX = 'NgFactory';

const DEFAULT_CONFIG: SystemJsNgModuleLoaderConfig = {
    factoryPathPrefix: '',
    factoryPathSuffix: '.ngfactory',
};

/**
 * SystemjsLcModuleloaderGenerator that uses SystemJS to load NgModuleFactory
 * @publicApi
 * @deprecated the `string` form of `loadChildren` is deprecated, and `SystemJsNgModuleLoader` is
 * part of its implementation. See `LoadChildren` for more details.
 */
@Injectable()
export class SystemjsLcModuleloaderGenerator implements NgModuleFactoryLoader {
    private _config: SystemJsNgModuleLoaderConfig;


    constructor(private http: HttpClient, private _compiler: Compiler, @Optional() config?: SystemJsNgModuleLoaderConfig) {
        this._config = config || DEFAULT_CONFIG;
    }

    load(path: string): Promise<NgModuleFactory<any>> {
        return this.loadFactory(path);
    }

    private loadFactory(path: string): Promise<NgModuleFactory<any>> {
        let [module, exportName] = path.split(_SEPARATOR);
        let factoryClassSuffix = FACTORY_CLASS_SUFFIX;
        if (exportName === undefined) {
            exportName = 'default';
            factoryClassSuffix = '';
        }
        const splitWithSeperator = module.split("/");
        const formFileName = splitWithSeperator[splitWithSeperator.length - 1];

        const httpObservable = this.http.get("/apps/gsp/mysu/web/bo-mybofront-activitymgr/version.json?version=" + new Date().getTime()).pipe(switchMap((responseData: any[]) => {
            let newVersion = "0.0.1";
            if (responseData) {
                responseData.forEach((item) => {
                    if (item && item.category == "form" && item.key == (formFileName + this._config.factoryPathSuffix)) {
                        newVersion = item.value;
                    }
                });
            }
            const sysjsPromise = System.import(this._config.factoryPathPrefix + module + this._config.factoryPathSuffix + "?version=" + newVersion)
                .then((module: any) => module[exportName + factoryClassSuffix])
                .then((factory: any) => this.checkNotEmpty(factory, module, exportName)) as Promise<NgModuleFactory<any>>;

            const systemjsObservable = from(sysjsPromise);
            return systemjsObservable;
        }));
        return httpObservable.toPromise();
    }

    private checkNotEmpty(value: any, modulePath: string, exportName: string): any {
        if (!value) {
            throw new Error("Cannot find " + exportName + " in " + modulePath);
        }
        return value;
    }
}
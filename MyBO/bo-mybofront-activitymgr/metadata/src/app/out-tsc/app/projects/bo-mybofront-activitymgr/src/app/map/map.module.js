import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { MapComponent } from './components/map.component';
var MapModule = /** @class */ (function () {
    function MapModule() {
    }
    MapModule = tslib_1.__decorate([
        NgModule({
            declarations: [MapComponent],
            exports: [
                MapComponent
            ]
        })
    ], MapModule);
    return MapModule;
}());
export { MapModule };

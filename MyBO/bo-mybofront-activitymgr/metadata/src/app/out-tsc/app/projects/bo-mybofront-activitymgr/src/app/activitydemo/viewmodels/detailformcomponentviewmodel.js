import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';
var ɵ0 = { type: 'string' };
var DetailFormComponentViewmodel = /** @class */ (function (_super) {
    tslib_1.__extends(DetailFormComponentViewmodel, _super);
    function DetailFormComponentViewmodel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bindingPath = '/';
        _this.dom = {};
        return _this;
    }
    DetailFormComponentViewmodel.prototype.edit1 = function (commandParam) { return; };
    DetailFormComponentViewmodel.prototype.save1 = function (commandParam) { return; };
    DetailFormComponentViewmodel.prototype.cancel1 = function (commandParam) { return; };
    tslib_1.__decorate([
        NgCommand({
            name: 'edit1',
            params: {
                id: '{DATA~/detail-form-component/id}',
                transitionAction: 'Edit'
            },
            paramDescriptions: {
                id: ɵ0,
                transitionAction: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], DetailFormComponentViewmodel.prototype, "edit1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'save1',
            params: {}
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], DetailFormComponentViewmodel.prototype, "save1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'cancel1',
            params: {}
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], DetailFormComponentViewmodel.prototype, "cancel1", null);
    DetailFormComponentViewmodel = tslib_1.__decorate([
        Injectable()
    ], DetailFormComponentViewmodel);
    return DetailFormComponentViewmodel;
}(ViewModel));
export { DetailFormComponentViewmodel };
export { ɵ0 };

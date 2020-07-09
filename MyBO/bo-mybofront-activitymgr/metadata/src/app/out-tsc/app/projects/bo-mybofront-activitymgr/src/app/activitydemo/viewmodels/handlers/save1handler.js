import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { ListDataService as ListDataService1 } from '@farris/command-services';
import { CardDataService as CardDataService1 } from '@farris/command-services';
import { StateMachineService as StateMachineService1 } from '@farris/command-services';
import { EndEditService as EndEditService1 } from '@farris/command-services';
import { ValidationService as ValidationService1 } from '@farris/command-services';
var save1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(save1Handler, _super);
    function save1Handler(_ListDataService1, _CardDataService1, _StateMachineService1, _EndEditService1, _ValidationService1) {
        var _this = _super.call(this) || this;
        _this._ListDataService1 = _ListDataService1;
        _this._CardDataService1 = _CardDataService1;
        _this._StateMachineService1 = _StateMachineService1;
        _this._EndEditService1 = _EndEditService1;
        _this._ValidationService1 = _ValidationService1;
        return _this;
    }
    save1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('endEdit', function (context) {
            var args = [];
            return _this.invoke(_this._EndEditService1, 'endEdit', args, context);
        });
        this.addTask('validateAll', function (context) {
            var args = [];
            return _this.invoke(_this._ValidationService1, 'validateAll', args, context);
        });
        this.addTask('save', function (context) {
            var args = [];
            return _this.invoke(_this._CardDataService1, 'save', args, context);
        });
        this.addTask('refresh', function (context) {
            var args = [
                '{COMMAND~/params/loadCmdName}',
                '{COMMAND~/params/loadCmdFrameId}'
            ];
            return _this.invoke(_this._ListDataService1, 'refresh', args, context);
        });
        this.addTask('transit', function (context) {
            var args = [
                'Save'
            ];
            return _this.invoke(_this._StateMachineService1, 'transit', args, context);
        });
        this.addTask('resetValidation', function (context) {
            var args = [];
            return _this.invoke(_this._ValidationService1, 'resetValidation', args, context);
        });
        this.addLink('endEdit', 'validateAll', "1==1");
        this.addLink('validateAll', 'save', "1==1");
        this.addLink('save', 'refresh', "1==1");
        this.addLink('refresh', 'transit', "1==1");
        this.addLink('transit', 'resetValidation', "1==1");
    };
    save1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'save1'
        }),
        tslib_1.__metadata("design:paramtypes", [ListDataService1,
            CardDataService1,
            StateMachineService1,
            EndEditService1,
            ValidationService1])
    ], save1Handler);
    return save1Handler;
}(CommandHandler));
export { save1Handler };

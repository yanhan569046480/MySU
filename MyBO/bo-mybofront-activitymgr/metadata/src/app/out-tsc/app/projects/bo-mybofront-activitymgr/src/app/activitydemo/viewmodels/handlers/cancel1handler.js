import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { ListDataService as ListDataService1 } from '@farris/command-services';
import { CardDataService as CardDataService1 } from '@farris/command-services';
import { StateMachineService as StateMachineService1 } from '@farris/command-services';
import { EndEditService as EndEditService1 } from '@farris/command-services';
import { ValidationService as ValidationService1 } from '@farris/command-services';
var cancel1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(cancel1Handler, _super);
    function cancel1Handler(_ListDataService1, _CardDataService1, _StateMachineService1, _EndEditService1, _ValidationService1) {
        var _this = _super.call(this) || this;
        _this._ListDataService1 = _ListDataService1;
        _this._CardDataService1 = _CardDataService1;
        _this._StateMachineService1 = _StateMachineService1;
        _this._EndEditService1 = _EndEditService1;
        _this._ValidationService1 = _ValidationService1;
        return _this;
    }
    cancel1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('endEdit', function (context) {
            var args = [];
            return _this.invoke(_this._EndEditService1, 'endEdit', args, context);
        });
        this.addTask('cancel', function (context) {
            var args = [];
            return _this.invoke(_this._CardDataService1, 'cancel', args, context);
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
                'Cancel'
            ];
            return _this.invoke(_this._StateMachineService1, 'transit', args, context);
        });
        this.addTask('resetValidation', function (context) {
            var args = [];
            return _this.invoke(_this._ValidationService1, 'resetValidation', args, context);
        });
        this.addLink('endEdit', 'cancel', "1==1");
        this.addLink('cancel', 'refresh', "1==1");
        this.addLink('refresh', 'transit', "1==1");
        this.addLink('transit', 'resetValidation', "1==1");
    };
    cancel1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'cancel1'
        }),
        tslib_1.__metadata("design:paramtypes", [ListDataService1,
            CardDataService1,
            StateMachineService1,
            EndEditService1,
            ValidationService1])
    ], cancel1Handler);
    return cancel1Handler;
}(CommandHandler));
export { cancel1Handler };

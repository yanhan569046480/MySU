import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { CardDataService as CardDataService1 } from '@farris/command-services';
import { StateMachineService as StateMachineService1 } from '@farris/command-services';
var edit1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(edit1Handler, _super);
    function edit1Handler(_CardDataService1, _StateMachineService1) {
        var _this = _super.call(this) || this;
        _this._CardDataService1 = _CardDataService1;
        _this._StateMachineService1 = _StateMachineService1;
        return _this;
    }
    edit1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('update', function (context) {
            var args = [];
            return _this.invoke(_this._CardDataService1, 'update', args, context);
        });
        this.addTask('transit', function (context) {
            var args = [
                'Edit'
            ];
            return _this.invoke(_this._StateMachineService1, 'transit', args, context);
        });
        this.addLink('update', 'transit', "1==1");
    };
    edit1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'edit1'
        }),
        tslib_1.__metadata("design:paramtypes", [CardDataService1,
            StateMachineService1])
    ], edit1Handler);
    return edit1Handler;
}(CommandHandler));
export { edit1Handler };

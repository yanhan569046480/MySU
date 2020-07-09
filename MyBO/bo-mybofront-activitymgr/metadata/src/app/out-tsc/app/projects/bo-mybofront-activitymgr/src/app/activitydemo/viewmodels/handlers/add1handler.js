import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { ListDataService as ListDataService1 } from '@farris/command-services';
import { StateMachineService as StateMachineService1 } from '@farris/command-services';
var add1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(add1Handler, _super);
    function add1Handler(_ListDataService1, _StateMachineService1) {
        var _this = _super.call(this) || this;
        _this._ListDataService1 = _ListDataService1;
        _this._StateMachineService1 = _StateMachineService1;
        return _this;
    }
    add1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('append', function (context) {
            var args = [];
            return _this.invoke(_this._ListDataService1, 'append', args, context);
        });
        this.addTask('transit', function (context) {
            var args = [
                'Create'
            ];
            return _this.invoke(_this._StateMachineService1, 'transit', args, context);
        });
        this.addLink('append', 'transit', "1==1");
    };
    add1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'add1'
        }),
        tslib_1.__metadata("design:paramtypes", [ListDataService1,
            StateMachineService1])
    ], add1Handler);
    return add1Handler;
}(CommandHandler));
export { add1Handler };

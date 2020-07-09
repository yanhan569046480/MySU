import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { EndEditService as EndEditService1 } from '@farris/command-services';
import { NavigationService as NavigationService1 } from '@farris/command-services';
var close1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(close1Handler, _super);
    function close1Handler(_EndEditService1, _NavigationService1) {
        var _this = _super.call(this) || this;
        _this._EndEditService1 = _EndEditService1;
        _this._NavigationService1 = _NavigationService1;
        return _this;
    }
    close1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('endEdit', function (context) {
            var args = [];
            return _this.invoke(_this._EndEditService1, 'endEdit', args, context);
        });
        this.addTask('close', function (context) {
            var args = [];
            return _this.invoke(_this._NavigationService1, 'close', args, context);
        });
        this.addLink('endEdit', 'close', "1==1");
    };
    close1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'close1'
        }),
        tslib_1.__metadata("design:paramtypes", [EndEditService1,
            NavigationService1])
    ], close1Handler);
    return close1Handler;
}(CommandHandler));
export { close1Handler };

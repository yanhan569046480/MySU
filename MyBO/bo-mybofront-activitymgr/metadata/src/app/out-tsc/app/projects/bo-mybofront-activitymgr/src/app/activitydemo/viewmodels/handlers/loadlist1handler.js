import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { NavigationMiddlewareService as NavigationMiddlewareService1 } from '@farris/command-services';
import { ListDataService as ListDataService1 } from '@farris/command-services';
var loadList1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(loadList1Handler, _super);
    function loadList1Handler(_NavigationMiddlewareService1, _ListDataService1) {
        var _this = _super.call(this) || this;
        _this._NavigationMiddlewareService1 = _NavigationMiddlewareService1;
        _this._ListDataService1 = _ListDataService1;
        return _this;
    }
    loadList1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('onClosing', function (context) {
            var args = [];
            return _this.invoke(_this._NavigationMiddlewareService1, 'onClosing', args, context);
        });
        this.addTask('load', function (context) {
            var args = [
                '{COMMAND~/params/filter}',
                '{COMMAND~/params/sort}'
            ];
            return _this.invoke(_this._ListDataService1, 'load', args, context);
        });
        this.addLink('onClosing', 'load', "1==1");
    };
    loadList1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'loadList1'
        }),
        tslib_1.__metadata("design:paramtypes", [NavigationMiddlewareService1,
            ListDataService1])
    ], loadList1Handler);
    return loadList1Handler;
}(CommandHandler));
export { loadList1Handler };

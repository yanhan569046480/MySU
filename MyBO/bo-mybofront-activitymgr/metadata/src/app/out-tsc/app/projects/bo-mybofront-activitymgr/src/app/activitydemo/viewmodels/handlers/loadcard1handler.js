import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { CardDataService as CardDataService1 } from '@farris/command-services';
var loadCard1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(loadCard1Handler, _super);
    function loadCard1Handler(_CardDataService1) {
        var _this = _super.call(this) || this;
        _this._CardDataService1 = _CardDataService1;
        return _this;
    }
    loadCard1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('update', function (context) {
            var args = [];
            return _this.invoke(_this._CardDataService1, 'update', args, context);
        });
    };
    loadCard1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'loadCard1'
        }),
        tslib_1.__metadata("design:paramtypes", [CardDataService1])
    ], loadCard1Handler);
    return loadCard1Handler;
}(CommandHandler));
export { loadCard1Handler };

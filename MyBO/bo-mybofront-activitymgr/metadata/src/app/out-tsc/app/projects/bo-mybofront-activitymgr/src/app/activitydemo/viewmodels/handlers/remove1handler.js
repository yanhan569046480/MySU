import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { ListDataService as ListDataService1 } from '@farris/command-services';
var remove1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(remove1Handler, _super);
    function remove1Handler(_ListDataService1) {
        var _this = _super.call(this) || this;
        _this._ListDataService1 = _ListDataService1;
        return _this;
    }
    remove1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('remove', function (context) {
            var args = [
                '{DATA~/data-grid-component/id}',
                ''
            ];
            return _this.invoke(_this._ListDataService1, 'remove', args, context);
        });
        this.addTask('refreshAfterRemoving', function (context) {
            var args = [
                '{COMMAND~/params/refreshCommandName}',
                '{COMMAND~/params/refreshCommandFrameId}'
            ];
            return _this.invoke(_this._ListDataService1, 'refreshAfterRemoving', args, context);
        });
        this.addLink('remove', 'refreshAfterRemoving', "1==1");
    };
    remove1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'remove1'
        }),
        tslib_1.__metadata("design:paramtypes", [ListDataService1])
    ], remove1Handler);
    return remove1Handler;
}(CommandHandler));
export { remove1Handler };

import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { CommandService as CommandService1 } from '@farris/command-services';
var changePage1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(changePage1Handler, _super);
    function changePage1Handler(_CommandService1) {
        var _this = _super.call(this) || this;
        _this._CommandService1 = _CommandService1;
        return _this;
    }
    changePage1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('execute', function (context) {
            var args = [
                '{COMMAND~/params/loadCommandName}',
                '{COMMAND~/params/loadCommandFrameId}'
            ];
            return _this.invoke(_this._CommandService1, 'execute', args, context);
        });
    };
    changePage1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'changePage1'
        }),
        tslib_1.__metadata("design:paramtypes", [CommandService1])
    ], changePage1Handler);
    return changePage1Handler;
}(CommandHandler));
export { changePage1Handler };

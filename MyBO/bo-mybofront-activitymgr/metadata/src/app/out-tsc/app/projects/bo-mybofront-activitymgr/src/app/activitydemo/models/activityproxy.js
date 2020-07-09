import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BefProxy, UriService } from '@farris/bef';
var ActivityProxy = /** @class */ (function (_super) {
    tslib_1.__extends(ActivityProxy, _super);
    function ActivityProxy(httpClient, uriService) {
        var _this = _super.call(this, httpClient, uriService) || this;
        _this.apiUrl = 'api/gsp/mysu/v1.0/activitydemo_frm';
        _this.baseUri = uriService.extendUri(_this.apiUrl);
        return _this;
    }
    ActivityProxy = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            UriService])
    ], ActivityProxy);
    return ActivityProxy;
}(BefProxy));
export { ActivityProxy };

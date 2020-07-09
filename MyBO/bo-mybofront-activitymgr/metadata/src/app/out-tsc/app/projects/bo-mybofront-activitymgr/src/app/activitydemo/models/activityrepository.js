import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository } from '@farris/bef';
import { ActivityEntity } from './entities/activityentity';
import { ActivityProxy } from './activityproxy';
var ActivityRepository = /** @class */ (function (_super) {
    tslib_1.__extends(ActivityRepository, _super);
    function ActivityRepository(injector) {
        var _this = _super.call(this, injector) || this;
        _this.name = 'ActivityRepository';
        _this.paginationInfo = {
            ActivityEntity: {
                pageSize: 20,
            }
        };
        _this.proxy = injector.get(ActivityProxy, null);
        return _this;
    }
    ActivityRepository = tslib_1.__decorate([
        Injectable(),
        NgRepository({
            apiUrl: 'api/gsp/mysu/v1.0/activitydemo_frm',
            entityType: ActivityEntity
        }),
        tslib_1.__metadata("design:paramtypes", [Injector])
    ], ActivityRepository);
    return ActivityRepository;
}(BefRepository));
export { ActivityRepository };


import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository, NgVariable } from '@farris/bef';
import { ActivityEntity } from './entities/activityentity';

import { ActivityProxy } from './activityproxy';

@Injectable()
@NgRepository({
    apiUrl: 'api/gsp/mysu/v1.0/activitydemo_frm',
    entityType: ActivityEntity
})
export class ActivityRepository extends BefRepository<ActivityEntity> {
    public name = 'ActivityRepository';

    public proxy: ActivityProxy;
    public paginationInfo = {
        ActivityEntity: {
            pageSize: 20,
        }
    };
    constructor(injector: Injector) {
        super(injector);
        this.proxy = injector.get(ActivityProxy, null);
    }
}
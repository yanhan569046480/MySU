
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

@Injectable()
export class DetailFormComponentViewmodel extends ViewModel {
    public bindingPath = '/';
    public dom = {};
    @NgCommand({
        name: 'edit1',
        params: {
            id: '{DATA~/detail-form-component/id}',
            transitionAction: 'Edit'
        },
        paramDescriptions: {
            id: { type: 'string' },
            transitionAction: { type: 'string' }
        }
    })
    public edit1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'save1',
        params: {
        }
    })
    public save1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'cancel1',
        params: {
        }
    })
    public cancel1(commandParam?: any): Observable<any> { return; }

}
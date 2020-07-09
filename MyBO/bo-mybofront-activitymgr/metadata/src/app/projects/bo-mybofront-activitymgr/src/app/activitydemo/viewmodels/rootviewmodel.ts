
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

import { DataGridComponentViewmodel } from './datagridcomponentviewmodel';

import { DetailFormComponentViewmodel } from './detailformcomponentviewmodel';

@Injectable()
export class RootViewmodel extends ViewModel {
    public bindingPath = '/';
    public dom = {};
    public childViewModels = {
        'DataGridComponentViewmodel' : 'dataGridComponentViewmodel',
        'DetailFormComponentViewmodel' : 'detailFormComponentViewmodel'
    }
    public dataGridComponentViewmodel: DataGridComponentViewmodel;
    public detailFormComponentViewmodel: DetailFormComponentViewmodel;
    @NgCommand({
        name: 'close1',
        params: {
            url: '',
            params: ''
        }
    })
    public close1(commandParam?: any): Observable<any> { return; }

}
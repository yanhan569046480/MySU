
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

@Injectable()
export class DataGridComponentViewmodel extends ViewModel {
    public bindingPath = '/';
    // farrisDataGrid列集合定义 在对应component中赋值
    public dataGridColumns:any;
    // datGrid 列集合名称 用以bindData使用
    public dataGridColumnsName:string;

    public dom = {
  "dataGrid": {
    "type": "DataGrid",
    "resourceId": "dataGrid",
    "visible": {
      "useQuote": false,
      "value": true
    },
    "id": "dataGrid",
    "size": {},
    "fields": [
      {
        "type": "GridField",
        "resourceId": "gridField_31f4b1d9-0213-48ee-a282-1c527d16c4e8_code",
        "visible": {
          "useQuote": false,
          "value": true
        },
        "id": "gridField_31f4b1d9-0213-48ee-a282-1c527d16c4e8_code",
        "binding": {
          "type": "Form",
          "path": "code"
        },
        "dataField": "code",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "活动编号",
        "readonly": false,
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "resizeable": true,
        "aggregate": {
          "type": "none"
        },
        "groupAggregate": {
          "type": "none"
        },
        "linkedLabelEnabled": false,
        "updateOn": "blur",
        "formatter": {
          "type": "none"
        }
      },
      {
        "type": "GridField",
        "resourceId": "gridField_bd1edf94-9d71-4c07-a2e8-3439c31f9a04_title",
        "visible": {
          "useQuote": false,
          "value": true
        },
        "id": "gridField_bd1edf94-9d71-4c07-a2e8-3439c31f9a04_title",
        "binding": {
          "type": "Form",
          "path": "title"
        },
        "dataField": "title",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "活动主题",
        "readonly": false,
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "resizeable": true,
        "aggregate": {
          "type": "none"
        },
        "groupAggregate": {
          "type": "none"
        },
        "linkedLabelEnabled": false,
        "updateOn": "blur",
        "formatter": {
          "type": "none"
        }
      },
      {
        "type": "GridField",
        "resourceId": "gridField_f664c181-9d27-451e-80ca-657cd1f078c4_location",
        "visible": {
          "useQuote": false,
          "value": true
        },
        "id": "gridField_f664c181-9d27-451e-80ca-657cd1f078c4_location",
        "binding": {
          "type": "Form",
          "path": "location"
        },
        "dataField": "location",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "活动地点",
        "readonly": false,
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "resizeable": true,
        "aggregate": {
          "type": "none"
        },
        "groupAggregate": {
          "type": "none"
        },
        "linkedLabelEnabled": false,
        "updateOn": "blur",
        "formatter": {
          "type": "none"
        }
      }
    ],
    "showLineNumber": false,
    "lineNumberTitle": "#",
    "groupTotalText": "Total",
    "filterable": false,
    "groupable": false,
    "rowClass": ""
  }
};
    @NgCommand({
        name: 'loadList1',
        params: {
        }
    })
    public loadList1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'remove1',
        params: {
            id: '{DATA~/data-grid-component/id}'
        },
        paramDescriptions: {
            id: { type: 'string' }
        }
    })
    public remove1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'loadCard1',
        params: {
            id: '{DATA~/data-grid-component/id}',
            frameId: 'detail-form-component'
        },
        paramDescriptions: {
            id: { type: 'string' },
            frameId: { type: 'string' }
        }
    })
    public loadCard1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'add1',
        params: {
        }
    })
    public add1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'changePage1',
        params: {
            loadCommandName: 'loadList1',
            loadCommandFrameId: 'data-grid-component'
        },
        paramDescriptions: {
            loadCommandName: { type: 'string' },
            loadCommandFrameId: { type: 'string' }
        }
    })
    public changePage1(commandParam?: any): Observable<any> { return; }

}
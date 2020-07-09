import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';
var ɵ0 = { type: 'string' }, ɵ1 = { type: 'string' };
var DataGridComponentViewmodel = /** @class */ (function (_super) {
    tslib_1.__extends(DataGridComponentViewmodel, _super);
    function DataGridComponentViewmodel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bindingPath = '/';
        _this.dom = {
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
        return _this;
    }
    DataGridComponentViewmodel.prototype.loadList1 = function (commandParam) { return; };
    DataGridComponentViewmodel.prototype.remove1 = function (commandParam) { return; };
    DataGridComponentViewmodel.prototype.loadCard1 = function (commandParam) { return; };
    DataGridComponentViewmodel.prototype.add1 = function (commandParam) { return; };
    DataGridComponentViewmodel.prototype.changePage1 = function (commandParam) { return; };
    tslib_1.__decorate([
        NgCommand({
            name: 'loadList1',
            params: {}
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], DataGridComponentViewmodel.prototype, "loadList1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'remove1',
            params: {
                id: '{DATA~/data-grid-component/id}'
            },
            paramDescriptions: {
                id: ɵ0
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], DataGridComponentViewmodel.prototype, "remove1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'loadCard1',
            params: {
                id: '{DATA~/data-grid-component/id}',
                frameId: 'detail-form-component'
            },
            paramDescriptions: {
                id: ɵ1,
                frameId: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], DataGridComponentViewmodel.prototype, "loadCard1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'add1',
            params: {}
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], DataGridComponentViewmodel.prototype, "add1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'changePage1',
            params: {
                loadCommandName: 'loadList1',
                loadCommandFrameId: 'data-grid-component'
            },
            paramDescriptions: {
                loadCommandName: { type: 'string' },
                loadCommandFrameId: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], DataGridComponentViewmodel.prototype, "changePage1", null);
    DataGridComponentViewmodel = tslib_1.__decorate([
        Injectable()
    ], DataGridComponentViewmodel);
    return DataGridComponentViewmodel;
}(ViewModel));
export { DataGridComponentViewmodel };
export { ɵ0, ɵ1 };

import * as tslib_1 from "tslib";
import { Component, Injector, ViewChild, HostBinding, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Form, FrameComponent, FARRIS_DEVKIT_FRAME_PROVIDERS, ViewModel, COMMAND_HANDLERS_TOKEN, FRAME_ID, BindingData, Repository, UIState, EXCEPTION_HANDLER, NAMESPACE } from '@farris/devkit';
import { FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS } from '@farris/command-services';
import { KeybindingService } from '@farris/command-services';
import { ActivatedRoute, Router } from '@angular/router';
import { FocusInvalidService } from '@farris/command-services';
import { DatagridComponent } from '@farris/ui-datagrid';
import { CommonUtils } from '@farris/ui-common';
import { BefLookupRestService, DefaultComboHttpService } from '@farris/bef';
import { ServerSideToken } from '@farris/ui-lookup';
import { ComboServerSideToken } from '@farris/ui-combo-list';
import { WizardService } from '@farris/ui-wizard';
import { DataGridComponentViewmodel } from '../../viewmodels/datagridcomponentviewmodel';
import { ActivityRepository } from '../../models/activityrepository';
import { LangService } from '../../lang/lang-pipe';
import { DataGridComponentViewmodelForm } from '../../viewmodels/form/datagridcomponentviewmodelform';
import { DataGridComponentViewmodelUIState } from '../../viewmodels/uistate/datagridcomponentviewmodeluistate';
import { loadList1Handler } from '../../viewmodels/handlers/loadlist1handler';
import { remove1Handler } from '../../viewmodels/handlers/remove1handler';
import { loadCard1Handler } from '../../viewmodels/handlers/loadcard1handler';
import { add1Handler } from '../../viewmodels/handlers/add1handler';
import { changePage1Handler } from '../../viewmodels/handlers/changepage1handler';
var DataGridComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DataGridComponent, _super);
    function DataGridComponent(wizardSer, keybindingService, langService, route, router, rootElement, focusInvalidService, farrisGridUtils, injector) {
        var _this = _super.call(this, injector) || this;
        _this.wizardSer = wizardSer;
        _this.keybindingService = keybindingService;
        _this.langService = langService;
        _this.route = route;
        _this.router = router;
        _this.rootElement = rootElement;
        _this.focusInvalidService = focusInvalidService;
        _this.farrisGridUtils = farrisGridUtils;
        _this.injector = injector;
        _this.dataGridColumns = [];
        _this.cls = 'f-struct-wrapper  f-utils-fill-flex-column ';
        _this.size = {};
        _this.tabsToolbarStates = new BehaviorSubject({});
        _this.tabsToolbarVisibleStates = new BehaviorSubject({});
        _this.SectiondatagridsectionMainTitle = _this.langService.transform('Section/data-grid-section/mainTitle', _this.lang, "");
        _this.SectiondatagridsectionSubTitle = _this.langService.transform('Section/data-grid-section/subTitle', _this.lang, "");
        _this.dataGridlineNumberTitle = _this.langService.transform('DataGrid/dataGrid/lineNumberTitle', _this.lang, "");
        _this.lang = localStorage.getItem('languageCode') || "zh-CHS";
        _this.viewModel.verifycationChanged.subscribe(function (verifyInformations) {
            _this.focusInvalidService.focusGridCell(verifyInformations, _this.dataGridDataGrid);
        });
        return _this;
    }
    DataGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.keybindingService) {
            this.viewModel.keybindingMap.forEach(function (keyBinding, method) {
                _this.keybindingService.register(keyBinding, function () {
                    return _this.viewModel[method]();
                });
            });
        }
        this.dataGridColumns = [
            [
                {
                    field: 'code',
                    width: 100,
                    title: this.langService.transform('gridField_31f4b1d9-0213-48ee-a282-1c527d16c4e8_code', this.lang, "活动编号"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                        options: {},
                    },
                    readonly: false,
                    visible: true,
                    filter: false,
                    formatter: {}
                },
                {
                    field: 'title',
                    width: 100,
                    title: this.langService.transform('gridField_bd1edf94-9d71-4c07-a2e8-3439c31f9a04_title', this.lang, "活动主题"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                        options: {},
                    },
                    readonly: false,
                    visible: true,
                    filter: false,
                    formatter: {}
                },
                {
                    field: 'location',
                    width: 100,
                    title: this.langService.transform('gridField_f664c181-9d27-451e-80ca-657cd1f078c4_location', this.lang, "活动地点"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                        options: {},
                    },
                    readonly: false,
                    visible: true,
                    filter: false,
                    formatter: {}
                }
            ]
        ];
        this.viewModel.dataGridColumns = this.dataGridColumns;
        this.viewModel.dataGridColumnsName = "dataGridColumns";
        this.onFormLoad();
    };
    DataGridComponent.prototype.ngAfterViewInit = function () {
    };
    DataGridComponent.prototype.handleSizeChange = function (size) {
        this.size = size;
    };
    DataGridComponent.prototype.onFormLoad = function () {
        this.viewModel.loadList1();
    };
    tslib_1.__decorate([
        ViewChild('dataGridDataGrid'),
        tslib_1.__metadata("design:type", DatagridComponent)
    ], DataGridComponent.prototype, "dataGridDataGrid", void 0);
    tslib_1.__decorate([
        HostBinding('class'),
        tslib_1.__metadata("design:type", Object)
    ], DataGridComponent.prototype, "cls", void 0);
    DataGridComponent = tslib_1.__decorate([
        Component({
            selector: 'app-datagridcomponent',
            templateUrl: './datagridcomponent.html',
            styleUrls: ['./datagridcomponent.scss'],
            providers: [
                FARRIS_DEVKIT_FRAME_PROVIDERS,
                FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
                { provide: FRAME_ID, useValue: 'data-grid-component' },
                { provide: BindingData, useClass: BindingData },
                { provide: Repository, useExisting: ActivityRepository },
                LangService,
                { provide: NAMESPACE, useValue: 'activitydemo' },
                { provide: ServerSideToken, useClass: BefLookupRestService },
                { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                { provide: Form, useClass: DataGridComponentViewmodelForm },
                { provide: UIState, useClass: DataGridComponentViewmodelUIState },
                { provide: ViewModel, useClass: DataGridComponentViewmodel },
                { provide: EXCEPTION_HANDLER, useValue: null },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: loadList1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: remove1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: loadCard1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: add1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: changePage1Handler, multi: true },
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [WizardService,
            KeybindingService,
            LangService,
            ActivatedRoute,
            Router,
            ElementRef,
            FocusInvalidService,
            CommonUtils,
            Injector])
    ], DataGridComponent);
    return DataGridComponent;
}(FrameComponent));
export { DataGridComponent };

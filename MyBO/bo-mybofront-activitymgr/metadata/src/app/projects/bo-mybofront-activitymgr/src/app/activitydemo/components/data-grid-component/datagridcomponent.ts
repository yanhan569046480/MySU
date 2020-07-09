
import { Component, OnInit, Injector, AfterViewInit, ViewChild, HostBinding, TemplateRef, ElementRef } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Form, FrameEvent, FrameEventBus, FrameComponent, FARRIS_DEVKIT_FRAME_PROVIDERS, ViewModel, COMMAND_HANDLERS_TOKEN, FRAME_ID, StateMachine, BindingData, Repository, UIState, NgSubscription, Declaration, EXCEPTION_HANDLER, NAMESPACE } from '@farris/devkit';
import { FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS, ComponentManagerService } from '@farris/command-services';
import { KeybindingService } from '@farris/command-services';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FocusInvalidService } from '@farris/command-services';

import { EditorTypes } from '@farris/ui-datagrid-editors';
import { CalculationType, DatagridComponent } from '@farris/ui-datagrid';
import { CommonUtils } from '@farris/ui-common';

import { BefLookupRestService, DefaultComboHttpService } from '@farris/bef';
import { ServerSideToken } from '@farris/ui-lookup';
import { ComboServerSideToken } from '@farris/ui-combo-list';
import { WizardService, FarrisPageDetailComponent } from '@farris/ui-wizard';

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

@Component({
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
})
export class DataGridComponent extends FrameComponent implements OnInit, AfterViewInit {
    @ViewChild('dataGridDataGrid')
    dataGridDataGrid: DatagridComponent;
    dataGridColumns =[];

    @HostBinding('class')
    cls = 'f-struct-wrapper  f-utils-fill-flex-column ';
    public viewModel: DataGridComponentViewmodel;
    lang: string;
    size: any = {};
    constructor(
        private wizardSer: WizardService,
        private keybindingService: KeybindingService,
        private langService: LangService,
        private route: ActivatedRoute,
        private router: Router,
        private rootElement: ElementRef,
        private focusInvalidService: FocusInvalidService,
        private farrisGridUtils: CommonUtils,
        public injector: Injector
    ) {
        super(injector);
        this.lang = localStorage.getItem('languageCode') || "zh-CHS";
        this.viewModel.verifycationChanged.subscribe((verifyInformations: any)=>{
            this.focusInvalidService.focusGridCell(verifyInformations, this.dataGridDataGrid);
        });

    }
    ngOnInit() {
            
        if (this.keybindingService) {
            this.viewModel.keybindingMap.forEach((keyBinding, method) => {
                this.keybindingService.register(keyBinding, () => {
                    return this.viewModel[method]();
                });
            });
        }
        this.dataGridColumns =[
            [
                {
                    field: 'code',
                    width: 100,
                    title: this.langService.transform('gridField_31f4b1d9-0213-48ee-a282-1c527d16c4e8_code', this.lang, "活动编号"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign:'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                
                        options: {
                    
                    },
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
                    valign:'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                
                        options: {
                    
                    },
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
                    valign:'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                
                        options: {
                    
                    },
                },
                    readonly: false,
                    visible: true,
                    filter: false,
                    formatter: {}
                }
            ]
        ]; 
        this.viewModel.dataGridColumns= this.dataGridColumns;
        this.viewModel.dataGridColumnsName= "dataGridColumns";
        this.onFormLoad(); 
    }

    ngAfterViewInit(): void {
    }

    handleSizeChange(size: any) {
        this.size = size;
    } 

    public onFormLoad() {
    
    this.viewModel.loadList1(); 
    } 
    tabsToolbarStates = new BehaviorSubject({});
    tabsToolbarVisibleStates = new BehaviorSubject({});
    SectiondatagridsectionMainTitle = this.langService.transform('Section/data-grid-section/mainTitle', this.lang, "");
    SectiondatagridsectionSubTitle = this.langService.transform('Section/data-grid-section/subTitle', this.lang, "");
    dataGridlineNumberTitle= this.langService.transform('DataGrid/dataGrid/lineNumberTitle', this.lang, "");
}
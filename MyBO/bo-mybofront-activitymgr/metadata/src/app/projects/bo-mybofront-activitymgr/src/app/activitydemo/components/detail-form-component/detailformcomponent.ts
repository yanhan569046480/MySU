
import { Component, OnInit, Injector, AfterViewInit, ViewChild, HostBinding, TemplateRef, ElementRef } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Form, FrameEvent, FrameEventBus, FrameComponent, FARRIS_DEVKIT_FRAME_PROVIDERS, ViewModel, COMMAND_HANDLERS_TOKEN, FRAME_ID, StateMachine, BindingData, Repository, UIState, NgSubscription, Declaration, EXCEPTION_HANDLER, NAMESPACE } from '@farris/devkit';
import { FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS, ComponentManagerService } from '@farris/command-services';
import { KeybindingService } from '@farris/command-services';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FocusInvalidService } from '@farris/command-services';

import { BefLookupRestService, DefaultComboHttpService } from '@farris/bef';
import { ServerSideToken } from '@farris/ui-lookup';
import { ComboServerSideToken } from '@farris/ui-combo-list';
import { WizardService, FarrisPageDetailComponent } from '@farris/ui-wizard';

import { DetailFormComponentViewmodel } from '../../viewmodels/detailformcomponentviewmodel';
import { ActivityRepository } from '../../models/activityrepository';
import { LangService } from '../../lang/lang-pipe';

import { DetailFormComponentViewmodelForm } from '../../viewmodels/form/detailformcomponentviewmodelform';
import { DetailFormComponentViewmodelUIState } from '../../viewmodels/uistate/detailformcomponentviewmodeluistate';
import { edit1Handler } from '../../viewmodels/handlers/edit1handler';
import { save1Handler } from '../../viewmodels/handlers/save1handler';
import { cancel1Handler } from '../../viewmodels/handlers/cancel1handler';

@Component({
    selector: 'app-detailformcomponent',
    templateUrl: './detailformcomponent.html',
    styleUrls: ['./detailformcomponent.scss'],
    providers: [
        FARRIS_DEVKIT_FRAME_PROVIDERS,
        FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
        { provide: FRAME_ID, useValue: 'detail-form-component' },
        { provide: BindingData, useClass: BindingData },
        { provide: Repository, useExisting: ActivityRepository },
        LangService,
        { provide: NAMESPACE, useValue: 'activitydemo' },
    
        { provide: ServerSideToken, useClass: BefLookupRestService },
        { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
        { provide: Form, useClass: DetailFormComponentViewmodelForm },
        { provide: UIState, useClass: DetailFormComponentViewmodelUIState },
        { provide: ViewModel, useClass: DetailFormComponentViewmodel },
        { provide: EXCEPTION_HANDLER, useValue: null },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: edit1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: save1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: cancel1Handler, multi: true },
]
})
export class DetailFormComponent extends FrameComponent implements OnInit, AfterViewInit {

    @HostBinding('class')
    cls = 'f-struct-wrapper f-utils-fill-flex-column ';
    public viewModel: DetailFormComponentViewmodel;
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
        public injector: Injector
    ) {
        super(injector);
        this.lang = localStorage.getItem('languageCode') || "zh-CHS";
        this.viewModel.verifycationChanged.subscribe((verifyInformations: any)=>{
            this.focusInvalidService.focusInvalidInput(verifyInformations, this.rootElement);
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
        this.onFormLoad(); 
    }

    ngAfterViewInit(): void {
    }

    handleSizeChange(size: any) {
        this.size = size;
    } 

    public onFormLoad() {
    
    } 
    tabsToolbarStates = new BehaviorSubject({});
    tabsToolbarVisibleStates = new BehaviorSubject({});
    SectiondetailformsectionMainTitle = this.langService.transform('Section/detail-form-section/mainTitle', this.lang, "");
    SectiondetailformsectionSubTitle = this.langService.transform('Section/detail-form-section/subTitle', this.lang, "");
}
System.register(['@angular/core', 'tslib', '@angular/common', '@angular/forms', '@farris/kendo-binding', '@progress/kendo-angular-layout', '@farris/ui-flex-layout', '@farris/ui-forms', '@farris/ui-forms/validation-message', '@farris/ui-loading', '@farris/ui-messager', '@farris/ui-notify', '@farris/ui-response-toolbar', '@farris/bef', '@ngx-translate/core', '@ngx-translate/http-loader', 'rxjs', 'rxjs/operators', '@angular/common/http', '@farris/devkit', '@farris/command-services', '@farris/ui-verify-detail', '@progress/kendo-angular-grid', '@progress/kendo-angular-dateinputs', '@progress/kendo-angular-dropdowns', '@progress/kendo-angular-buttons', '@progress/kendo-angular-inputs', '@progress/kendo-angular-intl', '@progress/kendo-angular-intl/locales/zh/all', '@farris/ui-lookup', '@farris/ui-treetable', '@farris/ui-field-group', '@farris/ui-tabs', '@farris/ui-tag', '@farris/ui-sidebar', '@gsp-svc/formdoc-upload', '@farris/ui-section', '@farris/ui-datepicker', '@farris/ui-time-spinner', '@farris/ui-datagrid', '@farris/ui-wizard', '@gsp-cmp/querysolution', '@farris/ui-button', '@farris/ui-list-view', '@farris/ui-time-picker', '@farris/ui-draggable', '@farris/ui-splitter', '@farris/ui-list-nav', '@farris/ui-text', '@gsp-wf/rtdevkit', '@farris/ui-multi-select', '@farris/ui-input-group', '@farris/ui-combo-list', '@farris/ui-html-editor', '@gsp-svc/cloudprint', '@farris/ui-datagrid-editors', '@farris/ui-view-change', '@farris/ui-switch', '@farris/ui-list-filter', '@farris/ui-avatar', '@farris/ui-calendar', '@gsp-wf/ui-flowchart', '@farris/ui-number-spinner', '@farris/ui-combo-lookup', '@farris/ui-scrollspy', '@gsp-svc/file-viewer', '@farris/ui-language-textbox', '@farris/dynamic-control-group', '@farris/ui-batch-edit-dialog', '@farris/ui-datagrid-filter', '@farris/ui-datagrid-settings', '@angular/router', '@gsp-sys/rtf-common', '@farris/ui-common', '@farris/ui-loading/farris-ui-loading.ngfactory', '@farris/ui-modal/farris-ui-modal.ngfactory', '@farris/ui-messager/farris-ui-messager.ngfactory', '@farris/ui-notify/farris-ui-notify.ngfactory', '@farris/ui-verify-detail/farris-ui-verify-detail.ngfactory', '@progress/kendo-angular-popup.ngfactory', '@progress/kendo-angular-grid.ngfactory', '@farris/ui-tabs/farris-ui-tabs.ngfactory', '@gsp-svc/formdoc-upload/gsp-svc-formdoc-upload.ngfactory', '@farris/ui-datatable/farris-ui-datatable.ngfactory', '@farris/ui-treetable/farris-ui-treetable.ngfactory', '@farris/ui-lookup/farris-ui-lookup.ngfactory', '@farris/ui-time-picker/farris-ui-time-picker.ngfactory', '@farris/ui-popover/farris-ui-popover.ngfactory', '@farris/ui-datepicker/farris-ui-datepicker.ngfactory', '@farris/component-querycondition/farris-component-querycondition.ngfactory', '@gsp-cmp/querysolution/gsp-cmp-querysolution.ngfactory', '@gsp-wf/rtdevkit/gsp-wf-rtdevkit.ngfactory', '@progress/kendo-angular-dialog.ngfactory', '@gsp-svc/cloudprint/gsp-svc-cloudprint.ngfactory', '@farris/ui-language-textbox/farris-ui-language-textbox.ngfactory', '@farris/ui-datagrid-editors/farris-ui-datagrid-editors.ngfactory', '@gsp-wf/ui-flowchart/gsp-wf-ui-flowchart.ngfactory', '@farris/dynamic-control-group/farris-dynamic-control-group.ngfactory', '@gsp-svc/file-viewer/gsp-svc-file-viewer.ngfactory', '@farris/ui-batch-edit-dialog/farris-ui-batch-edit-dialog.ngfactory', '@farris/ui-datagrid-filter/farris-ui-datagrid-filter.ngfactory', '@farris/ui-datagrid-settings/farris-ui-datagrid-settings.ngfactory', '@farris/ui-response-toolbar/farris-ui-response-toolbar.ngfactory', '@farris/ui-locale', '@farris/ui-splitter/farris-ui-splitter.ngfactory', '@farris/ui-datagrid/farris-ui-datagrid.ngfactory', '@angular/platform-browser', '@farris/ui-common/date', '@farris/ui-dialog', '@farris/ui-section/farris-ui-section.ngfactory', '@farris/ui-modal', '@farris/ui-forms/validation-message/farris-ui-forms-validation-message.ngfactory', '@progress/kendo-angular-dialog', '@ecp-caf/caf-common', '@progress/kendo-angular-l10n', '@farris/ui-common/number', '@farris/ui-modal/positioning', '@farris/ui-modal/component-loader', '@progress/kendo-angular-popup', '@progress/kendo-angular-resize-sensor', '@farris/ui-pagination', '@farris/ui-common/column', '@farris/ui-common/events', '@farris/ui-popover', '@farris/component-querycondition', '@gsp-wf/ui-comment', '@farris/ui-perfect-scrollbar', '@farris/ui-dropdown', '@farris/ui-layout', '@farris/ui-datatable', '@farris/ui-progress-step', '@farris/ui-datalist'], function (exports) {
    'use strict';
    var Pipe, Injectable, Injector, HostBinding, Component, ElementRef, NgModule, Input, Output, EventEmitter, ViewChild, LOCALE_ID, ɵcmf, ɵmod, ɵmpd, ComponentFactoryResolver, ɵCodegenComponentFactoryResolver, NgModuleRef, ɵcrt, ɵccf, ɵvid, ɵeld, ɵdid, ViewContainerRef, ChangeDetectorRef, ɵprd, ɵnov, ɵqud, ɵand, TemplateRef, NgZone, ApplicationRef, Renderer2, ɵpid, ɵpad, ɵpod, ɵppd, ɵted, ɵinlineInterpolate, ɵunv, RendererFactory2, PLATFORM_ID, ErrorHandler, __decorate, __metadata, __extends, CommonModule, NgIf, NgLocalization, NgLocaleLocalization, ɵangular_packages_common_common_a, DOCUMENT, FormControl, FormsModule, ReactiveFormsModule, FormGroupDirective, ControlContainer, NgControlStatusGroup, DefaultValueAccessor, COMPOSITION_BUFFER_MODE, NG_VALUE_ACCESSOR, FormControlName, ɵangular_packages_forms_forms_k, NgControl, NgControlStatus, ɵangular_packages_forms_forms_j, FormBuilder, ɵangular_packages_forms_forms_bc, KendoBindingModule, FarrisDatagridUseBindingDataDirective, EditableDirective, FarrisDataGridEndEditDirective, FarrisDataGridRemoteSummaryDirective, InputEndEditDirective, FarrisKendoGridFormatService, FarrisTreetableFormatService, LayoutModule, PanelBarModule, SplitterModule$1, TabStripModule, FlexLayoutModule, FarrisFormsModule, FormMessageModule, ValidationMessageComponent, LoadingModule, LoadingService, LOADING_DEFAULT_CONFIG, loaddingDefaultConfig, MessagerModule, MessagerService, MESSAGER_DEFAULT_CONFIG, MessagerDefaultConfig, NotifyModule, NotifyService, FResponseToolbarModule, ResponseToolbarComponent, UriService, BefProxy, BefRepository, BefLookupRestService, DefaultComboHttpService, FrameworkSessionService, BE_SESSION_HANDLING_STRATEGY_TOKEN, BE_SERVER_URI_TOKEN, TranslateService, TranslateModule, TranslateLoader, MissingTranslationHandler, TranslateCompiler, TranslateFakeCompiler, TranslateParser, TranslateDefaultParser, TranslateStore, USE_DEFAULT_LANG, USE_STORE, TranslateHttpLoader, of, Observable, BehaviorSubject, switchMap, catchError, HttpClient, ɵangular_packages_common_http_http_d, XhrFactory, HttpXhrBackend, HttpBackend, HttpHandler, ɵHttpInterceptingHandler, HttpXsrfTokenExtractor, ɵangular_packages_common_http_http_g, ɵangular_packages_common_http_http_e, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_f, HTTP_INTERCEPTORS, HttpClientXsrfModule, HttpClientModule, Declaration, NgCommand, ViewModel, NgField, Entity, NgRepository, NgValidateForm, Form, NgState, State, NgRenderState, NgAction, StateMachine, UIState, NgCommandHandler, CommandHandler, FARRIS_DEVKIT_FRAME_PROVIDERS, FRAME_ID, BindingData, Repository, NAMESPACE, TranslateToken, AppContext, EXCEPTION_HANDLER, COMMAND_HANDLERS_TOKEN, FrameComponent, NgFormControl, FARRIS_DEVKIT_APP_PROVIDERS, FrameContext, CommandHandlerRegistry, CommandHandlerExtenderRegistry, COMMAND_HANDLER_EXTENDERS_TOKEN, CommandHandlerFactory, CommandBus, RouterParamService, AppContextManager, FrameEventBus, EventBus, Subscription, RestfulService, VARIABLE_PARSERS, DataVariableParser, UIStateVariableParser, StateMachineVariableParser, CommandVariableParser, VariableParseService, EndEditService, NavigationService, FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS, ExceptionHandler, KeybindingService, ApplicationParamService, NavigationMiddlewareService, ListDataService, CardDataService, StateMachineService, CommandService, FocusInvalidService, ValidationService, CommandServicesModule, NavigationEventService, RuntimeFrameworkService, MenuStateService, QuerystringService, FormMessageService, FormLoadingService, FormNotifyService, LanguageService, FormErrorService, FilterConditionService, ChangeItemService, UIStateService, BindingDataService, EntityTraversingService, EntityManipulationService, EntityAggregationService, EntityListService, EntityService, TreeDataService, SubListDataService, RemoveDataService, SaveDataService, EditDataService, FilterConditionDataService, RemoteSummaryService, BeActionService, ApproveService, PrintService, AttachmentDataService, AttachmentService, FileService, GridMiddlewareService, SidebarService, FarrisFormService, FARRIS_FORM_COMPONENTS, DialogService, RouterService, AuthorityService, ɵb, BatchEditService, ComponentManagerService, HideEventService, FormWizardService, CheckService, DataCheckService, EventService, FilterService$1, ParamService, VerifyDetailService, VerifyDetailModule, GridModule, GridComponent, BrowserSupportService, SelectionService, GroupInfoService, GroupsService, ChangeNotificationService, DetailsService, EditService$1, FilterService, PDFService, ResponsiveService, ExcelService, ScrollSyncService, DomEventsService, ColumnResizingService, ColumnReorderService, ColumnInfoService, NavigationService$1, SortService, SharedModule, DragAndDropModule, GroupModule, BodyModule, SharedFilterModule, RowFilterModule, FilterMenuModule, ColumnMenuModule, HeaderModule, FooterModule, PagerModule, DateInputsModule, DOMService, CenturyViewService, DecadeViewService, MonthViewService, YearViewService, WeekNamesService, NavigationService$2, BusViewService, DOMService$1, HoursService, MinutesService, SecondsService, DayPeriodService, EventsModule$1, DateInputModule, CalendarCommonModule, TemplatesModule, VirtualizationModule, CalendarModule$1, DatePickerModule, MultiViewCalendarModule, CalendarsModule, TimePickerModule$1, DateRangeModule, TOUCH_ENABLED, touchEnabled, DropDownsModule, SharedDirectivesModule, SharedModule$1, DropDownListModule, AutoCompleteModule, ComboBoxModule, MultiSelectModule$1, TOUCH_ENABLED$1, touchEnabled$1, ButtonsModule, ButtonModule, ButtonGroupModule, ListModule, SplitButtonModule, DropDownButtonModule, InputsModule, EventsModule, NumericTextBoxModule, TextBoxModule, DraggableModule, SliderModule, SwitchModule$1, MaskedTextBoxModule, ColorPickerModule, IntlModule, IntlService, CldrIntlService, ServerSideToken, LookupModule, TreeTableModule, TreetableService, TTHotkeys, FieldGroupModule, FarrisTabsModule, NgbDropdownConfig, NgbTooltipConfig, TabService, TabConfig, NgbDropdownModule, NgbTooltipModule, FarrisTagModule, FarrisSidebarModule, FarrisSidebarService, UploadDialogMoudle, UploadDialogService, UploadService, UploadModule, FarrisSectionModule, FarrisSectionComponent, FarrisDatePickerModule, FarrisTimeSpinnerModule, DatagridComponent, DatagridModule, DatagridFacadeService, DatagridService, PaginationService$1, ɵq, ValidatorMessagerService, GRID_SETTINGS_SERVICE, NgxPaginationModule, ScrollbarModule, SCROLLBAR_CONFIG, GRID_FILTER_ROW, GRID_EDITORS, WizardService, WizardModule, QuerySolutionModule, QUERYSOLUTION_HANDLER_TOKEN, FarrisButtonModule, ListViewModule, TimePickerModule, AngularDraggableModule, AngularResizableDirective, SplitterModule, SplitterComponent, SplitterPaneComponent, ListNavModule, TextModule, WFSubmiteService, WFRuntimeModule, I18nService, TaskService, UserService, MultiSelectModule, InputGroupModule, ComboServerSideToken, ComboListModule, ComboLocaleService, FarrisHtmlEditorModule, ɵb$2, defaultModules, CloudprintService, CloudPrintModule, ɵa, ɵb$1, ɵc, ɵe, DatagridEditorsModule, EditorProviders, DatagridTextareaComponent, DatagridTextboxComponent, ɵa$1, ɵb$3, ɵc$1, ɵd, ɵe$1, ɵf$1, ɵg$1, ɵh$1, ɵi, ɵj$1, ɵk, ViewChangeModule, SwitchModule, SWITCH_OPTIONS, ListFilterModule, ConvertorService$1, SolutionService$1, QuerySolutionService, AvatarModule, CalendarModule, WFFlowchartService, UiFlowchartModule, UiFlowchartService, NumberSpinnerModule, ComboLookupModule, ScrollspyModule, FileListModule, FileViewerService, ɵj, ɵs, ɵn, ɵf, ɵh, ɵg, ɵt, LanguageTextboxModule, DynamicControlGroupModule, BatchEditDialogModule, BatchEditDialogService, DatagridFilterRowModule, FilterRowComponent, DatagridSettingsModule, DatagridSettingsService, ActivatedRoute, Router, RouterModule, ɵangular_packages_router_router_a, ɵEmptyOutletComponent, RouterOutlet, ChildrenOutletContexts, ROUTES, FrameworkService, AppService, CommonUtils, RuntimeStateService, IdService, FarrisCommonModule, LoadingComponentNgFactory, ModalBackdropComponentNgFactory, ModalContainerComponentNgFactory, MessagerComponentNgFactory, NotifyContainerComponentNgFactory, VerifyDetailComponentNgFactory, PopupComponentNgFactory, StringFilterCellComponentNgFactory, NumericFilterCellComponentNgFactory, BooleanFilterCellComponentNgFactory, DateFilterCellComponentNgFactory, StringFilterMenuComponentNgFactory, NumericFilterMenuComponentNgFactory, DateFilterMenuComponentNgFactory, BooleanFilterMenuComponentNgFactory, NgbTooltipWindowNgFactory, FileUploadComponentNgFactory, UploadDialogComponentNgFactory, DataTableComponentNgFactory, TreeTableComponentNgFactory, LookupLeftComponentNgFactory, LookupTabsComponentNgFactory, TimePickerPanelComponentNgFactory, PopoverContainerComponentNgFactory, CalendarComponentNgFactory, ɵbNgFactory, QueryConditionComponentNgFactory, ɵcNgFactory, ɵeNgFactory, ProcessSelectorComponentNgFactory, WfWorkitemHandleComponentNgFactory, UserHelperComponentNgFactory, TaskAssignComponentNgFactory, TaskSignaddComponentNgFactory, TaskTransferComponentNgFactory, ɵaNgFactory, WindowComponentNgFactory, WindowTitleBarComponentNgFactory, DialogComponentNgFactory, DialogTitleBarComponentNgFactory, ɵdNgFactory, ɵfNgFactory, ɵgNgFactory, LanguageTextPanelComponentNgFactory, ɵlNgFactory, DatagridTextboxComponentNgFactory, DatagridTextareaComponentNgFactory, ɵaNgFactory$1, ɵbNgFactory$1, ɵcNgFactory$1, ɵdNgFactory$1, ɵeNgFactory$1, ɵfNgFactory$1, ɵgNgFactory$1, ɵhNgFactory, ɵiNgFactory, ɵjNgFactory, ɵkNgFactory, UIFlowchartComponentNgFactory, ɵbNgFactory$2, ɵcNgFactory$2, ɵdNgFactory$2, ɵeNgFactory$2, ɵfNgFactory$2, ɵgNgFactory$2, ɵhNgFactory$1, ɵbNgFactory$3, ɵiNgFactory$1, ɵcNgFactory$3, ɵeNgFactory$3, FileListComponentNgFactory, BatchEditDialogComponentNgFactory, FilterRowComponentNgFactory, FilterTextboxComponentNgFactory, FilterCheckboxComponentNgFactory, ConditionEditorComponentNgFactory, FilterDatalistComponentNgFactory, FilterRowPanelComponentNgFactory, FilterRowEditorComponentNgFactory, FilterSelectComponentNgFactory, DatagridSettingsComponentNgFactory, View_ResponseToolbarComponent_0, RenderType_ResponseToolbarComponent, LocaleService, LocaleModule, View_SplitterComponent_0, RenderType_SplitterComponent, View_SplitterPaneComponent_0, RenderType_SplitterPaneComponent, View_DatagridComponent_0, RenderType_DatagridComponent, DomSanitizer, EventManager, DateTimeHelperService, DateHelperModule, DialogService$1, FarrisDialogModule, View_FarrisSectionComponent_0, RenderType_FarrisSectionComponent, BsModalService, ModalModule, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent, WindowService, WindowContainerService, DialogContainerService, DialogService$2, SharedModule$2, WindowModule, DialogModule, SessionService, HttpService, LocalizationService, NumberHelperService, NumberHelperModule, PositioningService, ComponentLoaderFactory, PopupService, POPUP_CONTAINER, PopupModule, ResizeBatchService, ResizeSensorModule, PaginationService, PaginationModule, ColumnFormatService, DataColumnModule, ResizeService, PopoverConfig, PopoverModule, SolutionService, ConvertorService, QueryConditionModule, TaskCommentService, TaskCommentRepository, TaskCommentUIState, TaskCommentViewModel, I18nService$1, WFCommentModule, PerfectScrollbarModule, FDropdownDirectiveTypeModule, LayoutModule$1, DataTableModule, ProgressStepModule, DatalistModule;
    return {
        setters: [function (module) {
            Pipe = module.Pipe;
            Injectable = module.Injectable;
            Injector = module.Injector;
            HostBinding = module.HostBinding;
            Component = module.Component;
            ElementRef = module.ElementRef;
            NgModule = module.NgModule;
            Input = module.Input;
            Output = module.Output;
            EventEmitter = module.EventEmitter;
            ViewChild = module.ViewChild;
            LOCALE_ID = module.LOCALE_ID;
            ɵcmf = module.ɵcmf;
            ɵmod = module.ɵmod;
            ɵmpd = module.ɵmpd;
            ComponentFactoryResolver = module.ComponentFactoryResolver;
            ɵCodegenComponentFactoryResolver = module.ɵCodegenComponentFactoryResolver;
            NgModuleRef = module.NgModuleRef;
            ɵcrt = module.ɵcrt;
            ɵccf = module.ɵccf;
            ɵvid = module.ɵvid;
            ɵeld = module.ɵeld;
            ɵdid = module.ɵdid;
            ViewContainerRef = module.ViewContainerRef;
            ChangeDetectorRef = module.ChangeDetectorRef;
            ɵprd = module.ɵprd;
            ɵnov = module.ɵnov;
            ɵqud = module.ɵqud;
            ɵand = module.ɵand;
            TemplateRef = module.TemplateRef;
            NgZone = module.NgZone;
            ApplicationRef = module.ApplicationRef;
            Renderer2 = module.Renderer2;
            ɵpid = module.ɵpid;
            ɵpad = module.ɵpad;
            ɵpod = module.ɵpod;
            ɵppd = module.ɵppd;
            ɵted = module.ɵted;
            ɵinlineInterpolate = module.ɵinlineInterpolate;
            ɵunv = module.ɵunv;
            RendererFactory2 = module.RendererFactory2;
            PLATFORM_ID = module.PLATFORM_ID;
            ErrorHandler = module.ErrorHandler;
        }, function (module) {
            __decorate = module.__decorate;
            __metadata = module.__metadata;
            __extends = module.__extends;
        }, function (module) {
            CommonModule = module.CommonModule;
            NgIf = module.NgIf;
            NgLocalization = module.NgLocalization;
            NgLocaleLocalization = module.NgLocaleLocalization;
            ɵangular_packages_common_common_a = module.ɵangular_packages_common_common_a;
            DOCUMENT = module.DOCUMENT;
        }, function (module) {
            FormControl = module.FormControl;
            FormsModule = module.FormsModule;
            ReactiveFormsModule = module.ReactiveFormsModule;
            FormGroupDirective = module.FormGroupDirective;
            ControlContainer = module.ControlContainer;
            NgControlStatusGroup = module.NgControlStatusGroup;
            DefaultValueAccessor = module.DefaultValueAccessor;
            COMPOSITION_BUFFER_MODE = module.COMPOSITION_BUFFER_MODE;
            NG_VALUE_ACCESSOR = module.NG_VALUE_ACCESSOR;
            FormControlName = module.FormControlName;
            ɵangular_packages_forms_forms_k = module.ɵangular_packages_forms_forms_k;
            NgControl = module.NgControl;
            NgControlStatus = module.NgControlStatus;
            ɵangular_packages_forms_forms_j = module.ɵangular_packages_forms_forms_j;
            FormBuilder = module.FormBuilder;
            ɵangular_packages_forms_forms_bc = module.ɵangular_packages_forms_forms_bc;
        }, function (module) {
            KendoBindingModule = module.KendoBindingModule;
            FarrisDatagridUseBindingDataDirective = module.FarrisDatagridUseBindingDataDirective;
            EditableDirective = module.EditableDirective;
            FarrisDataGridEndEditDirective = module.FarrisDataGridEndEditDirective;
            FarrisDataGridRemoteSummaryDirective = module.FarrisDataGridRemoteSummaryDirective;
            InputEndEditDirective = module.InputEndEditDirective;
            FarrisKendoGridFormatService = module.FarrisKendoGridFormatService;
            FarrisTreetableFormatService = module.FarrisTreetableFormatService;
        }, function (module) {
            LayoutModule = module.LayoutModule;
            PanelBarModule = module.PanelBarModule;
            SplitterModule$1 = module.SplitterModule;
            TabStripModule = module.TabStripModule;
        }, function (module) {
            FlexLayoutModule = module.FlexLayoutModule;
        }, function (module) {
            FarrisFormsModule = module.FarrisFormsModule;
        }, function (module) {
            FormMessageModule = module.FormMessageModule;
            ValidationMessageComponent = module.ValidationMessageComponent;
        }, function (module) {
            LoadingModule = module.LoadingModule;
            LoadingService = module.LoadingService;
            LOADING_DEFAULT_CONFIG = module.LOADING_DEFAULT_CONFIG;
            loaddingDefaultConfig = module.loaddingDefaultConfig;
        }, function (module) {
            MessagerModule = module.MessagerModule;
            MessagerService = module.MessagerService;
            MESSAGER_DEFAULT_CONFIG = module.MESSAGER_DEFAULT_CONFIG;
            MessagerDefaultConfig = module.MessagerDefaultConfig;
        }, function (module) {
            NotifyModule = module.NotifyModule;
            NotifyService = module.NotifyService;
        }, function (module) {
            FResponseToolbarModule = module.FResponseToolbarModule;
            ResponseToolbarComponent = module.ResponseToolbarComponent;
        }, function (module) {
            UriService = module.UriService;
            BefProxy = module.BefProxy;
            BefRepository = module.BefRepository;
            BefLookupRestService = module.BefLookupRestService;
            DefaultComboHttpService = module.DefaultComboHttpService;
            FrameworkSessionService = module.FrameworkSessionService;
            BE_SESSION_HANDLING_STRATEGY_TOKEN = module.BE_SESSION_HANDLING_STRATEGY_TOKEN;
            BE_SERVER_URI_TOKEN = module.BE_SERVER_URI_TOKEN;
        }, function (module) {
            TranslateService = module.TranslateService;
            TranslateModule = module.TranslateModule;
            TranslateLoader = module.TranslateLoader;
            MissingTranslationHandler = module.MissingTranslationHandler;
            TranslateCompiler = module.TranslateCompiler;
            TranslateFakeCompiler = module.TranslateFakeCompiler;
            TranslateParser = module.TranslateParser;
            TranslateDefaultParser = module.TranslateDefaultParser;
            TranslateStore = module.TranslateStore;
            USE_DEFAULT_LANG = module.USE_DEFAULT_LANG;
            USE_STORE = module.USE_STORE;
        }, function (module) {
            TranslateHttpLoader = module.TranslateHttpLoader;
        }, function (module) {
            of = module.of;
            Observable = module.Observable;
            BehaviorSubject = module.BehaviorSubject;
        }, function (module) {
            switchMap = module.switchMap;
            catchError = module.catchError;
        }, function (module) {
            HttpClient = module.HttpClient;
            ɵangular_packages_common_http_http_d = module.ɵangular_packages_common_http_http_d;
            XhrFactory = module.XhrFactory;
            HttpXhrBackend = module.HttpXhrBackend;
            HttpBackend = module.HttpBackend;
            HttpHandler = module.HttpHandler;
            ɵHttpInterceptingHandler = module.ɵHttpInterceptingHandler;
            HttpXsrfTokenExtractor = module.HttpXsrfTokenExtractor;
            ɵangular_packages_common_http_http_g = module.ɵangular_packages_common_http_http_g;
            ɵangular_packages_common_http_http_e = module.ɵangular_packages_common_http_http_e;
            ɵangular_packages_common_http_http_h = module.ɵangular_packages_common_http_http_h;
            ɵangular_packages_common_http_http_f = module.ɵangular_packages_common_http_http_f;
            HTTP_INTERCEPTORS = module.HTTP_INTERCEPTORS;
            HttpClientXsrfModule = module.HttpClientXsrfModule;
            HttpClientModule = module.HttpClientModule;
        }, function (module) {
            Declaration = module.Declaration;
            NgCommand = module.NgCommand;
            ViewModel = module.ViewModel;
            NgField = module.NgField;
            Entity = module.Entity;
            NgRepository = module.NgRepository;
            NgValidateForm = module.NgValidateForm;
            Form = module.Form;
            NgState = module.NgState;
            State = module.State;
            NgRenderState = module.NgRenderState;
            NgAction = module.NgAction;
            StateMachine = module.StateMachine;
            UIState = module.UIState;
            NgCommandHandler = module.NgCommandHandler;
            CommandHandler = module.CommandHandler;
            FARRIS_DEVKIT_FRAME_PROVIDERS = module.FARRIS_DEVKIT_FRAME_PROVIDERS;
            FRAME_ID = module.FRAME_ID;
            BindingData = module.BindingData;
            Repository = module.Repository;
            NAMESPACE = module.NAMESPACE;
            TranslateToken = module.TranslateToken;
            AppContext = module.AppContext;
            EXCEPTION_HANDLER = module.EXCEPTION_HANDLER;
            COMMAND_HANDLERS_TOKEN = module.COMMAND_HANDLERS_TOKEN;
            FrameComponent = module.FrameComponent;
            NgFormControl = module.NgFormControl;
            FARRIS_DEVKIT_APP_PROVIDERS = module.FARRIS_DEVKIT_APP_PROVIDERS;
            FrameContext = module.FrameContext;
            CommandHandlerRegistry = module.CommandHandlerRegistry;
            CommandHandlerExtenderRegistry = module.CommandHandlerExtenderRegistry;
            COMMAND_HANDLER_EXTENDERS_TOKEN = module.COMMAND_HANDLER_EXTENDERS_TOKEN;
            CommandHandlerFactory = module.CommandHandlerFactory;
            CommandBus = module.CommandBus;
            RouterParamService = module.RouterParamService;
            AppContextManager = module.AppContextManager;
            FrameEventBus = module.FrameEventBus;
            EventBus = module.EventBus;
            Subscription = module.Subscription;
            RestfulService = module.RestfulService;
            VARIABLE_PARSERS = module.VARIABLE_PARSERS;
            DataVariableParser = module.DataVariableParser;
            UIStateVariableParser = module.UIStateVariableParser;
            StateMachineVariableParser = module.StateMachineVariableParser;
            CommandVariableParser = module.CommandVariableParser;
            VariableParseService = module.VariableParseService;
        }, function (module) {
            EndEditService = module.EndEditService;
            NavigationService = module.NavigationService;
            FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS = module.FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS;
            ExceptionHandler = module.ExceptionHandler;
            KeybindingService = module.KeybindingService;
            ApplicationParamService = module.ApplicationParamService;
            NavigationMiddlewareService = module.NavigationMiddlewareService;
            ListDataService = module.ListDataService;
            CardDataService = module.CardDataService;
            StateMachineService = module.StateMachineService;
            CommandService = module.CommandService;
            FocusInvalidService = module.FocusInvalidService;
            ValidationService = module.ValidationService;
            CommandServicesModule = module.CommandServicesModule;
            NavigationEventService = module.NavigationEventService;
            RuntimeFrameworkService = module.RuntimeFrameworkService;
            MenuStateService = module.MenuStateService;
            QuerystringService = module.QuerystringService;
            FormMessageService = module.FormMessageService;
            FormLoadingService = module.FormLoadingService;
            FormNotifyService = module.FormNotifyService;
            LanguageService = module.LanguageService;
            FormErrorService = module.FormErrorService;
            FilterConditionService = module.FilterConditionService;
            ChangeItemService = module.ChangeItemService;
            UIStateService = module.UIStateService;
            BindingDataService = module.BindingDataService;
            EntityTraversingService = module.EntityTraversingService;
            EntityManipulationService = module.EntityManipulationService;
            EntityAggregationService = module.EntityAggregationService;
            EntityListService = module.EntityListService;
            EntityService = module.EntityService;
            TreeDataService = module.TreeDataService;
            SubListDataService = module.SubListDataService;
            RemoveDataService = module.RemoveDataService;
            SaveDataService = module.SaveDataService;
            EditDataService = module.EditDataService;
            FilterConditionDataService = module.FilterConditionDataService;
            RemoteSummaryService = module.RemoteSummaryService;
            BeActionService = module.BeActionService;
            ApproveService = module.ApproveService;
            PrintService = module.PrintService;
            AttachmentDataService = module.AttachmentDataService;
            AttachmentService = module.AttachmentService;
            FileService = module.FileService;
            GridMiddlewareService = module.GridMiddlewareService;
            SidebarService = module.SidebarService;
            FarrisFormService = module.FarrisFormService;
            FARRIS_FORM_COMPONENTS = module.FARRIS_FORM_COMPONENTS;
            DialogService = module.DialogService;
            RouterService = module.RouterService;
            AuthorityService = module.AuthorityService;
            ɵb = module.ɵb;
            BatchEditService = module.BatchEditService;
            ComponentManagerService = module.ComponentManagerService;
            HideEventService = module.HideEventService;
            FormWizardService = module.FormWizardService;
            CheckService = module.CheckService;
            DataCheckService = module.DataCheckService;
            EventService = module.EventService;
            FilterService$1 = module.FilterService;
            ParamService = module.ParamService;
        }, function (module) {
            VerifyDetailService = module.VerifyDetailService;
            VerifyDetailModule = module.VerifyDetailModule;
        }, function (module) {
            GridModule = module.GridModule;
            GridComponent = module.GridComponent;
            BrowserSupportService = module.BrowserSupportService;
            SelectionService = module.SelectionService;
            GroupInfoService = module.GroupInfoService;
            GroupsService = module.GroupsService;
            ChangeNotificationService = module.ChangeNotificationService;
            DetailsService = module.DetailsService;
            EditService$1 = module.EditService$1;
            FilterService = module.FilterService;
            PDFService = module.PDFService;
            ResponsiveService = module.ResponsiveService;
            ExcelService = module.ExcelService;
            ScrollSyncService = module.ScrollSyncService;
            DomEventsService = module.DomEventsService;
            ColumnResizingService = module.ColumnResizingService;
            ColumnReorderService = module.ColumnReorderService;
            ColumnInfoService = module.ColumnInfoService;
            NavigationService$1 = module.NavigationService;
            SortService = module.SortService;
            SharedModule = module.SharedModule;
            DragAndDropModule = module.DragAndDropModule;
            GroupModule = module.GroupModule;
            BodyModule = module.BodyModule;
            SharedFilterModule = module.SharedFilterModule;
            RowFilterModule = module.RowFilterModule;
            FilterMenuModule = module.FilterMenuModule;
            ColumnMenuModule = module.ColumnMenuModule;
            HeaderModule = module.HeaderModule;
            FooterModule = module.FooterModule;
            PagerModule = module.PagerModule;
        }, function (module) {
            DateInputsModule = module.DateInputsModule;
            DOMService = module.DOMService;
            CenturyViewService = module.CenturyViewService;
            DecadeViewService = module.DecadeViewService;
            MonthViewService = module.MonthViewService;
            YearViewService = module.YearViewService;
            WeekNamesService = module.WeekNamesService;
            NavigationService$2 = module.NavigationService;
            BusViewService = module.BusViewService;
            DOMService$1 = module.DOMService$1;
            HoursService = module.HoursService;
            MinutesService = module.MinutesService;
            SecondsService = module.SecondsService;
            DayPeriodService = module.DayPeriodService;
            EventsModule$1 = module.EventsModule;
            DateInputModule = module.DateInputModule;
            CalendarCommonModule = module.CalendarCommonModule;
            TemplatesModule = module.TemplatesModule;
            VirtualizationModule = module.VirtualizationModule;
            CalendarModule$1 = module.CalendarModule;
            DatePickerModule = module.DatePickerModule;
            MultiViewCalendarModule = module.MultiViewCalendarModule;
            CalendarsModule = module.CalendarsModule;
            TimePickerModule$1 = module.TimePickerModule;
            DateRangeModule = module.DateRangeModule;
            TOUCH_ENABLED = module.TOUCH_ENABLED;
            touchEnabled = module.touchEnabled;
        }, function (module) {
            DropDownsModule = module.DropDownsModule;
            SharedDirectivesModule = module.SharedDirectivesModule;
            SharedModule$1 = module.SharedModule;
            DropDownListModule = module.DropDownListModule;
            AutoCompleteModule = module.AutoCompleteModule;
            ComboBoxModule = module.ComboBoxModule;
            MultiSelectModule$1 = module.MultiSelectModule;
            TOUCH_ENABLED$1 = module.TOUCH_ENABLED;
            touchEnabled$1 = module.touchEnabled;
        }, function (module) {
            ButtonsModule = module.ButtonsModule;
            ButtonModule = module.ButtonModule;
            ButtonGroupModule = module.ButtonGroupModule;
            ListModule = module.ListModule;
            SplitButtonModule = module.SplitButtonModule;
            DropDownButtonModule = module.DropDownButtonModule;
        }, function (module) {
            InputsModule = module.InputsModule;
            EventsModule = module.EventsModule;
            NumericTextBoxModule = module.NumericTextBoxModule;
            TextBoxModule = module.TextBoxModule;
            DraggableModule = module.DraggableModule;
            SliderModule = module.SliderModule;
            SwitchModule$1 = module.SwitchModule;
            MaskedTextBoxModule = module.MaskedTextBoxModule;
            ColorPickerModule = module.ColorPickerModule;
        }, function (module) {
            IntlModule = module.IntlModule;
            IntlService = module.IntlService;
            CldrIntlService = module.CldrIntlService;
        }, function () {}, function (module) {
            ServerSideToken = module.ServerSideToken;
            LookupModule = module.LookupModule;
        }, function (module) {
            TreeTableModule = module.TreeTableModule;
            TreetableService = module.TreetableService;
            TTHotkeys = module.TTHotkeys;
        }, function (module) {
            FieldGroupModule = module.FieldGroupModule;
        }, function (module) {
            FarrisTabsModule = module.FarrisTabsModule;
            NgbDropdownConfig = module.NgbDropdownConfig;
            NgbTooltipConfig = module.NgbTooltipConfig;
            TabService = module.TabService;
            TabConfig = module.TabConfig;
            NgbDropdownModule = module.NgbDropdownModule;
            NgbTooltipModule = module.NgbTooltipModule;
        }, function (module) {
            FarrisTagModule = module.FarrisTagModule;
        }, function (module) {
            FarrisSidebarModule = module.FarrisSidebarModule;
            FarrisSidebarService = module.FarrisSidebarService;
        }, function (module) {
            UploadDialogMoudle = module.UploadDialogMoudle;
            UploadDialogService = module.UploadDialogService;
            UploadService = module.UploadService;
            UploadModule = module.UploadModule;
        }, function (module) {
            FarrisSectionModule = module.FarrisSectionModule;
            FarrisSectionComponent = module.FarrisSectionComponent;
        }, function (module) {
            FarrisDatePickerModule = module.FarrisDatePickerModule;
        }, function (module) {
            FarrisTimeSpinnerModule = module.FarrisTimeSpinnerModule;
        }, function (module) {
            DatagridComponent = module.DatagridComponent;
            DatagridModule = module.DatagridModule;
            DatagridFacadeService = module.DatagridFacadeService;
            DatagridService = module.DatagridService;
            PaginationService$1 = module.PaginationService;
            ɵq = module.ɵq;
            ValidatorMessagerService = module.ValidatorMessagerService;
            GRID_SETTINGS_SERVICE = module.GRID_SETTINGS_SERVICE;
            NgxPaginationModule = module.NgxPaginationModule;
            ScrollbarModule = module.ScrollbarModule;
            SCROLLBAR_CONFIG = module.SCROLLBAR_CONFIG;
            GRID_FILTER_ROW = module.GRID_FILTER_ROW;
            GRID_EDITORS = module.GRID_EDITORS;
        }, function (module) {
            WizardService = module.WizardService;
            WizardModule = module.WizardModule;
        }, function (module) {
            QuerySolutionModule = module.QuerySolutionModule;
            QUERYSOLUTION_HANDLER_TOKEN = module.QUERYSOLUTION_HANDLER_TOKEN;
        }, function (module) {
            FarrisButtonModule = module.FarrisButtonModule;
        }, function (module) {
            ListViewModule = module.ListViewModule;
        }, function (module) {
            TimePickerModule = module.TimePickerModule;
        }, function (module) {
            AngularDraggableModule = module.AngularDraggableModule;
            AngularResizableDirective = module.AngularResizableDirective;
        }, function (module) {
            SplitterModule = module.SplitterModule;
            SplitterComponent = module.SplitterComponent;
            SplitterPaneComponent = module.SplitterPaneComponent;
        }, function (module) {
            ListNavModule = module.ListNavModule;
        }, function (module) {
            TextModule = module.TextModule;
        }, function (module) {
            WFSubmiteService = module.WFSubmiteService;
            WFRuntimeModule = module.WFRuntimeModule;
            I18nService = module.I18nService;
            TaskService = module.TaskService;
            UserService = module.UserService;
        }, function (module) {
            MultiSelectModule = module.MultiSelectModule;
        }, function (module) {
            InputGroupModule = module.InputGroupModule;
        }, function (module) {
            ComboServerSideToken = module.ComboServerSideToken;
            ComboListModule = module.ComboListModule;
            ComboLocaleService = module.ComboLocaleService;
        }, function (module) {
            FarrisHtmlEditorModule = module.FarrisHtmlEditorModule;
            ɵb$2 = module.ɵb;
            defaultModules = module.defaultModules;
        }, function (module) {
            CloudprintService = module.CloudprintService;
            CloudPrintModule = module.CloudPrintModule;
            ɵa = module.ɵa;
            ɵb$1 = module.ɵb;
            ɵc = module.ɵc;
            ɵe = module.ɵe;
        }, function (module) {
            DatagridEditorsModule = module.DatagridEditorsModule;
            EditorProviders = module.EditorProviders;
            DatagridTextareaComponent = module.DatagridTextareaComponent;
            DatagridTextboxComponent = module.DatagridTextboxComponent;
            ɵa$1 = module.ɵa;
            ɵb$3 = module.ɵb;
            ɵc$1 = module.ɵc;
            ɵd = module.ɵd;
            ɵe$1 = module.ɵe;
            ɵf$1 = module.ɵf;
            ɵg$1 = module.ɵg;
            ɵh$1 = module.ɵh;
            ɵi = module.ɵi;
            ɵj$1 = module.ɵj;
            ɵk = module.ɵk;
        }, function (module) {
            ViewChangeModule = module.ViewChangeModule;
        }, function (module) {
            SwitchModule = module.SwitchModule;
            SWITCH_OPTIONS = module.SWITCH_OPTIONS;
        }, function (module) {
            ListFilterModule = module.ListFilterModule;
            ConvertorService$1 = module.ConvertorService;
            SolutionService$1 = module.SolutionService;
            QuerySolutionService = module.QuerySolutionService;
        }, function (module) {
            AvatarModule = module.AvatarModule;
        }, function (module) {
            CalendarModule = module.CalendarModule;
        }, function (module) {
            WFFlowchartService = module.WFFlowchartService;
            UiFlowchartModule = module.UiFlowchartModule;
            UiFlowchartService = module.UiFlowchartService;
        }, function (module) {
            NumberSpinnerModule = module.NumberSpinnerModule;
        }, function (module) {
            ComboLookupModule = module.ComboLookupModule;
        }, function (module) {
            ScrollspyModule = module.ScrollspyModule;
        }, function (module) {
            FileListModule = module.FileListModule;
            FileViewerService = module.FileViewerService;
            ɵj = module.ɵj;
            ɵs = module.ɵs;
            ɵn = module.ɵn;
            ɵf = module.ɵf;
            ɵh = module.ɵh;
            ɵg = module.ɵg;
            ɵt = module.ɵt;
        }, function (module) {
            LanguageTextboxModule = module.LanguageTextboxModule;
        }, function (module) {
            DynamicControlGroupModule = module.DynamicControlGroupModule;
        }, function (module) {
            BatchEditDialogModule = module.BatchEditDialogModule;
            BatchEditDialogService = module.BatchEditDialogService;
        }, function (module) {
            DatagridFilterRowModule = module.DatagridFilterRowModule;
            FilterRowComponent = module.FilterRowComponent;
        }, function (module) {
            DatagridSettingsModule = module.DatagridSettingsModule;
            DatagridSettingsService = module.DatagridSettingsService;
        }, function (module) {
            ActivatedRoute = module.ActivatedRoute;
            Router = module.Router;
            RouterModule = module.RouterModule;
            ɵangular_packages_router_router_a = module.ɵangular_packages_router_router_a;
            ɵEmptyOutletComponent = module.ɵEmptyOutletComponent;
            RouterOutlet = module.RouterOutlet;
            ChildrenOutletContexts = module.ChildrenOutletContexts;
            ROUTES = module.ROUTES;
        }, function (module) {
            FrameworkService = module.FrameworkService;
            AppService = module.AppService;
        }, function (module) {
            CommonUtils = module.CommonUtils;
            RuntimeStateService = module.RuntimeStateService;
            IdService = module.IdService;
            FarrisCommonModule = module.FarrisCommonModule;
        }, function (module) {
            LoadingComponentNgFactory = module.LoadingComponentNgFactory;
        }, function (module) {
            ModalBackdropComponentNgFactory = module.ModalBackdropComponentNgFactory;
            ModalContainerComponentNgFactory = module.ModalContainerComponentNgFactory;
        }, function (module) {
            MessagerComponentNgFactory = module.MessagerComponentNgFactory;
        }, function (module) {
            NotifyContainerComponentNgFactory = module.NotifyContainerComponentNgFactory;
        }, function (module) {
            VerifyDetailComponentNgFactory = module.VerifyDetailComponentNgFactory;
        }, function (module) {
            PopupComponentNgFactory = module.PopupComponentNgFactory;
        }, function (module) {
            StringFilterCellComponentNgFactory = module.StringFilterCellComponentNgFactory;
            NumericFilterCellComponentNgFactory = module.NumericFilterCellComponentNgFactory;
            BooleanFilterCellComponentNgFactory = module.BooleanFilterCellComponentNgFactory;
            DateFilterCellComponentNgFactory = module.DateFilterCellComponentNgFactory;
            StringFilterMenuComponentNgFactory = module.StringFilterMenuComponentNgFactory;
            NumericFilterMenuComponentNgFactory = module.NumericFilterMenuComponentNgFactory;
            DateFilterMenuComponentNgFactory = module.DateFilterMenuComponentNgFactory;
            BooleanFilterMenuComponentNgFactory = module.BooleanFilterMenuComponentNgFactory;
        }, function (module) {
            NgbTooltipWindowNgFactory = module.NgbTooltipWindowNgFactory;
        }, function (module) {
            FileUploadComponentNgFactory = module.FileUploadComponentNgFactory;
            UploadDialogComponentNgFactory = module.UploadDialogComponentNgFactory;
        }, function (module) {
            DataTableComponentNgFactory = module.DataTableComponentNgFactory;
        }, function (module) {
            TreeTableComponentNgFactory = module.TreeTableComponentNgFactory;
        }, function (module) {
            LookupLeftComponentNgFactory = module.LookupLeftComponentNgFactory;
            LookupTabsComponentNgFactory = module.LookupTabsComponentNgFactory;
        }, function (module) {
            TimePickerPanelComponentNgFactory = module.TimePickerPanelComponentNgFactory;
        }, function (module) {
            PopoverContainerComponentNgFactory = module.PopoverContainerComponentNgFactory;
        }, function (module) {
            CalendarComponentNgFactory = module.CalendarComponentNgFactory;
        }, function (module) {
            ɵbNgFactory = module.ɵbNgFactory;
            QueryConditionComponentNgFactory = module.QueryConditionComponentNgFactory;
        }, function (module) {
            ɵcNgFactory = module.ɵcNgFactory;
            ɵeNgFactory = module.ɵeNgFactory;
        }, function (module) {
            ProcessSelectorComponentNgFactory = module.ProcessSelectorComponentNgFactory;
            WfWorkitemHandleComponentNgFactory = module.WfWorkitemHandleComponentNgFactory;
            UserHelperComponentNgFactory = module.UserHelperComponentNgFactory;
            TaskAssignComponentNgFactory = module.TaskAssignComponentNgFactory;
            TaskSignaddComponentNgFactory = module.TaskSignaddComponentNgFactory;
            TaskTransferComponentNgFactory = module.TaskTransferComponentNgFactory;
            ɵaNgFactory = module.ɵaNgFactory;
        }, function (module) {
            WindowComponentNgFactory = module.WindowComponentNgFactory;
            WindowTitleBarComponentNgFactory = module.WindowTitleBarComponentNgFactory;
            DialogComponentNgFactory = module.DialogComponentNgFactory;
            DialogTitleBarComponentNgFactory = module.DialogTitleBarComponentNgFactory;
        }, function (module) {
            ɵdNgFactory = module.ɵdNgFactory;
            ɵfNgFactory = module.ɵfNgFactory;
            ɵgNgFactory = module.ɵgNgFactory;
        }, function (module) {
            LanguageTextPanelComponentNgFactory = module.LanguageTextPanelComponentNgFactory;
        }, function (module) {
            ɵlNgFactory = module.ɵlNgFactory;
            DatagridTextboxComponentNgFactory = module.DatagridTextboxComponentNgFactory;
            DatagridTextareaComponentNgFactory = module.DatagridTextareaComponentNgFactory;
            ɵaNgFactory$1 = module.ɵaNgFactory;
            ɵbNgFactory$1 = module.ɵbNgFactory;
            ɵcNgFactory$1 = module.ɵcNgFactory;
            ɵdNgFactory$1 = module.ɵdNgFactory;
            ɵeNgFactory$1 = module.ɵeNgFactory;
            ɵfNgFactory$1 = module.ɵfNgFactory;
            ɵgNgFactory$1 = module.ɵgNgFactory;
            ɵhNgFactory = module.ɵhNgFactory;
            ɵiNgFactory = module.ɵiNgFactory;
            ɵjNgFactory = module.ɵjNgFactory;
            ɵkNgFactory = module.ɵkNgFactory;
        }, function (module) {
            UIFlowchartComponentNgFactory = module.UIFlowchartComponentNgFactory;
        }, function (module) {
            ɵbNgFactory$2 = module.ɵbNgFactory;
            ɵcNgFactory$2 = module.ɵcNgFactory;
            ɵdNgFactory$2 = module.ɵdNgFactory;
            ɵeNgFactory$2 = module.ɵeNgFactory;
            ɵfNgFactory$2 = module.ɵfNgFactory;
            ɵgNgFactory$2 = module.ɵgNgFactory;
            ɵhNgFactory$1 = module.ɵhNgFactory;
        }, function (module) {
            ɵbNgFactory$3 = module.ɵbNgFactory;
            ɵiNgFactory$1 = module.ɵiNgFactory;
            ɵcNgFactory$3 = module.ɵcNgFactory;
            ɵeNgFactory$3 = module.ɵeNgFactory;
            FileListComponentNgFactory = module.FileListComponentNgFactory;
        }, function (module) {
            BatchEditDialogComponentNgFactory = module.BatchEditDialogComponentNgFactory;
        }, function (module) {
            FilterRowComponentNgFactory = module.FilterRowComponentNgFactory;
            FilterTextboxComponentNgFactory = module.FilterTextboxComponentNgFactory;
            FilterCheckboxComponentNgFactory = module.FilterCheckboxComponentNgFactory;
            ConditionEditorComponentNgFactory = module.ConditionEditorComponentNgFactory;
            FilterDatalistComponentNgFactory = module.FilterDatalistComponentNgFactory;
            FilterRowPanelComponentNgFactory = module.FilterRowPanelComponentNgFactory;
            FilterRowEditorComponentNgFactory = module.FilterRowEditorComponentNgFactory;
            FilterSelectComponentNgFactory = module.FilterSelectComponentNgFactory;
        }, function (module) {
            DatagridSettingsComponentNgFactory = module.DatagridSettingsComponentNgFactory;
        }, function (module) {
            View_ResponseToolbarComponent_0 = module.View_ResponseToolbarComponent_0;
            RenderType_ResponseToolbarComponent = module.RenderType_ResponseToolbarComponent;
        }, function (module) {
            LocaleService = module.LocaleService;
            LocaleModule = module.LocaleModule;
        }, function (module) {
            View_SplitterComponent_0 = module.View_SplitterComponent_0;
            RenderType_SplitterComponent = module.RenderType_SplitterComponent;
            View_SplitterPaneComponent_0 = module.View_SplitterPaneComponent_0;
            RenderType_SplitterPaneComponent = module.RenderType_SplitterPaneComponent;
        }, function (module) {
            View_DatagridComponent_0 = module.View_DatagridComponent_0;
            RenderType_DatagridComponent = module.RenderType_DatagridComponent;
        }, function (module) {
            DomSanitizer = module.DomSanitizer;
            EventManager = module.EventManager;
        }, function (module) {
            DateTimeHelperService = module.DateTimeHelperService;
            DateHelperModule = module.DateHelperModule;
        }, function (module) {
            DialogService$1 = module.DialogService;
            FarrisDialogModule = module.FarrisDialogModule;
        }, function (module) {
            View_FarrisSectionComponent_0 = module.View_FarrisSectionComponent_0;
            RenderType_FarrisSectionComponent = module.RenderType_FarrisSectionComponent;
        }, function (module) {
            BsModalService = module.BsModalService;
            ModalModule = module.ModalModule;
        }, function (module) {
            View_ValidationMessageComponent_0 = module.View_ValidationMessageComponent_0;
            RenderType_ValidationMessageComponent = module.RenderType_ValidationMessageComponent;
        }, function (module) {
            WindowService = module.WindowService;
            WindowContainerService = module.WindowContainerService;
            DialogContainerService = module.DialogContainerService;
            DialogService$2 = module.DialogService;
            SharedModule$2 = module.SharedModule;
            WindowModule = module.WindowModule;
            DialogModule = module.DialogModule;
        }, function (module) {
            SessionService = module.SessionService;
            HttpService = module.HttpService;
        }, function (module) {
            LocalizationService = module.LocalizationService;
        }, function (module) {
            NumberHelperService = module.NumberHelperService;
            NumberHelperModule = module.NumberHelperModule;
        }, function (module) {
            PositioningService = module.PositioningService;
        }, function (module) {
            ComponentLoaderFactory = module.ComponentLoaderFactory;
        }, function (module) {
            PopupService = module.PopupService;
            POPUP_CONTAINER = module.POPUP_CONTAINER;
            PopupModule = module.PopupModule;
        }, function (module) {
            ResizeBatchService = module.ResizeBatchService;
            ResizeSensorModule = module.ResizeSensorModule;
        }, function (module) {
            PaginationService = module.PaginationService;
            PaginationModule = module.PaginationModule;
        }, function (module) {
            ColumnFormatService = module.ColumnFormatService;
            DataColumnModule = module.DataColumnModule;
        }, function (module) {
            ResizeService = module.ResizeService;
        }, function (module) {
            PopoverConfig = module.PopoverConfig;
            PopoverModule = module.PopoverModule;
        }, function (module) {
            SolutionService = module.SolutionService;
            ConvertorService = module.ConvertorService;
            QueryConditionModule = module.QueryConditionModule;
        }, function (module) {
            TaskCommentService = module.TaskCommentService;
            TaskCommentRepository = module.TaskCommentRepository;
            TaskCommentUIState = module.TaskCommentUIState;
            TaskCommentViewModel = module.TaskCommentViewModel;
            I18nService$1 = module.I18nService;
            WFCommentModule = module.WFCommentModule;
        }, function (module) {
            PerfectScrollbarModule = module.PerfectScrollbarModule;
        }, function (module) {
            FDropdownDirectiveTypeModule = module.FDropdownDirectiveTypeModule;
        }, function (module) {
            LayoutModule$1 = module.LayoutModule;
        }, function (module) {
            DataTableModule = module.DataTableModule;
        }, function (module) {
            ProgressStepModule = module.ProgressStepModule;
        }, function (module) {
            DatalistModule = module.DatalistModule;
        }],
        execute: function () {

            function createTranslateLoader(http, version) {
                var versionSuffix = "";
                if (version) {
                    versionSuffix = "?version=" + version;
                }
                return new TranslateHttpLoader(http, '/apps/gsp/mysu/web/bo-mybofront-activitymgr/activitydemo/i18n/', '.json' + versionSuffix);
            }
            var lang = { "zh-CHS": { "root-component": "", "root-layout": "", "page-header": "", "header-nav": "", "header-title-container": "", "page-header-title": "", "page-header-toolbar": "", "button-add": "新增", "button-edit": "编辑", "button-save": "保存", "button-cancel": "取消", "button-delete": "删除", "button-close": "关闭", "main-container": "", "content-splitter": "", "content-list": "", "data-grid-component-ref": "", "content-main": "", "detail-component-ref": "", "data-grid-component": "", "data-grid-section": "", "Section/data-grid-section/mainTitle": "", "Section/data-grid-section/subTitle": "", "dataGrid": "", "DataGrid/dataGrid/lineNumberTitle": "", "DataGrid/dataGrid/OperateEditButton": "编辑", "DataGrid/dataGrid/OperateDeleteButton": "删除", "DataGrid/dataGrid/OperateColumn": "操作", "gridField_31f4b1d9-0213-48ee-a282-1c527d16c4e8_code": "活动编号", "gridField_bd1edf94-9d71-4c07-a2e8-3439c31f9a04_title": "活动主题", "gridField_f664c181-9d27-451e-80ca-657cd1f078c4_location": "活动地点", "detail-form-component": "", "detail-form-section": "", "Section/detail-form-section/mainTitle": "", "Section/detail-form-section/subTitle": "", "detail-form-layout": "", "form_code": "活动编号", "form_title": "活动主题", "form_location": "活动地点", "form_geoLng": "地理经度", "form_geoLat": "地理纬度", "amap": "" } };
            var LangPipe = /** @class */ (function () {
                function LangPipe(translate, http) {
                    this.translate = translate;
                    this.http = http;
                }
                LangPipe.prototype.transform = function (key, langCode, defaultValue) {
                    var translateValue = this.translate.instant(key);
                    if (translateValue == "JitI18nDefaultValue") {
                        return defaultValue ? defaultValue : "";
                    }
                    return translateValue;
                };
                LangPipe = __decorate([
                    Pipe({ name: 'lang' }),
                    __metadata("design:paramtypes", [TranslateService, HttpClient])
                ], LangPipe);
                return LangPipe;
            }());
            var LangService = /** @class */ (function () {
                function LangService(translate) {
                    this.translate = translate;
                }
                LangService.prototype.transform = function (key, langCode, defaultValue) {
                    var translateValue = this.translate.instant(key);
                    if (translateValue == "JitI18nDefaultValue") {
                        return defaultValue ? defaultValue : "";
                    }
                    return translateValue;
                };
                LangService.prototype.getCurrentLanguage = function () {
                    return this.translate.currentLang;
                };
                LangService = __decorate([
                    Injectable(),
                    __metadata("design:paramtypes", [TranslateService])
                ], LangService);
                return LangService;
            }());
            var TranslateResolveService = /** @class */ (function () {
                function TranslateResolveService(translate, http) {
                    this.translate = translate;
                    this.http = http;
                    translate.defaultLang = 'zh-CHS';
                    translate.setTranslation('zh-CHS', lang['zh-CHS']);
                }
                TranslateResolveService.prototype.resolve = function (route, state) {
                    var _this = this;
                    var langCode = localStorage.getItem('languageCode');
                    if (!langCode) {
                        langCode = "zh-CHS";
                    }
                    if (langCode == "zh-CHS" || (this.translate.defaultLang === langCode && this.translate.currentLoader == createTranslateLoader(this.http, null))) {
                        this.translate.setTranslation('zh-CHS', lang['zh-CHS']);
                        return of(this.translate[langCode]);
                    }
                    else {
                        var httpOb = this.http.get("/apps/gsp/mysu/web/bo-mybofront-activitymgr/version.json?version=" + new Date().getTime()).pipe(switchMap(function (data) {
                            var currentVersion = null;
                            if (data instanceof Array) {
                                var versionKey_1 = "activitydemo/" + langCode + ".json";
                                data.forEach(function (item) {
                                    if (item.category == "i18n" && item.key == versionKey_1) {
                                        currentVersion = item.value;
                                    }
                                });
                            }
                            _this.translate.defaultLang = langCode;
                            _this.translate.currentLang = langCode;
                            _this.translate.currentLoader = createTranslateLoader(_this.http, currentVersion);
                            var tran = _this.translate.getTranslation(langCode).pipe(catchError(function (err) {
                                console.error("read resource file failed,please check!!! " + err);
                                return of(err);
                            }));
                            return tran;
                        }));
                        return httpOb;
                    }
                };
                TranslateResolveService = __decorate([
                    Injectable(),
                    __metadata("design:paramtypes", [TranslateService, HttpClient])
                ], TranslateResolveService);
                return TranslateResolveService;
            }());

            var EventDeclaration = /** @class */ (function (_super) {
                __extends(EventDeclaration, _super);
                function EventDeclaration() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                EventDeclaration = __decorate([
                    Injectable()
                ], EventDeclaration);
                return EventDeclaration;
            }(Declaration));

            var RootViewmodel = /** @class */ (function (_super) {
                __extends(RootViewmodel, _super);
                function RootViewmodel() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.bindingPath = '/';
                    _this.dom = {};
                    _this.childViewModels = {
                        'DataGridComponentViewmodel': 'dataGridComponentViewmodel',
                        'DetailFormComponentViewmodel': 'detailFormComponentViewmodel'
                    };
                    return _this;
                }
                RootViewmodel.prototype.close1 = function (commandParam) { return; };
                __decorate([
                    NgCommand({
                        name: 'close1',
                        params: {
                            url: '',
                            params: ''
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "close1", null);
                RootViewmodel = __decorate([
                    Injectable()
                ], RootViewmodel);
                return RootViewmodel;
            }(ViewModel));

            var ActivityEntity = /** @class */ (function (_super) {
                __extends(ActivityEntity, _super);
                function ActivityEntity() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgField({
                        originalDataField: 'ID',
                        dataField: 'id',
                        primary: true,
                        initValue: '',
                        path: 'ID',
                        validRules: [
                            {
                                type: 'required',
                            },
                            {
                                type: 'maxLength',
                                constraints: [36],
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], ActivityEntity.prototype, "id", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Version',
                        dataField: 'version',
                        initValue: '0001-01-01T00:00:00',
                        path: 'Version',
                    }),
                    __metadata("design:type", String)
                ], ActivityEntity.prototype, "version", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Code',
                        dataField: 'code',
                        initValue: '',
                        path: 'Code',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], ActivityEntity.prototype, "code", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Title',
                        dataField: 'title',
                        initValue: '',
                        path: 'Title',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], ActivityEntity.prototype, "title", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Location',
                        dataField: 'location',
                        initValue: '',
                        path: 'Location',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], ActivityEntity.prototype, "location", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'GeoLng',
                        dataField: 'geoLng',
                        initValue: '',
                        path: 'GeoLng',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], ActivityEntity.prototype, "geoLng", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'GeoLat',
                        dataField: 'geoLat',
                        initValue: '',
                        path: 'GeoLat',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], ActivityEntity.prototype, "geoLat", void 0);
                return ActivityEntity;
            }(Entity));

            var ActivityProxy = /** @class */ (function (_super) {
                __extends(ActivityProxy, _super);
                function ActivityProxy(httpClient, uriService) {
                    var _this = _super.call(this, httpClient, uriService) || this;
                    _this.apiUrl = 'api/gsp/mysu/v1.0/activitydemo_frm';
                    _this.baseUri = uriService.extendUri(_this.apiUrl);
                    return _this;
                }
                ActivityProxy = __decorate([
                    Injectable(),
                    __metadata("design:paramtypes", [HttpClient,
                        UriService])
                ], ActivityProxy);
                return ActivityProxy;
            }(BefProxy));

            var ActivityRepository = /** @class */ (function (_super) {
                __extends(ActivityRepository, _super);
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
                ActivityRepository = __decorate([
                    Injectable(),
                    NgRepository({
                        apiUrl: 'api/gsp/mysu/v1.0/activitydemo_frm',
                        entityType: ActivityEntity
                    }),
                    __metadata("design:paramtypes", [Injector])
                ], ActivityRepository);
                return ActivityRepository;
            }(BefRepository));

            var RootViewmodelForm = /** @class */ (function (_super) {
                __extends(RootViewmodelForm, _super);
                function RootViewmodelForm() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                RootViewmodelForm = __decorate([
                    Injectable(),
                    NgValidateForm({
                        formGroupName: '活动',
                        enableValidate: false
                    }),
                    Injectable()
                ], RootViewmodelForm);
                return RootViewmodelForm;
            }(Form));

            var ɵ0 = function (context) { return context.state === 'init'; }, ɵ1 = function (context) { return context.state === 'init'; }, ɵ2 = function (context) { return context.state === 'add' || context.state === 'edit'; }, ɵ3 = function (context) { return context.state === 'add' || context.state === 'edit'; }, ɵ4 = function (context) { return context.state === 'init'; }, ɵ5 = function (context) { return context.state === 'add' || context.state === 'edit'; };
            var RootViewmodelStateMachine = /** @class */ (function (_super) {
                __extends(RootViewmodelStateMachine, _super);
                function RootViewmodelStateMachine() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgState(),
                    __metadata("design:type", State)
                ], RootViewmodelStateMachine.prototype, "add", void 0);
                __decorate([
                    NgState({
                        initialState: true
                    }),
                    __metadata("design:type", State)
                ], RootViewmodelStateMachine.prototype, "init", void 0);
                __decorate([
                    NgState(),
                    __metadata("design:type", State)
                ], RootViewmodelStateMachine.prototype, "edit", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ0
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canAdd", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ1
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canEdit", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ2
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canCancel", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ3
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canSave", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ4
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canRemove", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ5
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "editable", void 0);
                __decorate([
                    NgAction({
                        transitTo: 'add'
                    }),
                    __metadata("design:type", Function)
                ], RootViewmodelStateMachine.prototype, "Create", void 0);
                __decorate([
                    NgAction({
                        transitTo: 'edit'
                    }),
                    __metadata("design:type", Function)
                ], RootViewmodelStateMachine.prototype, "Edit", void 0);
                __decorate([
                    NgAction({
                        transitTo: 'init'
                    }),
                    __metadata("design:type", Function)
                ], RootViewmodelStateMachine.prototype, "Cancel", void 0);
                __decorate([
                    NgAction({
                        transitTo: 'init'
                    }),
                    __metadata("design:type", Function)
                ], RootViewmodelStateMachine.prototype, "Save", void 0);
                RootViewmodelStateMachine = __decorate([
                    Injectable()
                ], RootViewmodelStateMachine);
                return RootViewmodelStateMachine;
            }(StateMachine));

            var RootViewmodelUIState = /** @class */ (function (_super) {
                __extends(RootViewmodelUIState, _super);
                function RootViewmodelUIState() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                RootViewmodelUIState = __decorate([
                    Injectable()
                ], RootViewmodelUIState);
                return RootViewmodelUIState;
            }(UIState));

            var close1Handler = /** @class */ (function (_super) {
                __extends(close1Handler, _super);
                function close1Handler(_EndEditService1, _NavigationService1) {
                    var _this = _super.call(this) || this;
                    _this._EndEditService1 = _EndEditService1;
                    _this._NavigationService1 = _NavigationService1;
                    return _this;
                }
                close1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('endEdit', function (context) {
                        var args = [];
                        return _this.invoke(_this._EndEditService1, 'endEdit', args, context);
                    });
                    this.addTask('close', function (context) {
                        var args = [];
                        return _this.invoke(_this._NavigationService1, 'close', args, context);
                    });
                    this.addLink('endEdit', 'close', "1==1");
                };
                close1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'close1'
                    }),
                    __metadata("design:paramtypes", [EndEditService,
                        NavigationService])
                ], close1Handler);
                return close1Handler;
            }(CommandHandler));

            var RootComponent = /** @class */ (function (_super) {
                __extends(RootComponent, _super);
                function RootComponent(wizardSer, keybindingService, langService, route, router, rootElement, frameworkService, applicationParamsService, verifyService, stateMachine, injector) {
                    var _this = _super.call(this, injector) || this;
                    _this.wizardSer = wizardSer;
                    _this.keybindingService = keybindingService;
                    _this.langService = langService;
                    _this.route = route;
                    _this.router = router;
                    _this.rootElement = rootElement;
                    _this.frameworkService = frameworkService;
                    _this.applicationParamsService = applicationParamsService;
                    _this.verifyService = verifyService;
                    _this.stateMachine = stateMachine;
                    _this.injector = injector;
                    _this.cls = 'f-page-root  ';
                    _this.size = {};
                    _this.pageHeaderToolbarToolbarItems = [{
                            "id": "button-add",
                            "text": _this.langService.transform('button-add', _this.lang, "新增"),
                            "resourceId": "button-add",
                            "isDP": false,
                            "class": "btn-primary",
                            "children": []
                        }, {
                            "id": "button-edit",
                            "text": _this.langService.transform('button-edit', _this.lang, "编辑"),
                            "resourceId": "button-edit",
                            "isDP": false,
                            "children": []
                        }, {
                            "id": "button-save",
                            "text": _this.langService.transform('button-save', _this.lang, "保存"),
                            "resourceId": "button-save",
                            "isDP": false,
                            "children": []
                        }, {
                            "id": "button-cancel",
                            "text": _this.langService.transform('button-cancel', _this.lang, "取消"),
                            "resourceId": "button-cancel",
                            "isDP": false,
                            "children": []
                        }, {
                            "id": "button-delete",
                            "text": _this.langService.transform('button-delete', _this.lang, "删除"),
                            "resourceId": "button-delete",
                            "isDP": false,
                            "children": []
                        }, {
                            "id": "button-close",
                            "text": _this.langService.transform('button-close', _this.lang, "关闭"),
                            "resourceId": "button-close",
                            "isDP": false,
                            "children": []
                        }
                    ];
                    _this.pageHeaderToolbarToolbarItemsStates = new BehaviorSubject({});
                    _this.pageHeaderToolbarToolbarItemsVisibleStates = new BehaviorSubject({});
                    _this.tabsToolbarStates = new BehaviorSubject({});
                    _this.tabsToolbarVisibleStates = new BehaviorSubject({});
                    _this.lang = localStorage.getItem('languageCode') || "zh-CHS";
                    return _this;
                }
                RootComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (this.keybindingService) {
                        this.viewModel.keybindingMap.forEach(function (keyBinding, method) {
                            _this.keybindingService.register(keyBinding, function () {
                                return _this.viewModel[method]();
                            });
                        });
                    }
                    this.viewModel.verifycationChanged.subscribe(function (verifyInformations) {
                        if (verifyInformations.length) {
                            _this.verifyService.createVerify({
                                'parent': _this.rootElement,
                                'verifyList': verifyInformations,
                                'showType': 'all'
                            });
                        }
                        else {
                            _this.verifyService.clear();
                        }
                    });
                    this.applicationParamsService.parseParams(this.route, this.frameworkService, this.viewModel, function () {
                        _this.onFormLoad();
                    });
                    this.stateMachine.stateChange.subscribe(function () {
                        var pageHeaderToolbarToolbarItemsstates = {
                            'button-add': !_this.viewModel.stateMachine['canAdd'],
                            'button-edit': !_this.viewModel.stateMachine['canEdit'],
                            'button-save': !_this.viewModel.stateMachine['canSave'],
                            'button-cancel': !_this.viewModel.stateMachine['canCancel'],
                            'button-delete': !_this.viewModel.stateMachine['canRemove'],
                            'button-close': false,
                        };
                        _this.pageHeaderToolbarToolbarItemsStates.next(pageHeaderToolbarToolbarItemsstates);
                    });
                    this.stateMachine.stateChange.subscribe(function () {
                        var pageHeaderToolbarToolbarItemsvisibleStates = {
                            'button-add': true,
                            'button-edit': true,
                            'button-save': true,
                            'button-cancel': true,
                            'button-delete': true,
                            'button-close': true,
                        };
                        _this.pageHeaderToolbarToolbarItemsVisibleStates.next(pageHeaderToolbarToolbarItemsvisibleStates);
                    });
                    this.pageHeaderToolbarToolbarItems.forEach(function (toolbarItem) {
                        var transformText = _this.langService.transform(toolbarItem.resourceId, _this.lang, toolbarItem.text);
                        if (transformText) {
                            toolbarItem.text = transformText;
                        }
                    });
                };
                RootComponent.prototype.ngAfterViewInit = function () {
                };
                RootComponent.prototype.handleSizeChange = function (size) {
                    this.size = size;
                };
                RootComponent.prototype.onFormLoad = function () {
                };
                RootComponent.prototype.pageHeaderToolbarClickHandler = function (args) {
                    switch (args.id) {
                        case 'button-add':
                            this.viewModel.dataGridComponentViewmodel.add1();
                            break;
                        case 'button-edit':
                            this.viewModel.detailFormComponentViewmodel.edit1();
                            break;
                        case 'button-save':
                            this.viewModel.detailFormComponentViewmodel.save1();
                            break;
                        case 'button-cancel':
                            this.viewModel.detailFormComponentViewmodel.cancel1();
                            break;
                        case 'button-delete':
                            this.viewModel.dataGridComponentViewmodel.remove1();
                            break;
                        case 'button-close':
                            this.viewModel.close1();
                            break;
                    }
                };
                __decorate([
                    HostBinding('class'),
                    __metadata("design:type", Object)
                ], RootComponent.prototype, "cls", void 0);
                RootComponent = __decorate([
                    Component({
                        selector: 'app-rootcomponent',
                        templateUrl: './rootcomponent.html',
                        styleUrls: ['./rootcomponent.scss'],
                        providers: [
                            FARRIS_DEVKIT_FRAME_PROVIDERS,
                            FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
                            { provide: FRAME_ID, useValue: 'root-component' },
                            { provide: BindingData, useClass: BindingData },
                            { provide: Repository, useExisting: ActivityRepository },
                            LangService,
                            { provide: NAMESPACE, useValue: 'activitydemo' },
                            { provide: ServerSideToken, useClass: BefLookupRestService },
                            { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                            { provide: Form, useClass: RootViewmodelForm },
                            { provide: StateMachine, useClass: RootViewmodelStateMachine },
                            { provide: UIState, useClass: RootViewmodelUIState },
                            FrameworkSessionService,
                            UriService,
                            ActivityProxy,
                            ActivityRepository,
                            { provide: ViewModel, useClass: RootViewmodel },
                            { provide: Declaration, useClass: EventDeclaration },
                            { provide: TranslateToken, useExisting: LangService },
                            { provide: WFSubmiteService, useClass: WFSubmiteService },
                            { provide: CloudprintService, useClass: CloudprintService },
                            { provide: WFFlowchartService, useClass: WFFlowchartService },
                            AppContext,
                            { provide: BE_SESSION_HANDLING_STRATEGY_TOKEN, useValue: "SeparatedSession" },
                            { provide: EXCEPTION_HANDLER, useClass: ExceptionHandler },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: close1Handler, multi: true },
                        ]
                    }),
                    __metadata("design:paramtypes", [WizardService,
                        KeybindingService,
                        LangService,
                        ActivatedRoute,
                        Router,
                        ElementRef,
                        FrameworkService,
                        ApplicationParamService,
                        VerifyDetailService,
                        StateMachine,
                        Injector])
                ], RootComponent);
                return RootComponent;
            }(FrameComponent));

            var routes = [
                {
                    path: '',
                    component: RootComponent,
                    children: [],
                    resolve: {
                        'translate': TranslateResolveService
                    }
                }
            ];
            var ActivityDemoRoutingModule = /** @class */ (function () {
                function ActivityDemoRoutingModule() {
                }
                ActivityDemoRoutingModule = __decorate([
                    NgModule({
                        imports: [
                            RouterModule.forChild(routes)
                        ],
                        exports: [
                            RouterModule
                        ]
                    })
                ], ActivityDemoRoutingModule);
                return ActivityDemoRoutingModule;
            }());

            var MapComponent = /** @class */ (function () {
                function MapComponent() {
                    /**
                     * 输出位置选择事件
                     */
                    this.positionChange = new EventEmitter();
                    this.readonly = false;
                    this.disabled = false;
                }
                MapComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    AMapLoader.load({
                        key: '30ec74b63a74d427b0df1f1ef3323075',
                        version: '2.0',
                        plugins: ['AMap.Scale'] //同步加载的插件列表
                    }).then(function (AMap) {
                        _this.map = new AMap.Map('container', {
                            zoom: 10
                        });
                        _this.map.addControl(new AMap.Scale());
                        _this.map.on('click', function (ev) {
                            if (_this.readonly || _this.disabled)
                                return;
                            if (ev.type == 'click') {
                                _this.positionChange.emit(ev.lnglat);
                                _this.setCenter(ev.lnglat);
                            }
                        });
                        _this.map.getCity(function (info) {
                            _this.city = info.city;
                        });
                        _this.setCenter(_this.position);
                    }).catch(function (e) {
                        console.error(e);
                    });
                };
                MapComponent.prototype.ngOnChanges = function (changes) {
                    if (changes.hasOwnProperty("position")) {
                        this.setCenter(this.position);
                        return;
                    }
                    if (changes.hasOwnProperty("disabled") && this.map) {
                        if (this.disabled) {
                            this.map.setStatus({
                                showIndoorMap: false,
                                resizeEnable: true,
                                dragEnable: false,
                                keyboardEnable: false,
                                doubleClickZoom: false,
                                zoomEnable: false,
                                rotateEnable: false
                            });
                        }
                        else {
                            this.map.setStatus({
                                showIndoorMap: false,
                                resizeEnable: true,
                                dragEnable: true,
                                keyboardEnable: false,
                                doubleClickZoom: false,
                                zoomEnable: true,
                                rotateEnable: false
                            });
                        }
                    }
                };
                /**
                 * 设置中心位置，并做标记
                 * @param pos 地理位置
                 */
                MapComponent.prototype.setCenter = function (pos) {
                    if (!this.map || !pos)
                        return;
                    if (pos.lat == undefined || pos.lng == undefined)
                        return;
                    if (pos.lat == 0 && pos.lng == 0) {
                        this.map.setCity(this.city);
                        return;
                    }
                    this.map.setCenter([pos.lng, pos.lat], false, 1500);
                    // 将创建的点标记添加到已有的地图实例
                    this.marker && this.map.remove(this.marker);
                    this.marker = new AMap.Marker({
                        position: [pos.lng, pos.lat],
                        title: '活动位置'
                    });
                    this.map.add(this.marker);
                };
                __decorate([
                    Input(),
                    __metadata("design:type", Object)
                ], MapComponent.prototype, "position", void 0);
                __decorate([
                    Input(),
                    __metadata("design:type", Boolean)
                ], MapComponent.prototype, "readonly", void 0);
                __decorate([
                    Input(),
                    __metadata("design:type", Boolean)
                ], MapComponent.prototype, "disabled", void 0);
                __decorate([
                    Output(),
                    __metadata("design:type", EventEmitter)
                ], MapComponent.prototype, "positionChange", void 0);
                MapComponent = __decorate([
                    Component({
                        selector: 'app-map',
                        templateUrl: './map.component.html'
                    }),
                    __metadata("design:paramtypes", [])
                ], MapComponent);
                return MapComponent;
            }());

            var MapModule = /** @class */ (function () {
                function MapModule() {
                }
                MapModule = __decorate([
                    NgModule({
                        declarations: [MapComponent],
                        exports: [
                            MapComponent
                        ]
                    })
                ], MapModule);
                return MapModule;
            }());

            var ɵ0$1 = { type: 'string' }, ɵ1$1 = { type: 'string' };
            var DataGridComponentViewmodel = /** @class */ (function (_super) {
                __extends(DataGridComponentViewmodel, _super);
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
                __decorate([
                    NgCommand({
                        name: 'loadList1',
                        params: {}
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], DataGridComponentViewmodel.prototype, "loadList1", null);
                __decorate([
                    NgCommand({
                        name: 'remove1',
                        params: {
                            id: '{DATA~/data-grid-component/id}'
                        },
                        paramDescriptions: {
                            id: ɵ0$1
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], DataGridComponentViewmodel.prototype, "remove1", null);
                __decorate([
                    NgCommand({
                        name: 'loadCard1',
                        params: {
                            id: '{DATA~/data-grid-component/id}',
                            frameId: 'detail-form-component'
                        },
                        paramDescriptions: {
                            id: ɵ1$1,
                            frameId: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], DataGridComponentViewmodel.prototype, "loadCard1", null);
                __decorate([
                    NgCommand({
                        name: 'add1',
                        params: {}
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], DataGridComponentViewmodel.prototype, "add1", null);
                __decorate([
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
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], DataGridComponentViewmodel.prototype, "changePage1", null);
                DataGridComponentViewmodel = __decorate([
                    Injectable()
                ], DataGridComponentViewmodel);
                return DataGridComponentViewmodel;
            }(ViewModel));

            var DataGridComponentViewmodelForm = /** @class */ (function (_super) {
                __extends(DataGridComponentViewmodelForm, _super);
                function DataGridComponentViewmodelForm() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgFormControl({
                        id: 'code',
                        name: "{{gridField_31f4b1d9-0213-48ee-a282-1c527d16c4e8_code}}",
                        binding: 'code',
                        updateOn: 'blur',
                    }),
                    __metadata("design:type", FormControl)
                ], DataGridComponentViewmodelForm.prototype, "code", void 0);
                __decorate([
                    NgFormControl({
                        id: 'title',
                        name: "{{gridField_bd1edf94-9d71-4c07-a2e8-3439c31f9a04_title}}",
                        binding: 'title',
                        updateOn: 'blur',
                    }),
                    __metadata("design:type", FormControl)
                ], DataGridComponentViewmodelForm.prototype, "title", void 0);
                __decorate([
                    NgFormControl({
                        id: 'location',
                        name: "{{gridField_f664c181-9d27-451e-80ca-657cd1f078c4_location}}",
                        binding: 'location',
                        updateOn: 'blur',
                    }),
                    __metadata("design:type", FormControl)
                ], DataGridComponentViewmodelForm.prototype, "location", void 0);
                DataGridComponentViewmodelForm = __decorate([
                    Injectable(),
                    NgValidateForm({
                        formGroupName: '活动',
                        enableValidate: false
                    }),
                    Injectable()
                ], DataGridComponentViewmodelForm);
                return DataGridComponentViewmodelForm;
            }(Form));

            var DataGridComponentViewmodelUIState = /** @class */ (function (_super) {
                __extends(DataGridComponentViewmodelUIState, _super);
                function DataGridComponentViewmodelUIState() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                DataGridComponentViewmodelUIState = __decorate([
                    Injectable()
                ], DataGridComponentViewmodelUIState);
                return DataGridComponentViewmodelUIState;
            }(UIState));

            var loadList1Handler = /** @class */ (function (_super) {
                __extends(loadList1Handler, _super);
                function loadList1Handler(_NavigationMiddlewareService1, _ListDataService1) {
                    var _this = _super.call(this) || this;
                    _this._NavigationMiddlewareService1 = _NavigationMiddlewareService1;
                    _this._ListDataService1 = _ListDataService1;
                    return _this;
                }
                loadList1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('onClosing', function (context) {
                        var args = [];
                        return _this.invoke(_this._NavigationMiddlewareService1, 'onClosing', args, context);
                    });
                    this.addTask('load', function (context) {
                        var args = [
                            '{COMMAND~/params/filter}',
                            '{COMMAND~/params/sort}'
                        ];
                        return _this.invoke(_this._ListDataService1, 'load', args, context);
                    });
                    this.addLink('onClosing', 'load', "1==1");
                };
                loadList1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'loadList1'
                    }),
                    __metadata("design:paramtypes", [NavigationMiddlewareService,
                        ListDataService])
                ], loadList1Handler);
                return loadList1Handler;
            }(CommandHandler));

            var remove1Handler = /** @class */ (function (_super) {
                __extends(remove1Handler, _super);
                function remove1Handler(_ListDataService1) {
                    var _this = _super.call(this) || this;
                    _this._ListDataService1 = _ListDataService1;
                    return _this;
                }
                remove1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('remove', function (context) {
                        var args = [
                            '{DATA~/data-grid-component/id}',
                            ''
                        ];
                        return _this.invoke(_this._ListDataService1, 'remove', args, context);
                    });
                    this.addTask('refreshAfterRemoving', function (context) {
                        var args = [
                            '{COMMAND~/params/refreshCommandName}',
                            '{COMMAND~/params/refreshCommandFrameId}'
                        ];
                        return _this.invoke(_this._ListDataService1, 'refreshAfterRemoving', args, context);
                    });
                    this.addLink('remove', 'refreshAfterRemoving', "1==1");
                };
                remove1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'remove1'
                    }),
                    __metadata("design:paramtypes", [ListDataService])
                ], remove1Handler);
                return remove1Handler;
            }(CommandHandler));

            var loadCard1Handler = /** @class */ (function (_super) {
                __extends(loadCard1Handler, _super);
                function loadCard1Handler(_CardDataService1) {
                    var _this = _super.call(this) || this;
                    _this._CardDataService1 = _CardDataService1;
                    return _this;
                }
                loadCard1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('update', function (context) {
                        var args = [];
                        return _this.invoke(_this._CardDataService1, 'update', args, context);
                    });
                };
                loadCard1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'loadCard1'
                    }),
                    __metadata("design:paramtypes", [CardDataService])
                ], loadCard1Handler);
                return loadCard1Handler;
            }(CommandHandler));

            var add1Handler = /** @class */ (function (_super) {
                __extends(add1Handler, _super);
                function add1Handler(_ListDataService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._ListDataService1 = _ListDataService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                add1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('append', function (context) {
                        var args = [];
                        return _this.invoke(_this._ListDataService1, 'append', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            'Create'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addLink('append', 'transit', "1==1");
                };
                add1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'add1'
                    }),
                    __metadata("design:paramtypes", [ListDataService,
                        StateMachineService])
                ], add1Handler);
                return add1Handler;
            }(CommandHandler));

            var changePage1Handler = /** @class */ (function (_super) {
                __extends(changePage1Handler, _super);
                function changePage1Handler(_CommandService1) {
                    var _this = _super.call(this) || this;
                    _this._CommandService1 = _CommandService1;
                    return _this;
                }
                changePage1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('execute', function (context) {
                        var args = [
                            '{COMMAND~/params/loadCommandName}',
                            '{COMMAND~/params/loadCommandFrameId}'
                        ];
                        return _this.invoke(_this._CommandService1, 'execute', args, context);
                    });
                };
                changePage1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'changePage1'
                    }),
                    __metadata("design:paramtypes", [CommandService])
                ], changePage1Handler);
                return changePage1Handler;
            }(CommandHandler));

            var DataGridComponent = /** @class */ (function (_super) {
                __extends(DataGridComponent, _super);
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
                __decorate([
                    ViewChild('dataGridDataGrid'),
                    __metadata("design:type", DatagridComponent)
                ], DataGridComponent.prototype, "dataGridDataGrid", void 0);
                __decorate([
                    HostBinding('class'),
                    __metadata("design:type", Object)
                ], DataGridComponent.prototype, "cls", void 0);
                DataGridComponent = __decorate([
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
                    __metadata("design:paramtypes", [WizardService,
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

            var ɵ0$2 = { type: 'string' };
            var DetailFormComponentViewmodel = /** @class */ (function (_super) {
                __extends(DetailFormComponentViewmodel, _super);
                function DetailFormComponentViewmodel() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.bindingPath = '/';
                    _this.dom = {};
                    return _this;
                }
                DetailFormComponentViewmodel.prototype.edit1 = function (commandParam) { return; };
                DetailFormComponentViewmodel.prototype.save1 = function (commandParam) { return; };
                DetailFormComponentViewmodel.prototype.cancel1 = function (commandParam) { return; };
                __decorate([
                    NgCommand({
                        name: 'edit1',
                        params: {
                            id: '{DATA~/detail-form-component/id}',
                            transitionAction: 'Edit'
                        },
                        paramDescriptions: {
                            id: ɵ0$2,
                            transitionAction: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], DetailFormComponentViewmodel.prototype, "edit1", null);
                __decorate([
                    NgCommand({
                        name: 'save1',
                        params: {}
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], DetailFormComponentViewmodel.prototype, "save1", null);
                __decorate([
                    NgCommand({
                        name: 'cancel1',
                        params: {}
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], DetailFormComponentViewmodel.prototype, "cancel1", null);
                DetailFormComponentViewmodel = __decorate([
                    Injectable()
                ], DetailFormComponentViewmodel);
                return DetailFormComponentViewmodel;
            }(ViewModel));

            var DetailFormComponentViewmodelForm = /** @class */ (function (_super) {
                __extends(DetailFormComponentViewmodelForm, _super);
                function DetailFormComponentViewmodelForm() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgFormControl({
                        id: 'form_code',
                        name: "{{form_code}}",
                        binding: 'code',
                        updateOn: 'blur',
                    }),
                    __metadata("design:type", FormControl)
                ], DetailFormComponentViewmodelForm.prototype, "code", void 0);
                __decorate([
                    NgFormControl({
                        id: 'form_title',
                        name: "{{form_title}}",
                        binding: 'title',
                        updateOn: 'blur',
                    }),
                    __metadata("design:type", FormControl)
                ], DetailFormComponentViewmodelForm.prototype, "title", void 0);
                __decorate([
                    NgFormControl({
                        id: 'form_location',
                        name: "{{form_location}}",
                        binding: 'location',
                        updateOn: 'blur',
                    }),
                    __metadata("design:type", FormControl)
                ], DetailFormComponentViewmodelForm.prototype, "location", void 0);
                __decorate([
                    NgFormControl({
                        id: 'form_geoLng',
                        name: "{{form_geoLng}}",
                        binding: 'geoLng',
                        updateOn: 'blur',
                    }),
                    __metadata("design:type", FormControl)
                ], DetailFormComponentViewmodelForm.prototype, "geoLng", void 0);
                __decorate([
                    NgFormControl({
                        id: 'form_geoLat',
                        name: "{{form_geoLat}}",
                        binding: 'geoLat',
                        updateOn: 'blur',
                    }),
                    __metadata("design:type", FormControl)
                ], DetailFormComponentViewmodelForm.prototype, "geoLat", void 0);
                DetailFormComponentViewmodelForm = __decorate([
                    Injectable(),
                    NgValidateForm({
                        formGroupName: '活动',
                        enableValidate: false
                    }),
                    Injectable()
                ], DetailFormComponentViewmodelForm);
                return DetailFormComponentViewmodelForm;
            }(Form));

            var DetailFormComponentViewmodelUIState = /** @class */ (function (_super) {
                __extends(DetailFormComponentViewmodelUIState, _super);
                function DetailFormComponentViewmodelUIState() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                DetailFormComponentViewmodelUIState = __decorate([
                    Injectable()
                ], DetailFormComponentViewmodelUIState);
                return DetailFormComponentViewmodelUIState;
            }(UIState));

            var edit1Handler = /** @class */ (function (_super) {
                __extends(edit1Handler, _super);
                function edit1Handler(_CardDataService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._CardDataService1 = _CardDataService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                edit1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('update', function (context) {
                        var args = [];
                        return _this.invoke(_this._CardDataService1, 'update', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            'Edit'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addLink('update', 'transit', "1==1");
                };
                edit1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'edit1'
                    }),
                    __metadata("design:paramtypes", [CardDataService,
                        StateMachineService])
                ], edit1Handler);
                return edit1Handler;
            }(CommandHandler));

            var save1Handler = /** @class */ (function (_super) {
                __extends(save1Handler, _super);
                function save1Handler(_ListDataService1, _CardDataService1, _StateMachineService1, _EndEditService1, _ValidationService1) {
                    var _this = _super.call(this) || this;
                    _this._ListDataService1 = _ListDataService1;
                    _this._CardDataService1 = _CardDataService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    _this._EndEditService1 = _EndEditService1;
                    _this._ValidationService1 = _ValidationService1;
                    return _this;
                }
                save1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('endEdit', function (context) {
                        var args = [];
                        return _this.invoke(_this._EndEditService1, 'endEdit', args, context);
                    });
                    this.addTask('validateAll', function (context) {
                        var args = [];
                        return _this.invoke(_this._ValidationService1, 'validateAll', args, context);
                    });
                    this.addTask('save', function (context) {
                        var args = [];
                        return _this.invoke(_this._CardDataService1, 'save', args, context);
                    });
                    this.addTask('refresh', function (context) {
                        var args = [
                            '{COMMAND~/params/loadCmdName}',
                            '{COMMAND~/params/loadCmdFrameId}'
                        ];
                        return _this.invoke(_this._ListDataService1, 'refresh', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            'Save'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addTask('resetValidation', function (context) {
                        var args = [];
                        return _this.invoke(_this._ValidationService1, 'resetValidation', args, context);
                    });
                    this.addLink('endEdit', 'validateAll', "1==1");
                    this.addLink('validateAll', 'save', "1==1");
                    this.addLink('save', 'refresh', "1==1");
                    this.addLink('refresh', 'transit', "1==1");
                    this.addLink('transit', 'resetValidation', "1==1");
                };
                save1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'save1'
                    }),
                    __metadata("design:paramtypes", [ListDataService,
                        CardDataService,
                        StateMachineService,
                        EndEditService,
                        ValidationService])
                ], save1Handler);
                return save1Handler;
            }(CommandHandler));

            var cancel1Handler = /** @class */ (function (_super) {
                __extends(cancel1Handler, _super);
                function cancel1Handler(_ListDataService1, _CardDataService1, _StateMachineService1, _EndEditService1, _ValidationService1) {
                    var _this = _super.call(this) || this;
                    _this._ListDataService1 = _ListDataService1;
                    _this._CardDataService1 = _CardDataService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    _this._EndEditService1 = _EndEditService1;
                    _this._ValidationService1 = _ValidationService1;
                    return _this;
                }
                cancel1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('endEdit', function (context) {
                        var args = [];
                        return _this.invoke(_this._EndEditService1, 'endEdit', args, context);
                    });
                    this.addTask('cancel', function (context) {
                        var args = [];
                        return _this.invoke(_this._CardDataService1, 'cancel', args, context);
                    });
                    this.addTask('refresh', function (context) {
                        var args = [
                            '{COMMAND~/params/loadCmdName}',
                            '{COMMAND~/params/loadCmdFrameId}'
                        ];
                        return _this.invoke(_this._ListDataService1, 'refresh', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            'Cancel'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addTask('resetValidation', function (context) {
                        var args = [];
                        return _this.invoke(_this._ValidationService1, 'resetValidation', args, context);
                    });
                    this.addLink('endEdit', 'cancel', "1==1");
                    this.addLink('cancel', 'refresh', "1==1");
                    this.addLink('refresh', 'transit', "1==1");
                    this.addLink('transit', 'resetValidation', "1==1");
                };
                cancel1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'cancel1'
                    }),
                    __metadata("design:paramtypes", [ListDataService,
                        CardDataService,
                        StateMachineService,
                        EndEditService,
                        ValidationService])
                ], cancel1Handler);
                return cancel1Handler;
            }(CommandHandler));

            var DetailFormComponent = /** @class */ (function (_super) {
                __extends(DetailFormComponent, _super);
                function DetailFormComponent(wizardSer, keybindingService, langService, route, router, rootElement, focusInvalidService, injector) {
                    var _this = _super.call(this, injector) || this;
                    _this.wizardSer = wizardSer;
                    _this.keybindingService = keybindingService;
                    _this.langService = langService;
                    _this.route = route;
                    _this.router = router;
                    _this.rootElement = rootElement;
                    _this.focusInvalidService = focusInvalidService;
                    _this.injector = injector;
                    _this.cls = 'f-struct-wrapper f-utils-fill-flex-column ';
                    _this.size = {};
                    _this.tabsToolbarStates = new BehaviorSubject({});
                    _this.tabsToolbarVisibleStates = new BehaviorSubject({});
                    _this.SectiondetailformsectionMainTitle = _this.langService.transform('Section/detail-form-section/mainTitle', _this.lang, "");
                    _this.SectiondetailformsectionSubTitle = _this.langService.transform('Section/detail-form-section/subTitle', _this.lang, "");
                    _this.lang = localStorage.getItem('languageCode') || "zh-CHS";
                    _this.viewModel.verifycationChanged.subscribe(function (verifyInformations) {
                        _this.focusInvalidService.focusInvalidInput(verifyInformations, _this.rootElement);
                    });
                    return _this;
                }
                DetailFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (this.keybindingService) {
                        this.viewModel.keybindingMap.forEach(function (keyBinding, method) {
                            _this.keybindingService.register(keyBinding, function () {
                                return _this.viewModel[method]();
                            });
                        });
                    }
                    this.onFormLoad();
                };
                DetailFormComponent.prototype.ngAfterViewInit = function () {
                };
                DetailFormComponent.prototype.handleSizeChange = function (size) {
                    this.size = size;
                };
                DetailFormComponent.prototype.onFormLoad = function () {
                };
                __decorate([
                    HostBinding('class'),
                    __metadata("design:type", Object)
                ], DetailFormComponent.prototype, "cls", void 0);
                DetailFormComponent = __decorate([
                    Component({
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
                    }),
                    __metadata("design:paramtypes", [WizardService,
                        KeybindingService,
                        LangService,
                        ActivatedRoute,
                        Router,
                        ElementRef,
                        FocusInvalidService,
                        Injector])
                ], DetailFormComponent);
                return DetailFormComponent;
            }(FrameComponent));

            var JitMissingTranslationHandler = /** @class */ (function () {
                function JitMissingTranslationHandler() {
                }
                JitMissingTranslationHandler.prototype.handle = function (params) {
                    return "JitI18nDefaultValue";
                };
                return JitMissingTranslationHandler;
            }());
            var ɵ0$3 = (createTranslateLoader$1), ɵ1$2 = localStorage.getItem('languageCode') || 'zh-CHS', ɵ2$1 = function () { return window.location.protocol + "//" + window.location.hostname + ":" + window.location.port; };
            var ActivityDemoModule = /** @class */ (function () {
                function ActivityDemoModule() {
                }
                ActivityDemoModule = __decorate([
                    NgModule({
                        exports: [
                            RootComponent
                        ],
                        entryComponents: [
                            RootComponent
                        ],
                        declarations: [
                            LangPipe,
                            RootComponent,
                            DataGridComponent,
                            DetailFormComponent
                        ],
                        imports: [
                            CommonModule,
                            FormsModule,
                            ReactiveFormsModule,
                            LayoutModule,
                            KendoBindingModule,
                            FlexLayoutModule,
                            LoadingModule.forRoot(),
                            MessagerModule.forRoot(),
                            NotifyModule.forRoot(),
                            CommandServicesModule,
                            FResponseToolbarModule,
                            FarrisFormsModule,
                            FormMessageModule,
                            TranslateModule.forRoot({
                                loader: {
                                    provide: TranslateLoader,
                                    useFactory: ɵ0$3,
                                    deps: [HttpClient]
                                },
                                missingTranslationHandler: { provide: MissingTranslationHandler, useClass: JitMissingTranslationHandler }
                            }),
                            VerifyDetailModule,
                            GridModule,
                            DateInputsModule,
                            DropDownsModule,
                            ButtonsModule,
                            FarrisTabsModule,
                            FarrisTagModule,
                            FarrisSidebarModule,
                            UploadDialogMoudle,
                            InputsModule,
                            IntlModule,
                            LookupModule,
                            TreeTableModule,
                            FieldGroupModule,
                            FarrisSectionModule,
                            FarrisDatePickerModule,
                            FarrisTimeSpinnerModule,
                            WizardModule,
                            QuerySolutionModule,
                            FarrisButtonModule,
                            ListViewModule,
                            TimePickerModule,
                            AngularDraggableModule,
                            SplitterModule,
                            ListNavModule,
                            TextModule,
                            WFRuntimeModule,
                            MultiSelectModule,
                            InputGroupModule,
                            ComboListModule,
                            CloudPrintModule,
                            DatagridEditorsModule,
                            FarrisHtmlEditorModule,
                            ViewChangeModule,
                            ListFilterModule,
                            AvatarModule,
                            UiFlowchartModule,
                            CalendarModule,
                            NumberSpinnerModule,
                            ComboLookupModule,
                            ScrollspyModule,
                            LanguageTextboxModule,
                            DynamicControlGroupModule,
                            FileListModule,
                            SwitchModule.forRoot(),
                            BatchEditDialogModule,
                            DatagridFilterRowModule.forRoot(),
                            DatagridSettingsModule.forRoot(),
                            DatagridModule.forRoot(EditorProviders.slice()),
                            ActivityDemoRoutingModule,
                            MapModule
                        ],
                        providers: [
                            { provide: LOCALE_ID, useValue: ɵ1$2 },
                            TranslateResolveService,
                            FARRIS_DEVKIT_APP_PROVIDERS,
                            FileViewerService,
                            { provide: BE_SERVER_URI_TOKEN, useFactory: ɵ2$1 }
                        ]
                    }),
                    __metadata("design:paramtypes", [])
                ], ActivityDemoModule);
                return ActivityDemoModule;
            }());
            function createTranslateLoader$1(http) {
                return new TranslateHttpLoader(http, '/apps/gsp/mysu/web/bo-mybofront-activitymgr/activitydemo/i18n/', '.json');
            }

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var RouterModuleNgFactory = ɵcmf(RouterModule, [], function (_l) { return ɵmod([ɵmpd(512, ComponentFactoryResolver, ɵCodegenComponentFactoryResolver, [[8, [ɵEmptyOutletComponentNgFactory]], [3, ComponentFactoryResolver], NgModuleRef]), ɵmpd(1073742336, RouterModule, RouterModule, [[2, ɵangular_packages_router_router_a], [2, Router]])]); });
            var styles_ɵEmptyOutletComponent = [];
            var RenderType_ɵEmptyOutletComponent = ɵcrt({ encapsulation: 2, styles: styles_ɵEmptyOutletComponent, data: {} });
            function View_ɵEmptyOutletComponent_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), ɵdid(1, 212992, null, 0, RouterOutlet, [ChildrenOutletContexts, ViewContainerRef, ComponentFactoryResolver, [8, null], ChangeDetectorRef], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
            function View_ɵEmptyOutletComponent_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "ng-component", [], null, null, null, View_ɵEmptyOutletComponent_0, RenderType_ɵEmptyOutletComponent)), ɵdid(1, 49152, null, 0, ɵEmptyOutletComponent, [], null, null)], null, null); }
            var ɵEmptyOutletComponentNgFactory = ɵccf("ng-component", ɵEmptyOutletComponent, View_ɵEmptyOutletComponent_Host_0, {}, {}, []);

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles = [""];

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles$1 = [""];

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles_DataGridComponent = [styles$1];
            var RenderType_DataGridComponent = ɵcrt({ encapsulation: 0, styles: styles_DataGridComponent, data: {} });
            function View_DataGridComponent_2(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 8, "farris-datagrid", [["class", "f-component-grid"], ["farris-grid-end-edit", ""], ["farris-remote-summary-command", ""], ["farris-use-binding-data", ""], ["id", "dataGrid"]], [[4, "position", null], [2, "f-datagrid-full", null], [2, "f-datagrid-auto-height", null]], [[null, "pageChanged"], [null, "selectedRowChange"], [null, "click"], [null, "selectChanged"], [null, "unSelect"], [null, "checkedChange"], [null, "pageSizeChanged"], [null, "scrollYLoad"], [null, "filterChanged"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
                    var pd_0 = (ɵnov(_v, 3).onClick($event) !== false);
                    ad = (pd_0 && ad);
                } if (("pageChanged" === en)) {
                    var pd_1 = (ɵnov(_v, 5).pageChangedHandler($event) !== false);
                    ad = (pd_1 && ad);
                } if (("selectChanged" === en)) {
                    var pd_2 = (ɵnov(_v, 5).selectedRowChanged($event) !== false);
                    ad = (pd_2 && ad);
                } if (("unSelect" === en)) {
                    var pd_3 = (ɵnov(_v, 5).unSelected($event) !== false);
                    ad = (pd_3 && ad);
                } if (("checkedChange" === en)) {
                    var pd_4 = (ɵnov(_v, 5).checkedChanged($event) !== false);
                    ad = (pd_4 && ad);
                } if (("pageSizeChanged" === en)) {
                    var pd_5 = (ɵnov(_v, 5).pageSizeChanged($event) !== false);
                    ad = (pd_5 && ad);
                } if (("scrollYLoad" === en)) {
                    var pd_6 = (ɵnov(_v, 5).scrollY($event) !== false);
                    ad = (pd_6 && ad);
                } if (("filterChanged" === en)) {
                    var pd_7 = (ɵnov(_v, 5).filterChanged($event) !== false);
                    ad = (pd_7 && ad);
                } if (("pageChanged" === en)) {
                    var pd_8 = (_co.viewModel.changePage1($event) !== false);
                    ad = (pd_8 && ad);
                } if (("selectedRowChange" === en)) {
                    var pd_9 = (_co.viewModel.loadCard1($event) !== false);
                    ad = (pd_9 && ad);
                } return ad; }, View_DatagridComponent_0, RenderType_DatagridComponent)), ɵprd(512, null, DatagridFacadeService, DatagridFacadeService, [HttpClient]), ɵprd(512, null, DatagridService, DatagridService, []), ɵdid(3, 6012928, [[1, 4], ["dataGridDataGrid", 4]], 1, DatagridComponent, [ChangeDetectorRef, ElementRef, Injector, NgZone, DatagridFacadeService, DatagridService, ApplicationRef, DomSanitizer, Renderer2], { id: [0, "id"], autoHeight: [1, "autoHeight"], showBorder: [2, "showBorder"], striped: [3, "striped"], footerDataFrom: [4, "footerDataFrom"], fit: [5, "fit"], fitColumns: [6, "fitColumns"], autoFitColumns: [7, "autoFitColumns"], disabled: [8, "disabled"], showLineNumber: [9, "showLineNumber"], lineNumberTitle: [10, "lineNumberTitle"], lockPagination: [11, "lockPagination"], pagination: [12, "pagination"], multiSelect: [13, "multiSelect"], showCheckbox: [14, "showCheckbox"], showAllCheckbox: [15, "showAllCheckbox"], checkOnSelect: [16, "checkOnSelect"], selectOnCheck: [17, "selectOnCheck"], fields: [18, "fields"], nowrap: [19, "nowrap"], virtualized: [20, "virtualized"], virtualizedAsyncLoad: [21, "virtualizedAsyncLoad"], editMode: [22, "editMode"], showGroupColumn: [23, "showGroupColumn"], mergeCell: [24, "mergeCell"] }, { pageSizeChanged: "pageSizeChanged", pageChanged: "pageChanged", filterChanged: "filterChanged", selectChanged: "selectChanged", unSelect: "unSelect", scrollYLoad: "scrollYLoad", checkedChange: "checkedChange" }), ɵqud(603979776, 8, { dgColumns: 1 }), ɵdid(5, 737280, null, 0, FarrisDatagridUseBindingDataDirective, [BindingData, ViewModel, DatagridComponent], null, { selectedRowChange: "selectedRowChange" }), ɵdid(6, 737280, null, 0, EditableDirective, [BindingData, ViewModel, DatagridComponent, DateTimeHelperService, Injector, RuntimeStateService, DialogService$1, NgZone], { gridEditable: [0, "gridEditable"] }, null), ɵdid(7, 147456, null, 0, FarrisDataGridEndEditDirective, [AppContext, DatagridComponent], null, null), ɵdid(8, 16384, null, 0, FarrisDataGridRemoteSummaryDirective, [ViewModel, DatagridComponent], { remoteSummaryCommand: [0, "remoteSummaryCommand"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = "dataGrid"; var currVal_4 = false; var currVal_5 = false; var currVal_6 = true; var currVal_7 = "client"; var currVal_8 = true; var currVal_9 = false; var currVal_10 = false; var currVal_11 = _co.viewModel.stateMachine["editable"]; var currVal_12 = false; var currVal_13 = _co.dataGridlineNumberTitle; var currVal_14 = (_co.viewModel.stateMachine && _co.viewModel.stateMachine["editable"]); var currVal_15 = true; var currVal_16 = false; var currVal_17 = false; var currVal_18 = false; var currVal_19 = true; var currVal_20 = true; var currVal_21 = _co.viewModel.dataGridColumns; var currVal_22 = true; var currVal_23 = false; var currVal_24 = false; var currVal_25 = "cell"; var currVal_26 = true; var currVal_27 = false; _ck(_v, 3, 1, [currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27]); _ck(_v, 5, 0); var currVal_28 = (_co.viewModel.stateMachine && _co.viewModel.stateMachine["editable"]); _ck(_v, 6, 0, currVal_28); var currVal_29 = ""; _ck(_v, 8, 0, currVal_29); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 3).pos; var currVal_1 = ɵnov(_v, 3).hostCls; var currVal_2 = ɵnov(_v, 3).autoHeightCls; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
            function View_DataGridComponent_1(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 10, "farris-section", [["class", "f-section-grid f-section-in-nav"], ["id", "data-grid-section"]], [[2, "f-section", null], [2, "f-section-maximize", null], [2, "f-section-fill", null], [2, "f-section-accordion", null], [2, "f-state-collapse", null], [2, "f-section-custom-accordion", null]], null, null, View_FarrisSectionComponent_0, RenderType_FarrisSectionComponent)), ɵdid(1, 114688, null, 6, FarrisSectionComponent, [], { mainTitle: [0, "mainTitle"], subTitle: [1, "subTitle"], showHeader: [2, "showHeader"], enableMaximize: [3, "enableMaximize"], enableAccordion: [4, "enableAccordion"], fill: [5, "fill"], expandStatus: [6, "expandStatus"] }, null), ɵqud(335544320, 2, { headerDirective: 0 }), ɵqud(335544320, 3, { headerTitleDirective: 0 }), ɵqud(335544320, 4, { headerContentDirective: 0 }), ɵqud(335544320, 5, { headerToolbarDirective: 0 }), ɵqud(335544320, 6, { extendDirective: 0 }), ɵqud(335544320, 7, { contentDirective: 0 }), (_l()(), ɵeld(8, 0, null, 0, 2, "div", [["class", "f-utils-fill"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_DataGridComponent_2)), ɵdid(10, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_6 = _co.SectiondatagridsectionMainTitle; var currVal_7 = _co.SectiondatagridsectionSubTitle; var currVal_8 = false; var currVal_9 = true; var currVal_10 = "default"; var currVal_11 = false; var currVal_12 = true; _ck(_v, 1, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12); var currVal_13 = true; _ck(_v, 10, 0, currVal_13); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).baseCls; var currVal_1 = ɵnov(_v, 1).maxStatus; var currVal_2 = ɵnov(_v, 1).fillCls; var currVal_3 = ɵnov(_v, 1).enableAccordionCls; var currVal_4 = ɵnov(_v, 1).enableCollapseCls; var currVal_5 = ɵnov(_v, 1).enableCustomAccordionCls; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }); }
            function View_DataGridComponent_0(_l) { return ɵvid(0, [ɵqud(671088640, 1, { dataGridDataGrid: 0 }), (_l()(), ɵand(16777216, null, null, 1, null, View_DataGridComponent_1)), ɵdid(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); }, null); }
            function View_DataGridComponent_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 58, "app-datagridcomponent", [], [[8, "className", 0]], null, null, View_DataGridComponent_0, RenderType_DataGridComponent)), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(4608, null, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector]]), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(4608, null, BindingData, BindingData, []), ɵprd(4608, null, ViewModel, DataGridComponentViewmodel, []), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(5120, null, COMMAND_HANDLERS_TOKEN, function (p0_0, p0_1, p1_0, p2_0, p3_0, p3_1, p4_0) { return [new loadList1Handler(p0_0, p0_1), new remove1Handler(p1_0), new loadCard1Handler(p2_0), new add1Handler(p3_0, p3_1), new changePage1Handler(p4_0)]; }, [NavigationMiddlewareService, ListDataService, ListDataService, CardDataService, ListDataService, StateMachineService, CommandService]), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService]]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService, DialogService, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, Form, DataGridComponentViewmodelForm, []), ɵprd(4608, null, UIState, DataGridComponentViewmodelUIState, []), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(2048, null, Repository, null, [ActivityRepository]), ɵprd(512, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(512, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext]), ɵdid(55, 4440064, null, 0, DataGridComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, FocusInvalidService, CommonUtils, Injector], null, null), ɵprd(256, null, FRAME_ID, "data-grid-component", []), ɵprd(256, null, NAMESPACE, "activitydemo", []), ɵprd(256, null, EXCEPTION_HANDLER, null, [])], function (_ck, _v) { _ck(_v, 55, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 55).cls; _ck(_v, 0, 0, currVal_0); }); }
            var DataGridComponentNgFactory = ɵccf("app-datagridcomponent", DataGridComponent, View_DataGridComponent_Host_0, {}, {}, []);

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles$2 = [""];

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles_MapComponent = [];
            var RenderType_MapComponent = ɵcrt({ encapsulation: 2, styles: styles_MapComponent, data: {} });
            function View_MapComponent_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 0, "div", [["id", "container"], ["style", "flex:1 1 0;"]], null, null, null, null, null))], null, null); }
            function View_MapComponent_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "app-map", [], null, null, null, View_MapComponent_0, RenderType_MapComponent)), ɵdid(1, 638976, null, 0, MapComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
            var MapComponentNgFactory = ɵccf("app-map", MapComponent, View_MapComponent_Host_0, { position: "position", readonly: "readonly", disabled: "disabled" }, { positionChange: "positionChange" }, []);

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles_DetailFormComponent = [styles$2];
            var RenderType_DetailFormComponent = ɵcrt({ encapsulation: 0, styles: styles_DetailFormComponent, data: {} });
            function View_DetailFormComponent_2(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 18, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 17, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 16, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), (_l()(), ɵeld(3, 0, null, null, 4, "label", [["class", "col-form-label"], ["for", "form_code"]], [[8, "title", 0]], null, null, null, null)), ɵppd(4, 3), (_l()(), ɵeld(5, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(6, null, ["", ""])), ɵppd(7, 3), (_l()(), ɵeld(8, 0, null, null, 10, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(9, 0, null, null, 6, "input", [["class", "form-control"], ["formControlName", "code"], ["id", "form_code"], ["input-end-edit", ""], ["tabindex", "-1"]], [[8, "readOnly", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
                    var pd_0 = (ɵnov(_v, 10)._handleInput($event.target.value) !== false);
                    ad = (pd_0 && ad);
                } if (("blur" === en)) {
                    var pd_1 = (ɵnov(_v, 10).onTouched() !== false);
                    ad = (pd_1 && ad);
                } if (("compositionstart" === en)) {
                    var pd_2 = (ɵnov(_v, 10)._compositionStart() !== false);
                    ad = (pd_2 && ad);
                } if (("compositionend" === en)) {
                    var pd_3 = (ɵnov(_v, 10)._compositionEnd($event.target.value) !== false);
                    ad = (pd_3 && ad);
                } return ad; }, null, null)), ɵdid(10, 16384, null, 0, DefaultValueAccessor, [Renderer2, ElementRef, [2, COMPOSITION_BUFFER_MODE]], null, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [DefaultValueAccessor]), ɵdid(12, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(14, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(15, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), (_l()(), ɵeld(16, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(17, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(18, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_10 = "code"; _ck(_v, 12, 0, currVal_10); _ck(_v, 15, 0); var currVal_12 = _co.viewModel.form.getCardControlErrors("code"); _ck(_v, 17, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ɵinlineInterpolate(1, "", ɵunv(_v, 3, 0, _ck(_v, 4, 0, ɵnov(_v.parent.parent, 0), "form_code", _co.lang, "\u6D3B\u52A8\u7F16\u53F7")), ""); _ck(_v, 3, 0, currVal_0); var currVal_1 = ɵunv(_v, 6, 0, _ck(_v, 7, 0, ɵnov(_v.parent.parent, 0), "form_code", _co.lang, "\u6D3B\u52A8\u7F16\u53F7")); _ck(_v, 6, 0, currVal_1); var currVal_2 = !_co.viewModel.stateMachine["editable"]; var currVal_3 = ɵnov(_v, 14).ngClassUntouched; var currVal_4 = ɵnov(_v, 14).ngClassTouched; var currVal_5 = ɵnov(_v, 14).ngClassPristine; var currVal_6 = ɵnov(_v, 14).ngClassDirty; var currVal_7 = ɵnov(_v, 14).ngClassValid; var currVal_8 = ɵnov(_v, 14).ngClassInvalid; var currVal_9 = ɵnov(_v, 14).ngClassPending; _ck(_v, 9, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_11 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 16, 0, currVal_11); }); }
            function View_DetailFormComponent_3(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 18, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 17, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 16, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), (_l()(), ɵeld(3, 0, null, null, 4, "label", [["class", "col-form-label"], ["for", "form_title"]], [[8, "title", 0]], null, null, null, null)), ɵppd(4, 3), (_l()(), ɵeld(5, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(6, null, ["", ""])), ɵppd(7, 3), (_l()(), ɵeld(8, 0, null, null, 10, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(9, 0, null, null, 6, "input", [["class", "form-control"], ["formControlName", "title"], ["id", "form_title"], ["input-end-edit", ""], ["tabindex", "-1"]], [[8, "readOnly", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
                    var pd_0 = (ɵnov(_v, 10)._handleInput($event.target.value) !== false);
                    ad = (pd_0 && ad);
                } if (("blur" === en)) {
                    var pd_1 = (ɵnov(_v, 10).onTouched() !== false);
                    ad = (pd_1 && ad);
                } if (("compositionstart" === en)) {
                    var pd_2 = (ɵnov(_v, 10)._compositionStart() !== false);
                    ad = (pd_2 && ad);
                } if (("compositionend" === en)) {
                    var pd_3 = (ɵnov(_v, 10)._compositionEnd($event.target.value) !== false);
                    ad = (pd_3 && ad);
                } return ad; }, null, null)), ɵdid(10, 16384, null, 0, DefaultValueAccessor, [Renderer2, ElementRef, [2, COMPOSITION_BUFFER_MODE]], null, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [DefaultValueAccessor]), ɵdid(12, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(14, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(15, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), (_l()(), ɵeld(16, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(17, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(18, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_10 = "title"; _ck(_v, 12, 0, currVal_10); _ck(_v, 15, 0); var currVal_12 = _co.viewModel.form.getCardControlErrors("title"); _ck(_v, 17, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ɵinlineInterpolate(1, "", ɵunv(_v, 3, 0, _ck(_v, 4, 0, ɵnov(_v.parent.parent, 0), "form_title", _co.lang, "\u6D3B\u52A8\u4E3B\u9898")), ""); _ck(_v, 3, 0, currVal_0); var currVal_1 = ɵunv(_v, 6, 0, _ck(_v, 7, 0, ɵnov(_v.parent.parent, 0), "form_title", _co.lang, "\u6D3B\u52A8\u4E3B\u9898")); _ck(_v, 6, 0, currVal_1); var currVal_2 = !_co.viewModel.stateMachine["editable"]; var currVal_3 = ɵnov(_v, 14).ngClassUntouched; var currVal_4 = ɵnov(_v, 14).ngClassTouched; var currVal_5 = ɵnov(_v, 14).ngClassPristine; var currVal_6 = ɵnov(_v, 14).ngClassDirty; var currVal_7 = ɵnov(_v, 14).ngClassValid; var currVal_8 = ɵnov(_v, 14).ngClassInvalid; var currVal_9 = ɵnov(_v, 14).ngClassPending; _ck(_v, 9, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_11 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 16, 0, currVal_11); }); }
            function View_DetailFormComponent_4(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 18, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 17, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 16, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), (_l()(), ɵeld(3, 0, null, null, 4, "label", [["class", "col-form-label"], ["for", "form_location"]], [[8, "title", 0]], null, null, null, null)), ɵppd(4, 3), (_l()(), ɵeld(5, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(6, null, ["", ""])), ɵppd(7, 3), (_l()(), ɵeld(8, 0, null, null, 10, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(9, 0, null, null, 6, "input", [["class", "form-control"], ["formControlName", "location"], ["id", "form_location"], ["input-end-edit", ""], ["tabindex", "-1"]], [[8, "readOnly", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
                    var pd_0 = (ɵnov(_v, 10)._handleInput($event.target.value) !== false);
                    ad = (pd_0 && ad);
                } if (("blur" === en)) {
                    var pd_1 = (ɵnov(_v, 10).onTouched() !== false);
                    ad = (pd_1 && ad);
                } if (("compositionstart" === en)) {
                    var pd_2 = (ɵnov(_v, 10)._compositionStart() !== false);
                    ad = (pd_2 && ad);
                } if (("compositionend" === en)) {
                    var pd_3 = (ɵnov(_v, 10)._compositionEnd($event.target.value) !== false);
                    ad = (pd_3 && ad);
                } return ad; }, null, null)), ɵdid(10, 16384, null, 0, DefaultValueAccessor, [Renderer2, ElementRef, [2, COMPOSITION_BUFFER_MODE]], null, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [DefaultValueAccessor]), ɵdid(12, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(14, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(15, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), (_l()(), ɵeld(16, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(17, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(18, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_10 = "location"; _ck(_v, 12, 0, currVal_10); _ck(_v, 15, 0); var currVal_12 = _co.viewModel.form.getCardControlErrors("location"); _ck(_v, 17, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ɵinlineInterpolate(1, "", ɵunv(_v, 3, 0, _ck(_v, 4, 0, ɵnov(_v.parent.parent, 0), "form_location", _co.lang, "\u6D3B\u52A8\u5730\u70B9")), ""); _ck(_v, 3, 0, currVal_0); var currVal_1 = ɵunv(_v, 6, 0, _ck(_v, 7, 0, ɵnov(_v.parent.parent, 0), "form_location", _co.lang, "\u6D3B\u52A8\u5730\u70B9")); _ck(_v, 6, 0, currVal_1); var currVal_2 = !_co.viewModel.stateMachine["editable"]; var currVal_3 = ɵnov(_v, 14).ngClassUntouched; var currVal_4 = ɵnov(_v, 14).ngClassTouched; var currVal_5 = ɵnov(_v, 14).ngClassPristine; var currVal_6 = ɵnov(_v, 14).ngClassDirty; var currVal_7 = ɵnov(_v, 14).ngClassValid; var currVal_8 = ɵnov(_v, 14).ngClassInvalid; var currVal_9 = ɵnov(_v, 14).ngClassPending; _ck(_v, 9, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_11 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 16, 0, currVal_11); }); }
            function View_DetailFormComponent_5(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 18, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 17, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 16, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), (_l()(), ɵeld(3, 0, null, null, 4, "label", [["class", "col-form-label"], ["for", "form_geoLng"]], [[8, "title", 0]], null, null, null, null)), ɵppd(4, 3), (_l()(), ɵeld(5, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(6, null, ["", ""])), ɵppd(7, 3), (_l()(), ɵeld(8, 0, null, null, 10, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(9, 0, null, null, 6, "input", [["class", "form-control"], ["formControlName", "geoLng"], ["id", "form_geoLng"], ["input-end-edit", ""], ["tabindex", "-1"]], [[8, "readOnly", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
                    var pd_0 = (ɵnov(_v, 10)._handleInput($event.target.value) !== false);
                    ad = (pd_0 && ad);
                } if (("blur" === en)) {
                    var pd_1 = (ɵnov(_v, 10).onTouched() !== false);
                    ad = (pd_1 && ad);
                } if (("compositionstart" === en)) {
                    var pd_2 = (ɵnov(_v, 10)._compositionStart() !== false);
                    ad = (pd_2 && ad);
                } if (("compositionend" === en)) {
                    var pd_3 = (ɵnov(_v, 10)._compositionEnd($event.target.value) !== false);
                    ad = (pd_3 && ad);
                } return ad; }, null, null)), ɵdid(10, 16384, null, 0, DefaultValueAccessor, [Renderer2, ElementRef, [2, COMPOSITION_BUFFER_MODE]], null, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [DefaultValueAccessor]), ɵdid(12, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(14, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(15, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), (_l()(), ɵeld(16, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(17, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(18, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_10 = "geoLng"; _ck(_v, 12, 0, currVal_10); _ck(_v, 15, 0); var currVal_12 = _co.viewModel.form.getCardControlErrors("geoLng"); _ck(_v, 17, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ɵinlineInterpolate(1, "", ɵunv(_v, 3, 0, _ck(_v, 4, 0, ɵnov(_v.parent.parent, 0), "form_geoLng", _co.lang, "\u5730\u7406\u7ECF\u5EA6")), ""); _ck(_v, 3, 0, currVal_0); var currVal_1 = ɵunv(_v, 6, 0, _ck(_v, 7, 0, ɵnov(_v.parent.parent, 0), "form_geoLng", _co.lang, "\u5730\u7406\u7ECF\u5EA6")); _ck(_v, 6, 0, currVal_1); var currVal_2 = !_co.viewModel.stateMachine["editable"]; var currVal_3 = ɵnov(_v, 14).ngClassUntouched; var currVal_4 = ɵnov(_v, 14).ngClassTouched; var currVal_5 = ɵnov(_v, 14).ngClassPristine; var currVal_6 = ɵnov(_v, 14).ngClassDirty; var currVal_7 = ɵnov(_v, 14).ngClassValid; var currVal_8 = ɵnov(_v, 14).ngClassInvalid; var currVal_9 = ɵnov(_v, 14).ngClassPending; _ck(_v, 9, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_11 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 16, 0, currVal_11); }); }
            function View_DetailFormComponent_6(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 18, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 17, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 16, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), (_l()(), ɵeld(3, 0, null, null, 4, "label", [["class", "col-form-label"], ["for", "form_geoLat"]], [[8, "title", 0]], null, null, null, null)), ɵppd(4, 3), (_l()(), ɵeld(5, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(6, null, ["", ""])), ɵppd(7, 3), (_l()(), ɵeld(8, 0, null, null, 10, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(9, 0, null, null, 6, "input", [["class", "form-control"], ["formControlName", "geoLat"], ["id", "form_geoLat"], ["input-end-edit", ""], ["tabindex", "-1"]], [[8, "readOnly", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
                    var pd_0 = (ɵnov(_v, 10)._handleInput($event.target.value) !== false);
                    ad = (pd_0 && ad);
                } if (("blur" === en)) {
                    var pd_1 = (ɵnov(_v, 10).onTouched() !== false);
                    ad = (pd_1 && ad);
                } if (("compositionstart" === en)) {
                    var pd_2 = (ɵnov(_v, 10)._compositionStart() !== false);
                    ad = (pd_2 && ad);
                } if (("compositionend" === en)) {
                    var pd_3 = (ɵnov(_v, 10)._compositionEnd($event.target.value) !== false);
                    ad = (pd_3 && ad);
                } return ad; }, null, null)), ɵdid(10, 16384, null, 0, DefaultValueAccessor, [Renderer2, ElementRef, [2, COMPOSITION_BUFFER_MODE]], null, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [DefaultValueAccessor]), ɵdid(12, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(14, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(15, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), (_l()(), ɵeld(16, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(17, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(18, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_10 = "geoLat"; _ck(_v, 12, 0, currVal_10); _ck(_v, 15, 0); var currVal_12 = _co.viewModel.form.getCardControlErrors("geoLat"); _ck(_v, 17, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ɵinlineInterpolate(1, "", ɵunv(_v, 3, 0, _ck(_v, 4, 0, ɵnov(_v.parent.parent, 0), "form_geoLat", _co.lang, "\u5730\u7406\u7EAC\u5EA6")), ""); _ck(_v, 3, 0, currVal_0); var currVal_1 = ɵunv(_v, 6, 0, _ck(_v, 7, 0, ɵnov(_v.parent.parent, 0), "form_geoLat", _co.lang, "\u5730\u7406\u7EAC\u5EA6")); _ck(_v, 6, 0, currVal_1); var currVal_2 = !_co.viewModel.stateMachine["editable"]; var currVal_3 = ɵnov(_v, 14).ngClassUntouched; var currVal_4 = ɵnov(_v, 14).ngClassTouched; var currVal_5 = ɵnov(_v, 14).ngClassPristine; var currVal_6 = ɵnov(_v, 14).ngClassDirty; var currVal_7 = ɵnov(_v, 14).ngClassValid; var currVal_8 = ɵnov(_v, 14).ngClassInvalid; var currVal_9 = ɵnov(_v, 14).ngClassPending; _ck(_v, 9, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_11 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 16, 0, currVal_11); }); }
            function View_DetailFormComponent_1(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 27, "farris-section", [["class", "f-section-form f-section-in-main"], ["id", "detail-form-section"]], [[2, "f-section", null], [2, "f-section-maximize", null], [2, "f-section-fill", null], [2, "f-section-accordion", null], [2, "f-state-collapse", null], [2, "f-section-custom-accordion", null]], null, null, View_FarrisSectionComponent_0, RenderType_FarrisSectionComponent)), ɵdid(1, 114688, null, 6, FarrisSectionComponent, [], { mainTitle: [0, "mainTitle"], subTitle: [1, "subTitle"], showHeader: [2, "showHeader"], enableMaximize: [3, "enableMaximize"], enableAccordion: [4, "enableAccordion"], fill: [5, "fill"], expandStatus: [6, "expandStatus"] }, null), ɵqud(335544320, 1, { headerDirective: 0 }), ɵqud(335544320, 2, { headerTitleDirective: 0 }), ɵqud(335544320, 3, { headerContentDirective: 0 }), ɵqud(335544320, 4, { headerToolbarDirective: 0 }), ɵqud(335544320, 5, { extendDirective: 0 }), ɵqud(335544320, 6, { contentDirective: 0 }), (_l()(), ɵeld(8, 0, null, 0, 13, "div", [["class", "f-form-layout farris-form farris-form-controls-inline"], ["id", "detail-form-layout"]], [[2, "farris-form-controls-inline", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
                    var pd_0 = (ɵnov(_v, 9).onSubmit($event) !== false);
                    ad = (pd_0 && ad);
                } if (("reset" === en)) {
                    var pd_1 = (ɵnov(_v, 9).onReset() !== false);
                    ad = (pd_1 && ad);
                } return ad; }, null, null)), ɵdid(9, 540672, null, 0, FormGroupDirective, [[8, null], [8, null]], { form: [0, "form"] }, null), ɵprd(2048, null, ControlContainer, null, [FormGroupDirective]), ɵdid(11, 16384, null, 0, NgControlStatusGroup, [[4, ControlContainer]], null, null), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_2)), ɵdid(13, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_3)), ɵdid(15, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_4)), ɵdid(17, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_5)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_6)), ɵdid(21, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(22, 0, null, 0, 5, "div", [["class", "f-utils-fill-flex-column"], ["style", "padding: 30px;"]], null, null, null, null, null)), (_l()(), ɵeld(23, 0, null, null, 4, "app-map", [["class", "f-utils-fill-flex-column"]], null, [[null, "positionChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("positionChange" === en)) {
                    _co.viewModel.bindingData.setValue(["geoLng"], $event.lng, true, true);
                    var pd_0 = (_co.viewModel.bindingData.setValue(["geoLat"], $event.lat, true, true) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_MapComponent_0, RenderType_MapComponent)), ɵdid(24, 638976, null, 0, MapComponent, [], { position: [0, "position"], readonly: [1, "readonly"], disabled: [2, "disabled"] }, { positionChange: "positionChange" }), ɵpad(25, 1), ɵpad(26, 1), ɵpod(27, { lng: 0, lat: 1 })], function (_ck, _v) { var _co = _v.component; var currVal_6 = _co.SectiondetailformsectionMainTitle; var currVal_7 = _co.SectiondetailformsectionSubTitle; var currVal_8 = false; var currVal_9 = true; var currVal_10 = "default"; var currVal_11 = true; var currVal_12 = true; _ck(_v, 1, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12); var currVal_21 = _co.viewModel.form; _ck(_v, 9, 0, currVal_21); var currVal_22 = true; _ck(_v, 13, 0, currVal_22); var currVal_23 = true; _ck(_v, 15, 0, currVal_23); var currVal_24 = true; _ck(_v, 17, 0, currVal_24); var currVal_25 = true; _ck(_v, 19, 0, currVal_25); var currVal_26 = true; _ck(_v, 21, 0, currVal_26); var currVal_27 = _ck(_v, 27, 0, _co.viewModel.bindingData.getValue(_ck(_v, 25, 0, "geoLng")), _co.viewModel.bindingData.getValue(_ck(_v, 26, 0, "geoLat"))); var currVal_28 = !_co.viewModel.stateMachine["editable"]; var currVal_29 = false; _ck(_v, 24, 0, currVal_27, currVal_28, currVal_29); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ɵnov(_v, 1).baseCls; var currVal_1 = ɵnov(_v, 1).maxStatus; var currVal_2 = ɵnov(_v, 1).fillCls; var currVal_3 = ɵnov(_v, 1).enableAccordionCls; var currVal_4 = ɵnov(_v, 1).enableCollapseCls; var currVal_5 = ɵnov(_v, 1).enableCustomAccordionCls; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_13 = (_co.lang === "zh-CHS"); var currVal_14 = ɵnov(_v, 11).ngClassUntouched; var currVal_15 = ɵnov(_v, 11).ngClassTouched; var currVal_16 = ɵnov(_v, 11).ngClassPristine; var currVal_17 = ɵnov(_v, 11).ngClassDirty; var currVal_18 = ɵnov(_v, 11).ngClassValid; var currVal_19 = ɵnov(_v, 11).ngClassInvalid; var currVal_20 = ɵnov(_v, 11).ngClassPending; _ck(_v, 8, 0, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20); }); }
            function View_DetailFormComponent_0(_l) { return ɵvid(0, [ɵpid(0, LangPipe, [TranslateService, HttpClient]), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_1)), ɵdid(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); }, null); }
            function View_DetailFormComponent_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 58, "app-detailformcomponent", [], [[8, "className", 0]], null, null, View_DetailFormComponent_0, RenderType_DetailFormComponent)), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService]), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(4608, null, BindingData, BindingData, []), ɵprd(4608, null, ViewModel, DetailFormComponentViewmodel, []), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext]), ɵprd(5120, null, COMMAND_HANDLERS_TOKEN, function (p0_0, p0_1, p1_0, p1_1, p1_2, p1_3, p1_4, p2_0, p2_1, p2_2, p2_3, p2_4) { return [new edit1Handler(p0_0, p0_1), new save1Handler(p1_0, p1_1, p1_2, p1_3, p1_4), new cancel1Handler(p2_0, p2_1, p2_2, p2_3, p2_4)]; }, [CardDataService, StateMachineService, ListDataService, CardDataService, StateMachineService, EndEditService, ValidationService, ListDataService, CardDataService, StateMachineService, EndEditService, ValidationService]), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService]]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService]), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(4608, null, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector]]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService, DialogService, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, Form, DetailFormComponentViewmodelForm, []), ɵprd(4608, null, UIState, DetailFormComponentViewmodelUIState, []), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(2048, null, Repository, null, [ActivityRepository]), ɵprd(512, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(512, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext]), ɵdid(55, 4440064, null, 0, DetailFormComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, FocusInvalidService, Injector], null, null), ɵprd(256, null, FRAME_ID, "detail-form-component", []), ɵprd(256, null, NAMESPACE, "activitydemo", []), ɵprd(256, null, EXCEPTION_HANDLER, null, [])], function (_ck, _v) { _ck(_v, 55, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 55).cls; _ck(_v, 0, 0, currVal_0); }); }
            var DetailFormComponentNgFactory = ɵccf("app-detailformcomponent", DetailFormComponent, View_DetailFormComponent_Host_0, {}, {}, []);

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles_RootComponent = [styles];
            var RenderType_RootComponent = ɵcrt({ encapsulation: 0, styles: styles_RootComponent, data: {} });
            function View_RootComponent_4(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 4, "div", [["class", "f-title"], ["id", "header-title-container"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 1, "span", [["class", "f-title-icon f-text-orna-dict"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 0, "i", [["class", "f-icon f-icon-page-title-dictionary"]], null, null, null, null, null)), (_l()(), ɵeld(3, 0, null, null, 1, "h4", [["class", "f-title-text"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["\u6D3B\u52A8\u6D4B\u8BD5"]))], null, null); }
            function View_RootComponent_5(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "f-response-toolbar", [["class", "col-7 f-toolbar"], ["id", "page-header-toolbar"]], [[2, "f-response-toolbar", null], [2, "position-relative", null]], [[null, "rtClickEvent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("rtClickEvent" === en)) {
                    var pd_0 = (_co.pageHeaderToolbarClickHandler($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_ResponseToolbarComponent_0, RenderType_ResponseToolbarComponent)), ɵdid(1, 13090816, [["responsebar", 4]], 0, ResponseToolbarComponent, [ElementRef, Renderer2, ChangeDetectorRef, LocaleService], { datas: [0, "datas"], btnState: [1, "btnState"], btnVisible: [2, "btnVisible"] }, { rtClickEvent: "rtClickEvent" })], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.pageHeaderToolbarToolbarItems; var currVal_3 = _co.pageHeaderToolbarToolbarItemsStates; var currVal_4 = _co.pageHeaderToolbarToolbarItemsVisibleStates; _ck(_v, 1, 0, currVal_2, currVal_3, currVal_4); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).frtCls; var currVal_1 = ɵnov(_v, 1).prCls; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
            function View_RootComponent_3(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 4, "div", [["class", "f-page-header-base"], ["id", "header-nav"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_4)), ɵdid(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_5)), ɵdid(4, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); var currVal_1 = true; _ck(_v, 4, 0, currVal_1); }, null); }
            function View_RootComponent_2(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 2, "div", [["class", "f-page-header"], ["id", "page-header"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_3)), ɵdid(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); }, null); }
            function View_RootComponent_6(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 126, "div", [["class", "f-page-main"], ["id", "main-container"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 125, "farris-splitter", [["class", "f-page-content"], ["id", "content-splitter"]], [[2, "f-component-splitter", null]], null, null, View_SplitterComponent_0, RenderType_SplitterComponent)), ɵdid(2, 1163264, null, 1, SplitterComponent, [], null, null), ɵqud(603979776, 1, { splitterPane: 1 }), (_l()(), ɵeld(4, 0, null, 0, 61, "farris-splitter-pane", [["class", "f-col-w6 f-page-content-nav"], ["id", "content-list"], ["ngResizable", ""], ["style", "width:40%"]], [[2, "f-component-splitter-pane", null]], null, null, View_SplitterPaneComponent_0, RenderType_SplitterPaneComponent)), ɵdid(5, 4931584, null, 0, AngularResizableDirective, [ElementRef, Renderer2], { ngResizable: [0, "ngResizable"], rzHandles: [1, "rzHandles"] }, null), ɵdid(6, 114688, [[1, 4]], 0, SplitterPaneComponent, [], null, null), (_l()(), ɵeld(7, 0, null, 0, 58, "app-datagridcomponent", [], [[8, "className", 0]], null, null, View_DataGridComponent_0, RenderType_DataGridComponent)), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(4608, null, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector]]), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(4608, null, BindingData, BindingData, []), ɵprd(4608, null, ViewModel, DataGridComponentViewmodel, []), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(5120, null, COMMAND_HANDLERS_TOKEN, function (p0_0, p0_1, p1_0, p2_0, p3_0, p3_1, p4_0) { return [new loadList1Handler(p0_0, p0_1), new remove1Handler(p1_0), new loadCard1Handler(p2_0), new add1Handler(p3_0, p3_1), new changePage1Handler(p4_0)]; }, [NavigationMiddlewareService, ListDataService, ListDataService, CardDataService, ListDataService, StateMachineService, CommandService]), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService]]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService, DialogService, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, Form, DataGridComponentViewmodelForm, []), ɵprd(4608, null, UIState, DataGridComponentViewmodelUIState, []), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(2048, null, Repository, null, [ActivityRepository]), ɵprd(512, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(512, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext]), ɵdid(62, 4440064, null, 0, DataGridComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, FocusInvalidService, CommonUtils, Injector], null, null), ɵprd(256, null, FRAME_ID, "data-grid-component", []), ɵprd(256, null, NAMESPACE, "activitydemo", []), ɵprd(256, null, EXCEPTION_HANDLER, null, []), (_l()(), ɵeld(66, 0, null, 0, 60, "farris-splitter-pane", [["class", "f-page-content-main f-utils-fill-flex-column"], ["id", "content-main"]], [[2, "f-component-splitter-pane", null]], null, null, View_SplitterPaneComponent_0, RenderType_SplitterPaneComponent)), ɵdid(67, 114688, [[1, 4]], 0, SplitterPaneComponent, [], null, null), (_l()(), ɵeld(68, 0, null, 0, 58, "app-detailformcomponent", [], [[8, "className", 0]], null, null, View_DetailFormComponent_0, RenderType_DetailFormComponent)), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService]), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(4608, null, BindingData, BindingData, []), ɵprd(4608, null, ViewModel, DetailFormComponentViewmodel, []), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext]), ɵprd(5120, null, COMMAND_HANDLERS_TOKEN, function (p0_0, p0_1, p1_0, p1_1, p1_2, p1_3, p1_4, p2_0, p2_1, p2_2, p2_3, p2_4) { return [new edit1Handler(p0_0, p0_1), new save1Handler(p1_0, p1_1, p1_2, p1_3, p1_4), new cancel1Handler(p2_0, p2_1, p2_2, p2_3, p2_4)]; }, [CardDataService, StateMachineService, ListDataService, CardDataService, StateMachineService, EndEditService, ValidationService, ListDataService, CardDataService, StateMachineService, EndEditService, ValidationService]), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService]]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService]), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(4608, null, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector]]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService, DialogService, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, Form, DetailFormComponentViewmodelForm, []), ɵprd(4608, null, UIState, DetailFormComponentViewmodelUIState, []), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(2048, null, Repository, null, [ActivityRepository]), ɵprd(512, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(512, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext]), ɵdid(123, 4440064, null, 0, DetailFormComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, FocusInvalidService, Injector], null, null), ɵprd(256, null, FRAME_ID, "detail-form-component", []), ɵprd(256, null, NAMESPACE, "activitydemo", []), ɵprd(256, null, EXCEPTION_HANDLER, null, [])], function (_ck, _v) { _ck(_v, 2, 0); var currVal_2 = ""; var currVal_3 = "e"; _ck(_v, 5, 0, currVal_2, currVal_3); _ck(_v, 6, 0); _ck(_v, 62, 0); _ck(_v, 67, 0); _ck(_v, 123, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 2).cls; _ck(_v, 1, 0, currVal_0); var currVal_1 = ɵnov(_v, 6).cls; _ck(_v, 4, 0, currVal_1); var currVal_4 = ɵnov(_v, 62).cls; _ck(_v, 7, 0, currVal_4); var currVal_5 = ɵnov(_v, 67).cls; _ck(_v, 66, 0, currVal_5); var currVal_6 = ɵnov(_v, 123).cls; _ck(_v, 68, 0, currVal_6); }); }
            function View_RootComponent_1(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 4, "div", [["class", "f-page f-page-navigate f-page-is-grid-card"], ["id", "root-layout"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_2)), ɵdid(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_6)), ɵdid(4, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); var currVal_1 = true; _ck(_v, 4, 0, currVal_1); }, null); }
            function View_RootComponent_0(_l) { return ɵvid(0, [(_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_1)), ɵdid(1, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 1, 0, currVal_0); }, null); }
            function View_RootComponent_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 70, "app-rootcomponent", [], [[8, "className", 0]], null, null, View_RootComponent_0, RenderType_RootComponent)), ɵprd(4608, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(4608, null, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector]]), ɵprd(5120, null, COMMAND_HANDLERS_TOKEN, function (p0_0, p0_1) { return [new close1Handler(p0_0, p0_1)]; }, [EndEditService, NavigationService]), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, ActivityRepository, ActivityRepository, [Injector]), ɵprd(6144, null, Repository, null, [ActivityRepository]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext]), ɵprd(4608, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(4608, null, BindingData, BindingData, []), ɵprd(4608, null, AppContext, AppContext, [[2, Injector], [2, AppContextManager], [3, AppContext]]), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, ViewModel, RootViewmodel, []), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService]), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, WFSubmiteService, WFSubmiteService, [Injector, ComponentFactoryResolver, BsModalService, [2, I18nService]]), ɵprd(4608, null, WFFlowchartService, WFFlowchartService, [MessagerService, Injector, ComponentFactoryResolver, BsModalService]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService]]), ɵprd(4608, null, CloudprintService, CloudprintService, [ɵa, ComponentFactoryResolver, ɵb$1, ɵc, Injector, ApplicationRef, NotifyService, AppService, WindowService]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService, DialogService, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, FrameworkSessionService, FrameworkSessionService, [[2, SessionService]]), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, Form, RootViewmodelForm, []), ɵprd(4608, null, UIState, RootViewmodelUIState, []), ɵprd(4608, null, UriService, UriService, [BE_SERVER_URI_TOKEN]), ɵprd(4608, null, ActivityProxy, ActivityProxy, [HttpClient, UriService]), ɵprd(4608, null, Declaration, EventDeclaration, []), ɵprd(6144, null, TranslateToken, null, [LangService]), ɵprd(4608, null, EXCEPTION_HANDLER, ExceptionHandler, [FormErrorService, [2, LanguageService], AppContext]), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(512, null, StateMachine, RootViewmodelStateMachine, []), ɵdid(67, 4440064, null, 0, RootComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, FrameworkService, ApplicationParamService, VerifyDetailService, StateMachine, Injector], null, null), ɵprd(256, null, FRAME_ID, "root-component", []), ɵprd(256, null, NAMESPACE, "activitydemo", []), ɵprd(256, null, BE_SESSION_HANDLING_STRATEGY_TOKEN, "SeparatedSession", [])], function (_ck, _v) { _ck(_v, 67, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 67).cls; _ck(_v, 0, 0, currVal_0); }); }
            var RootComponentNgFactory = ɵccf("app-rootcomponent", RootComponent, View_RootComponent_Host_0, {}, {}, []);

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var ActivityDemoModuleNgFactory = exports('ActivityDemoModuleNgFactory', ɵcmf(ActivityDemoModule, [], function (_l) { return ɵmod([ɵmpd(512, ComponentFactoryResolver, ɵCodegenComponentFactoryResolver, [[8, [LoadingComponentNgFactory, ModalBackdropComponentNgFactory, ModalContainerComponentNgFactory, MessagerComponentNgFactory, NotifyContainerComponentNgFactory, VerifyDetailComponentNgFactory, PopupComponentNgFactory, StringFilterCellComponentNgFactory, NumericFilterCellComponentNgFactory, BooleanFilterCellComponentNgFactory, DateFilterCellComponentNgFactory, StringFilterMenuComponentNgFactory, NumericFilterMenuComponentNgFactory, DateFilterMenuComponentNgFactory, BooleanFilterMenuComponentNgFactory, NgbTooltipWindowNgFactory, FileUploadComponentNgFactory, UploadDialogComponentNgFactory, DataTableComponentNgFactory, TreeTableComponentNgFactory, LookupLeftComponentNgFactory, LookupTabsComponentNgFactory, TimePickerPanelComponentNgFactory, PopoverContainerComponentNgFactory, CalendarComponentNgFactory, ɵbNgFactory, QueryConditionComponentNgFactory, ɵcNgFactory, ɵeNgFactory, ɵEmptyOutletComponentNgFactory, ProcessSelectorComponentNgFactory, WfWorkitemHandleComponentNgFactory, UserHelperComponentNgFactory, TaskAssignComponentNgFactory, TaskSignaddComponentNgFactory, TaskTransferComponentNgFactory, ɵaNgFactory, WindowComponentNgFactory, WindowTitleBarComponentNgFactory, DialogComponentNgFactory, DialogTitleBarComponentNgFactory, ɵdNgFactory, ɵfNgFactory, ɵgNgFactory, LanguageTextPanelComponentNgFactory, ɵlNgFactory, DatagridTextboxComponentNgFactory, DatagridTextareaComponentNgFactory, ɵaNgFactory$1, ɵbNgFactory$1, ɵcNgFactory$1, ɵdNgFactory$1, ɵeNgFactory$1, ɵfNgFactory$1, ɵgNgFactory$1, ɵhNgFactory, ɵiNgFactory, ɵjNgFactory, ɵkNgFactory, UIFlowchartComponentNgFactory, ɵbNgFactory$2, ɵcNgFactory$2, ɵdNgFactory$2, ɵeNgFactory$2, ɵfNgFactory$2, ɵgNgFactory$2, ɵhNgFactory$1, ɵbNgFactory$3, ɵiNgFactory$1, ɵcNgFactory$3, ɵeNgFactory$3, FileListComponentNgFactory, BatchEditDialogComponentNgFactory, FilterRowComponentNgFactory, FilterTextboxComponentNgFactory, FilterCheckboxComponentNgFactory, ConditionEditorComponentNgFactory, FilterDatalistComponentNgFactory, FilterRowPanelComponentNgFactory, FilterRowEditorComponentNgFactory, FilterSelectComponentNgFactory, DatagridSettingsComponentNgFactory, RootComponentNgFactory]], [3, ComponentFactoryResolver], NgModuleRef]), ɵmpd(4608, NgLocalization, NgLocaleLocalization, [LOCALE_ID, [2, ɵangular_packages_common_common_a]]), ɵmpd(4608, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_j, []), ɵmpd(4608, FormBuilder, FormBuilder, []), ɵmpd(4608, CommonUtils, CommonUtils, []), ɵmpd(4608, RuntimeStateService, RuntimeStateService, [CommonUtils]), ɵmpd(4608, IdService, IdService, []), ɵmpd(4608, DialogService$1, DialogService$1, []), ɵmpd(135680, GridComponent, GridComponent, [BrowserSupportService, SelectionService, ElementRef, GroupInfoService, GroupsService, ChangeNotificationService, DetailsService, EditService$1, FilterService, PDFService, ResponsiveService, Renderer2, ExcelService, NgZone, ScrollSyncService, DomEventsService, ColumnResizingService, ChangeDetectorRef, ColumnReorderService, ColumnInfoService, NavigationService$1, SortService, LocalizationService]), ɵmpd(4608, DateTimeHelperService, DateTimeHelperService, []), ɵmpd(4608, NumberHelperService, NumberHelperService, []), ɵmpd(4608, FarrisKendoGridFormatService, FarrisKendoGridFormatService, [DateTimeHelperService, NumberHelperService]), ɵmpd(4608, FarrisTreetableFormatService, FarrisTreetableFormatService, []), ɵmpd(4608, LocaleService, LocaleService, [LOCALE_ID, CommonUtils]), ɵmpd(4608, PositioningService, PositioningService, [RendererFactory2, PLATFORM_ID]), ɵmpd(4608, ComponentLoaderFactory, ComponentLoaderFactory, [ComponentFactoryResolver, NgZone, Injector, PositioningService, ApplicationRef]), ɵmpd(4608, BsModalService, BsModalService, [RendererFactory2, ComponentLoaderFactory, NgZone]), ɵmpd(4608, NotifyService, NotifyService, [ComponentFactoryResolver, Injector, ApplicationRef]), ɵmpd(4608, LoadingService, LoadingService, [ApplicationRef, ComponentFactoryResolver, Injector]), ɵmpd(4608, AppContextManager, AppContextManager, []), ɵmpd(4608, AppContext, AppContext, [[2, Injector], [2, AppContextManager], [3, AppContext]]), ɵmpd(4608, FormLoadingService, FormLoadingService, [LoadingService, [2, HideEventService], [2, AppContext]]), ɵmpd(4608, MessagerService, MessagerService, [BsModalService, Injector]), ɵmpd(4608, LanguageService, LanguageService, [[2, LOCALE_ID]]), ɵmpd(4608, FormMessageService, FormMessageService, [MessagerService, [2, LanguageService]]), ɵmpd(4608, FormNotifyService, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵmpd(4608, FormErrorService, FormErrorService, [FormMessageService, [2, LanguageService]]), ɵmpd(4608, WizardService, WizardService, []), ɵmpd(4608, FormWizardService, FormWizardService, [WizardService]), ɵmpd(4608, CheckService, CheckService, []), ɵmpd(4608, DataCheckService, DataCheckService, [FormMessageService, FormNotifyService, [2, LanguageService]]), ɵmpd(4608, FrameEventBus, FrameEventBus, []), ɵmpd(4608, EventService, EventService, [FrameEventBus]), ɵmpd(4608, ComponentManagerService, ComponentManagerService, []), ɵmpd(4608, FilterService$1, FilterService$1, []), ɵmpd(4608, KeybindingService, KeybindingService, []), ɵmpd(4608, QuerystringService, QuerystringService, []), ɵmpd(4608, RuntimeFrameworkService, RuntimeFrameworkService, []), ɵmpd(4608, ParamService, ParamService, [QuerystringService, RuntimeFrameworkService]), ɵmpd(4608, MenuStateService, MenuStateService, []), ɵmpd(4608, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵmpd(4608, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector]]), ɵmpd(4608, RouterParamService, RouterParamService, []), ɵmpd(4608, ɵangular_packages_common_http_http_d, ɵangular_packages_common_http_http_d, []), ɵmpd(6144, XhrFactory, null, [ɵangular_packages_common_http_http_d]), ɵmpd(4608, HttpXhrBackend, HttpXhrBackend, [XhrFactory]), ɵmpd(6144, HttpBackend, null, [HttpXhrBackend]), ɵmpd(4608, HttpHandler, ɵHttpInterceptingHandler, [HttpBackend, Injector]), ɵmpd(4608, HttpClient, HttpClient, [HttpHandler]), ɵmpd(4608, SessionService, SessionService, []), ɵmpd(4608, HttpService, HttpService, [HttpClient, SessionService]), ɵmpd(4608, AppService, AppService, [HttpService, SessionService]), ɵmpd(4608, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵmpd(4608, ApplicationParamService, ApplicationParamService, [[2, ParamService], [2, RuntimeFrameworkService]]), ɵmpd(4608, FilterConditionService, FilterConditionService, []), ɵmpd(4608, VerifyDetailService, VerifyDetailService, [ComponentFactoryResolver, Injector, ApplicationRef]), ɵmpd(4608, IntlService, CldrIntlService, [LOCALE_ID]), ɵmpd(4608, DOMService, DOMService, []), ɵmpd(4608, CenturyViewService, CenturyViewService, []), ɵmpd(4608, DecadeViewService, DecadeViewService, []), ɵmpd(4608, MonthViewService, MonthViewService, [IntlService]), ɵmpd(4608, YearViewService, YearViewService, [IntlService]), ɵmpd(4608, WeekNamesService, WeekNamesService, [IntlService]), ɵmpd(4608, PopupService, PopupService, [ApplicationRef, ComponentFactoryResolver, Injector, [2, POPUP_CONTAINER]]), ɵmpd(135680, ResizeBatchService, ResizeBatchService, [NgZone]), ɵmpd(4608, NavigationService$2, NavigationService$2, [BusViewService]), ɵmpd(4608, DOMService$1, DOMService$1, []), ɵmpd(4608, HoursService, HoursService, [IntlService]), ɵmpd(4608, MinutesService, MinutesService, [IntlService]), ɵmpd(4608, SecondsService, SecondsService, [IntlService]), ɵmpd(4608, DayPeriodService, DayPeriodService, [IntlService]), ɵmpd(4608, NgbDropdownConfig, NgbDropdownConfig, []), ɵmpd(4608, NgbTooltipConfig, NgbTooltipConfig, []), ɵmpd(4608, TabService, TabService, [[2, TabConfig]]), ɵmpd(4608, UploadService, UploadService, [HttpService]), ɵmpd(4608, HttpXsrfTokenExtractor, ɵangular_packages_common_http_http_g, [DOCUMENT, PLATFORM_ID, ɵangular_packages_common_http_http_e]), ɵmpd(4608, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_h, [HttpXsrfTokenExtractor, ɵangular_packages_common_http_http_f]), ɵmpd(5120, HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [ɵangular_packages_common_http_http_h]), ɵmpd(4608, UploadDialogService, UploadDialogService, [BsModalService, ComponentFactoryResolver, Injector]), ɵmpd(4608, PaginationService, PaginationService, []), ɵmpd(4608, ColumnFormatService, ColumnFormatService, [DateTimeHelperService, NumberHelperService]), ɵmpd(4608, TreetableService, TreetableService, []), ɵmpd(4608, ResizeService, ResizeService, []), ɵmpd(4608, TTHotkeys, TTHotkeys, [EventManager]), ɵmpd(4608, PopoverConfig, PopoverConfig, []), ɵmpd(4608, ComboLocaleService, ComboLocaleService, [LocaleService]), ɵmpd(4608, SolutionService, SolutionService, [NotifyService]), ɵmpd(4608, ConvertorService, ConvertorService, []), ɵmpd(4608, PaginationService$1, PaginationService$1, []), ɵmpd(4608, ErrorHandler, ɵq, []), ɵmpd(4608, ValidatorMessagerService, ValidatorMessagerService, []), ɵmpd(4608, TaskCommentService, TaskCommentService, [HttpService]), ɵmpd(4608, TaskCommentRepository, TaskCommentRepository, []), ɵmpd(4608, TaskCommentUIState, TaskCommentUIState, []), ɵmpd(4608, TaskCommentViewModel, TaskCommentViewModel, [TaskCommentUIState, HttpService]), ɵmpd(4608, I18nService$1, I18nService$1, []), ɵmpd(4608, TaskService, TaskService, [HttpService]), ɵmpd(4608, UserService, UserService, [HttpClient, HttpService, SessionService]), ɵmpd(4608, I18nService, I18nService, []), ɵmpd(4608, WFSubmiteService, WFSubmiteService, [Injector, ComponentFactoryResolver, BsModalService, [2, I18nService]]), ɵmpd(4608, WindowContainerService, WindowContainerService, []), ɵmpd(4608, WindowService, WindowService, [ComponentFactoryResolver, WindowContainerService]), ɵmpd(4608, DialogContainerService, DialogContainerService, []), ɵmpd(4608, DialogService$2, DialogService$2, [ComponentFactoryResolver, DialogContainerService]), ɵmpd(4608, ɵb$1, ɵb$1, [HttpClient]), ɵmpd(4608, ɵc, ɵc, [HttpClient]), ɵmpd(4608, ɵa, ɵa, [HttpClient]), ɵmpd(4608, CloudprintService, CloudprintService, [ɵa, ComponentFactoryResolver, ɵb$1, ɵc, Injector, ApplicationRef, NotifyService, AppService, WindowService]), ɵmpd(4608, ɵe, ɵe, [HttpClient]), ɵmpd(4608, ConvertorService$1, ConvertorService$1, []), ɵmpd(4608, SolutionService$1, SolutionService$1, []), ɵmpd(4608, QuerySolutionService, QuerySolutionService, []), ɵmpd(4608, UiFlowchartService, UiFlowchartService, [HttpService]), ɵmpd(4608, WFFlowchartService, WFFlowchartService, [MessagerService, Injector, ComponentFactoryResolver, BsModalService]), ɵmpd(4608, ɵj, ɵj, []), ɵmpd(4608, ɵs, ɵs, []), ɵmpd(4608, ɵn, ɵn, []), ɵmpd(5120, TranslateLoader, ɵ0$3, [HttpClient]), ɵmpd(4608, TranslateCompiler, TranslateFakeCompiler, []), ɵmpd(4608, TranslateParser, TranslateDefaultParser, []), ɵmpd(4608, MissingTranslationHandler, JitMissingTranslationHandler, []), ɵmpd(4608, TranslateStore, TranslateStore, []), ɵmpd(4608, TranslateService, TranslateService, [TranslateStore, TranslateLoader, TranslateCompiler, TranslateParser, MissingTranslationHandler, USE_DEFAULT_LANG, USE_STORE]), ɵmpd(4608, GRID_SETTINGS_SERVICE, DatagridSettingsService, [Injector, BsModalService, MessagerService, IdService, LocaleService]), ɵmpd(4608, TranslateResolveService, TranslateResolveService, [TranslateService, HttpClient]), ɵmpd(4608, EventBus, EventBus, []), ɵmpd(4608, Subscription, Subscription, []), ɵmpd(4608, RestfulService, RestfulService, [HttpClient]), ɵmpd(5120, VARIABLE_PARSERS, function () { return [new DataVariableParser(), new UIStateVariableParser(), new StateMachineVariableParser(), new CommandVariableParser()]; }, []), ɵmpd(4608, VariableParseService, VariableParseService, [VARIABLE_PARSERS]), ɵmpd(4608, FileViewerService, FileViewerService, [BsModalService, ComponentFactoryResolver, Injector]), ɵmpd(5120, BE_SERVER_URI_TOKEN, ɵ2$1, []), ɵmpd(1073742336, CommonModule, CommonModule, []), ɵmpd(1073742336, ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_bc, []), ɵmpd(1073742336, FormsModule, FormsModule, []), ɵmpd(1073742336, ReactiveFormsModule, ReactiveFormsModule, []), ɵmpd(1073742336, PanelBarModule, PanelBarModule, []), ɵmpd(1073742336, SplitterModule$1, SplitterModule$1, []), ɵmpd(1073742336, TabStripModule, TabStripModule, []), ɵmpd(1073742336, LayoutModule, LayoutModule, []), ɵmpd(1073742336, FarrisCommonModule, FarrisCommonModule, []), ɵmpd(1073742336, KendoBindingModule, KendoBindingModule, []), ɵmpd(1073742336, FlexLayoutModule, FlexLayoutModule, []), ɵmpd(1073742336, LocaleModule, LocaleModule, []), ɵmpd(1073742336, LoadingModule, LoadingModule, []), ɵmpd(1073742336, PerfectScrollbarModule, PerfectScrollbarModule, []), ɵmpd(1073742336, AngularDraggableModule, AngularDraggableModule, []), ɵmpd(1073742336, ModalModule, ModalModule, []), ɵmpd(1073742336, MessagerModule, MessagerModule, []), ɵmpd(1073742336, NotifyModule, NotifyModule, []), ɵmpd(1073742336, CommandServicesModule, CommandServicesModule, []), ɵmpd(1073742336, FDropdownDirectiveTypeModule, FDropdownDirectiveTypeModule, []), ɵmpd(1073742336, FResponseToolbarModule, FResponseToolbarModule, []), ɵmpd(1073742336, FarrisFormsModule, FarrisFormsModule, []), ɵmpd(1073742336, FormMessageModule, FormMessageModule, []), ɵmpd(1073742336, TranslateModule, TranslateModule, []), ɵmpd(1073742336, VerifyDetailModule, VerifyDetailModule, []), ɵmpd(1073742336, SharedModule, SharedModule, []), ɵmpd(1073742336, DragAndDropModule, DragAndDropModule, []), ɵmpd(1073742336, GroupModule, GroupModule, []), ɵmpd(1073742336, EventsModule, EventsModule, []), ɵmpd(1073742336, NumericTextBoxModule, NumericTextBoxModule, []), ɵmpd(1073742336, IntlModule, IntlModule, []), ɵmpd(1073742336, EventsModule$1, EventsModule$1, []), ɵmpd(1073742336, DateInputModule, DateInputModule, []), ɵmpd(1073742336, CalendarCommonModule, CalendarCommonModule, []), ɵmpd(1073742336, TemplatesModule, TemplatesModule, []), ɵmpd(1073742336, VirtualizationModule, VirtualizationModule, []), ɵmpd(1073742336, CalendarModule$1, CalendarModule$1, []), ɵmpd(1073742336, PopupModule, PopupModule, []), ɵmpd(1073742336, DatePickerModule, DatePickerModule, []), ɵmpd(1073742336, BodyModule, BodyModule, []), ɵmpd(1073742336, ResizeSensorModule, ResizeSensorModule, []), ɵmpd(1073742336, SharedDirectivesModule, SharedDirectivesModule, []), ɵmpd(1073742336, SharedModule$1, SharedModule$1, []), ɵmpd(1073742336, DropDownListModule, DropDownListModule, []), ɵmpd(1073742336, AutoCompleteModule, AutoCompleteModule, []), ɵmpd(1073742336, TextBoxModule, TextBoxModule, []), ɵmpd(1073742336, DraggableModule, DraggableModule, []), ɵmpd(1073742336, SliderModule, SliderModule, []), ɵmpd(1073742336, SwitchModule$1, SwitchModule$1, []), ɵmpd(1073742336, MaskedTextBoxModule, MaskedTextBoxModule, []), ɵmpd(1073742336, ColorPickerModule, ColorPickerModule, []), ɵmpd(1073742336, InputsModule, InputsModule, []), ɵmpd(1073742336, SharedFilterModule, SharedFilterModule, []), ɵmpd(1073742336, RowFilterModule, RowFilterModule, []), ɵmpd(1073742336, FilterMenuModule, FilterMenuModule, []), ɵmpd(1073742336, ColumnMenuModule, ColumnMenuModule, []), ɵmpd(1073742336, HeaderModule, HeaderModule, []), ɵmpd(1073742336, FooterModule, FooterModule, []), ɵmpd(1073742336, PagerModule, PagerModule, []), ɵmpd(1073742336, GridModule, GridModule, []), ɵmpd(1073742336, MultiViewCalendarModule, MultiViewCalendarModule, []), ɵmpd(1073742336, CalendarsModule, CalendarsModule, []), ɵmpd(1073742336, TimePickerModule$1, TimePickerModule$1, []), ɵmpd(1073742336, DateRangeModule, DateRangeModule, []), ɵmpd(1073742336, DateInputsModule, DateInputsModule, []), ɵmpd(1073742336, ComboBoxModule, ComboBoxModule, []), ɵmpd(1073742336, MultiSelectModule$1, MultiSelectModule$1, []), ɵmpd(1073742336, DropDownsModule, DropDownsModule, []), ɵmpd(1073742336, ButtonModule, ButtonModule, []), ɵmpd(1073742336, ButtonGroupModule, ButtonGroupModule, []), ɵmpd(1073742336, ListModule, ListModule, []), ɵmpd(1073742336, SplitButtonModule, SplitButtonModule, []), ɵmpd(1073742336, DropDownButtonModule, DropDownButtonModule, []), ɵmpd(1073742336, ButtonsModule, ButtonsModule, []), ɵmpd(1073742336, NgbDropdownModule, NgbDropdownModule, []), ɵmpd(1073742336, NgbTooltipModule, NgbTooltipModule, []), ɵmpd(1073742336, FarrisTabsModule, FarrisTabsModule, []), ɵmpd(1073742336, FarrisTagModule, FarrisTagModule, []), ɵmpd(1073742336, FarrisSidebarModule, FarrisSidebarModule, []), ɵmpd(1073742336, FarrisDialogModule, FarrisDialogModule, []), ɵmpd(1073742336, UploadModule, UploadModule, []), ɵmpd(1073742336, HttpClientXsrfModule, HttpClientXsrfModule, []), ɵmpd(1073742336, HttpClientModule, HttpClientModule, []), ɵmpd(1073742336, UploadDialogMoudle, UploadDialogMoudle, []), ɵmpd(1073742336, InputGroupModule, InputGroupModule, []), ɵmpd(1073742336, LayoutModule$1, LayoutModule$1, []), ɵmpd(1073742336, PaginationModule, PaginationModule, []), ɵmpd(1073742336, DateHelperModule, DateHelperModule, []), ɵmpd(1073742336, NumberHelperModule, NumberHelperModule, []), ɵmpd(1073742336, DataColumnModule, DataColumnModule, []), ɵmpd(1073742336, DataTableModule, DataTableModule, []), ɵmpd(1073742336, TreeTableModule, TreeTableModule, []), ɵmpd(1073742336, LookupModule, LookupModule, []), ɵmpd(1073742336, FieldGroupModule, FieldGroupModule, []), ɵmpd(1073742336, FarrisSectionModule, FarrisSectionModule, []), ɵmpd(1073742336, TimePickerModule, TimePickerModule, []), ɵmpd(1073742336, PopoverModule, PopoverModule, []), ɵmpd(1073742336, FarrisDatePickerModule, FarrisDatePickerModule, []), ɵmpd(1073742336, FarrisTimeSpinnerModule, FarrisTimeSpinnerModule, []), ɵmpd(1073742336, ProgressStepModule, ProgressStepModule, []), ɵmpd(1073742336, WizardModule, WizardModule, []), ɵmpd(1073742336, MultiSelectModule, MultiSelectModule, []), ɵmpd(1073742336, DatalistModule, DatalistModule, []), ɵmpd(1073742336, ComboListModule, ComboListModule, []), ɵmpd(1073742336, NumberSpinnerModule, NumberSpinnerModule, []), ɵmpd(1073742336, QueryConditionModule, QueryConditionModule, []), ɵmpd(1073742336, NgxPaginationModule, NgxPaginationModule, []), ɵmpd(1073742336, ScrollbarModule, ScrollbarModule, []), ɵmpd(1073742336, DatagridModule, DatagridModule, []), ɵmpd(1073742336, QuerySolutionModule, QuerySolutionModule, []), ɵmpd(1073742336, FarrisButtonModule, FarrisButtonModule, []), ɵmpd(1073742336, ListViewModule, ListViewModule, []), ɵmpd(1073742336, SplitterModule, SplitterModule, []), ɵmpd(1073742336, RouterModule, RouterModule, [[2, ɵangular_packages_router_router_a], [2, Router]]), ɵmpd(1073742336, ListNavModule, ListNavModule, []), ɵmpd(1073742336, TextModule, TextModule, []), ɵmpd(1073742336, WFCommentModule, WFCommentModule, []), ɵmpd(1073742336, WFRuntimeModule, WFRuntimeModule, []), ɵmpd(1073742336, SharedModule$2, SharedModule$2, []), ɵmpd(1073742336, WindowModule, WindowModule, []), ɵmpd(1073742336, DialogModule, DialogModule, []), ɵmpd(1073742336, CloudPrintModule, CloudPrintModule, []), ɵmpd(1073742336, ComboLookupModule, ComboLookupModule, []), ɵmpd(1073742336, SwitchModule, SwitchModule, []), ɵmpd(1073742336, LanguageTextboxModule, LanguageTextboxModule, []), ɵmpd(1073742336, DatagridEditorsModule, DatagridEditorsModule, []), ɵmpd(1073742336, FarrisHtmlEditorModule, FarrisHtmlEditorModule, []), ɵmpd(1073742336, ViewChangeModule, ViewChangeModule, []), ɵmpd(1073742336, ListFilterModule, ListFilterModule, []), ɵmpd(1073742336, AvatarModule, AvatarModule, []), ɵmpd(1073742336, UiFlowchartModule, UiFlowchartModule, []), ɵmpd(1073742336, CalendarModule, CalendarModule, []), ɵmpd(1073742336, ScrollspyModule, ScrollspyModule, []), ɵmpd(1073742336, DynamicControlGroupModule, DynamicControlGroupModule, []), ɵmpd(1073742336, ɵf, ɵf, []), ɵmpd(1073742336, ɵh, ɵh, []), ɵmpd(1073742336, ɵg, ɵg, []), ɵmpd(1073742336, ɵt, ɵt, []), ɵmpd(1073742336, FileListModule, FileListModule, []), ɵmpd(1073742336, BatchEditDialogModule, BatchEditDialogModule, []), ɵmpd(1073742336, DatagridFilterRowModule, DatagridFilterRowModule, []), ɵmpd(1073742336, DatagridSettingsModule, DatagridSettingsModule, []), ɵmpd(1073742336, ActivityDemoRoutingModule, ActivityDemoRoutingModule, []), ɵmpd(1073742336, MapModule, MapModule, []), ɵmpd(1073742336, ActivityDemoModule, ActivityDemoModule, []), ɵmpd(256, LOCALE_ID, ɵ1$2, []), ɵmpd(256, TOUCH_ENABLED, touchEnabled, []), ɵmpd(256, TOUCH_ENABLED$1, touchEnabled$1, []), ɵmpd(256, MESSAGER_DEFAULT_CONFIG, MessagerDefaultConfig, []), ɵmpd(256, LOADING_DEFAULT_CONFIG, loaddingDefaultConfig, []), ɵmpd(256, ɵangular_packages_common_http_http_e, "XSRF-TOKEN", []), ɵmpd(256, ɵangular_packages_common_http_http_f, "X-XSRF-TOKEN", []), ɵmpd(256, SCROLLBAR_CONFIG, { minScrollbarLength: 20 }, []), ɵmpd(256, ɵb$2, { modules: defaultModules }, []), ɵmpd(1024, ROUTES, function () { return [[{ path: "", component: RootComponent, children: [], resolve: { "translate": TranslateResolveService } }]]; }, []), ɵmpd(256, USE_STORE, undefined, []), ɵmpd(256, USE_DEFAULT_LANG, undefined, []), ɵmpd(256, SWITCH_OPTIONS, {}, []), ɵmpd(256, GRID_FILTER_ROW, FilterRowComponent, []), ɵmpd(1024, GRID_EDITORS, function () { return [{ name: "textarea", value: DatagridTextareaComponent }, { name: "textbox", value: DatagridTextboxComponent }, { name: "checkbox", value: ɵa$1 }, { name: "datepicker", value: ɵb$3 }, { name: "input-group", value: ɵc$1 }, { name: "select", value: ɵd }, { name: "lookup", value: ɵe$1 }, { name: "numberbox", value: ɵf$1 }, { name: "combolist", value: ɵg$1 }, { name: "switch", value: ɵh$1 }, { name: "timepicker", value: ɵi }, { name: "combo-lookup", value: ɵj$1 }, { name: "language-textbox", value: ɵk }]; }, [])]); }));

        }
    };
});

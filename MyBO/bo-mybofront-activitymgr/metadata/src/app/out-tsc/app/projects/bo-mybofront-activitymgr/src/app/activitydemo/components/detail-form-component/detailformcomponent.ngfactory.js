/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "./detailformcomponent.scss.shim.ngstyle";
import * as i1 from "@angular/core";
import * as i2 from "@angular/forms";
import * as i3 from "@farris/kendo-binding";
import * as i4 from "@farris/devkit";
import * as i5 from "../../../../../../../node_modules/@farris/ui-forms/validation-message/farris-ui-forms-validation-message.ngfactory";
import * as i6 from "@farris/ui-forms/validation-message";
import * as i7 from "../../../../../../../node_modules/@farris/ui-section/farris-ui-section.ngfactory";
import * as i8 from "@farris/ui-section";
import * as i9 from "@angular/common";
import * as i10 from "../../../map/components/map.component.ngfactory";
import * as i11 from "../../../map/components/map.component";
import * as i12 from "../../lang/lang-pipe";
import * as i13 from "@ngx-translate/core";
import * as i14 from "@angular/common/http";
import * as i15 from "@farris/command-services";
import * as i16 from "../../viewmodels/detailformcomponentviewmodel";
import * as i17 from "../../viewmodels/handlers/edit1handler";
import * as i18 from "../../viewmodels/handlers/save1handler";
import * as i19 from "../../viewmodels/handlers/cancel1handler";
import * as i20 from "@gsp-wf/rtdevkit";
import * as i21 from "@gsp-wf/ui-flowchart";
import * as i22 from "@gsp-svc/cloudprint";
import * as i23 from "@gsp-svc/formdoc-upload";
import * as i24 from "@farris/ui-sidebar";
import * as i25 from "@farris/ui-modal";
import * as i26 from "@angular/router";
import * as i27 from "@gsp-sys/rtf-common";
import * as i28 from "@gsp-cmp/querysolution";
import * as i29 from "@farris/bef";
import * as i30 from "@farris/ui-batch-edit-dialog";
import * as i31 from "@farris/ui-locale";
import * as i32 from "@farris/ui-common/date";
import * as i33 from "@farris/ui-lookup";
import * as i34 from "@farris/ui-combo-list";
import * as i35 from "../../viewmodels/form/detailformcomponentviewmodelform";
import * as i36 from "../../viewmodels/uistate/detailformcomponentviewmodeluistate";
import * as i37 from "../../models/activityrepository";
import * as i38 from "./detailformcomponent";
import * as i39 from "@farris/ui-wizard";
var styles_DetailFormComponent = [i0.styles];
var RenderType_DetailFormComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_DetailFormComponent, data: {} });
export { RenderType_DetailFormComponent as RenderType_DetailFormComponent };
function View_DetailFormComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 18, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 17, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 16, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 4, "label", [["class", "col-form-label"], ["for", "form_code"]], [[8, "title", 0]], null, null, null, null)), i1.ɵppd(4, 3), (_l()(), i1.ɵeld(5, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), i1.ɵted(6, null, ["", ""])), i1.ɵppd(7, 3), (_l()(), i1.ɵeld(8, 0, null, null, 10, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 6, "input", [["class", "form-control"], ["formControlName", "code"], ["id", "form_code"], ["input-end-edit", ""], ["tabindex", "-1"]], [[8, "readOnly", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 10)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 10).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 10)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 10)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(10, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i1.ɵdid(12, 671744, null, 0, i2.FormControlName, [[3, i2.ControlContainer], [8, null], [8, null], [6, i2.NG_VALUE_ACCESSOR], [2, i2.ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i2.NgControl, null, [i2.FormControlName]), i1.ɵdid(14, 16384, null, 0, i2.NgControlStatus, [[4, i2.NgControl]], null, null), i1.ɵdid(15, 212992, null, 0, i3.InputEndEditDirective, [i4.AppContext, i1.ElementRef], null, null), (_l()(), i1.ɵeld(16, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, i5.View_ValidationMessageComponent_0, i5.RenderType_ValidationMessageComponent)), i1.ɵdid(17, 573440, null, 0, i6.ValidationMessageComponent, [i1.ElementRef], { errors: [0, "errors"] }, null), (_l()(), i1.ɵeld(18, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_10 = "code"; _ck(_v, 12, 0, currVal_10); _ck(_v, 15, 0); var currVal_12 = _co.viewModel.form.getCardControlErrors("code"); _ck(_v, 17, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵinlineInterpolate(1, "", i1.ɵunv(_v, 3, 0, _ck(_v, 4, 0, i1.ɵnov(_v.parent.parent, 0), "form_code", _co.lang, "\u6D3B\u52A8\u7F16\u53F7")), ""); _ck(_v, 3, 0, currVal_0); var currVal_1 = i1.ɵunv(_v, 6, 0, _ck(_v, 7, 0, i1.ɵnov(_v.parent.parent, 0), "form_code", _co.lang, "\u6D3B\u52A8\u7F16\u53F7")); _ck(_v, 6, 0, currVal_1); var currVal_2 = !_co.viewModel.stateMachine["editable"]; var currVal_3 = i1.ɵnov(_v, 14).ngClassUntouched; var currVal_4 = i1.ɵnov(_v, 14).ngClassTouched; var currVal_5 = i1.ɵnov(_v, 14).ngClassPristine; var currVal_6 = i1.ɵnov(_v, 14).ngClassDirty; var currVal_7 = i1.ɵnov(_v, 14).ngClassValid; var currVal_8 = i1.ɵnov(_v, 14).ngClassInvalid; var currVal_9 = i1.ɵnov(_v, 14).ngClassPending; _ck(_v, 9, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_11 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 16, 0, currVal_11); }); }
function View_DetailFormComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 18, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 17, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 16, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 4, "label", [["class", "col-form-label"], ["for", "form_title"]], [[8, "title", 0]], null, null, null, null)), i1.ɵppd(4, 3), (_l()(), i1.ɵeld(5, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), i1.ɵted(6, null, ["", ""])), i1.ɵppd(7, 3), (_l()(), i1.ɵeld(8, 0, null, null, 10, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 6, "input", [["class", "form-control"], ["formControlName", "title"], ["id", "form_title"], ["input-end-edit", ""], ["tabindex", "-1"]], [[8, "readOnly", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 10)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 10).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 10)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 10)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(10, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i1.ɵdid(12, 671744, null, 0, i2.FormControlName, [[3, i2.ControlContainer], [8, null], [8, null], [6, i2.NG_VALUE_ACCESSOR], [2, i2.ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i2.NgControl, null, [i2.FormControlName]), i1.ɵdid(14, 16384, null, 0, i2.NgControlStatus, [[4, i2.NgControl]], null, null), i1.ɵdid(15, 212992, null, 0, i3.InputEndEditDirective, [i4.AppContext, i1.ElementRef], null, null), (_l()(), i1.ɵeld(16, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, i5.View_ValidationMessageComponent_0, i5.RenderType_ValidationMessageComponent)), i1.ɵdid(17, 573440, null, 0, i6.ValidationMessageComponent, [i1.ElementRef], { errors: [0, "errors"] }, null), (_l()(), i1.ɵeld(18, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_10 = "title"; _ck(_v, 12, 0, currVal_10); _ck(_v, 15, 0); var currVal_12 = _co.viewModel.form.getCardControlErrors("title"); _ck(_v, 17, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵinlineInterpolate(1, "", i1.ɵunv(_v, 3, 0, _ck(_v, 4, 0, i1.ɵnov(_v.parent.parent, 0), "form_title", _co.lang, "\u6D3B\u52A8\u4E3B\u9898")), ""); _ck(_v, 3, 0, currVal_0); var currVal_1 = i1.ɵunv(_v, 6, 0, _ck(_v, 7, 0, i1.ɵnov(_v.parent.parent, 0), "form_title", _co.lang, "\u6D3B\u52A8\u4E3B\u9898")); _ck(_v, 6, 0, currVal_1); var currVal_2 = !_co.viewModel.stateMachine["editable"]; var currVal_3 = i1.ɵnov(_v, 14).ngClassUntouched; var currVal_4 = i1.ɵnov(_v, 14).ngClassTouched; var currVal_5 = i1.ɵnov(_v, 14).ngClassPristine; var currVal_6 = i1.ɵnov(_v, 14).ngClassDirty; var currVal_7 = i1.ɵnov(_v, 14).ngClassValid; var currVal_8 = i1.ɵnov(_v, 14).ngClassInvalid; var currVal_9 = i1.ɵnov(_v, 14).ngClassPending; _ck(_v, 9, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_11 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 16, 0, currVal_11); }); }
function View_DetailFormComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 18, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 17, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 16, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 4, "label", [["class", "col-form-label"], ["for", "form_location"]], [[8, "title", 0]], null, null, null, null)), i1.ɵppd(4, 3), (_l()(), i1.ɵeld(5, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), i1.ɵted(6, null, ["", ""])), i1.ɵppd(7, 3), (_l()(), i1.ɵeld(8, 0, null, null, 10, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 6, "input", [["class", "form-control"], ["formControlName", "location"], ["id", "form_location"], ["input-end-edit", ""], ["tabindex", "-1"]], [[8, "readOnly", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 10)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 10).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 10)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 10)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(10, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i1.ɵdid(12, 671744, null, 0, i2.FormControlName, [[3, i2.ControlContainer], [8, null], [8, null], [6, i2.NG_VALUE_ACCESSOR], [2, i2.ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i2.NgControl, null, [i2.FormControlName]), i1.ɵdid(14, 16384, null, 0, i2.NgControlStatus, [[4, i2.NgControl]], null, null), i1.ɵdid(15, 212992, null, 0, i3.InputEndEditDirective, [i4.AppContext, i1.ElementRef], null, null), (_l()(), i1.ɵeld(16, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, i5.View_ValidationMessageComponent_0, i5.RenderType_ValidationMessageComponent)), i1.ɵdid(17, 573440, null, 0, i6.ValidationMessageComponent, [i1.ElementRef], { errors: [0, "errors"] }, null), (_l()(), i1.ɵeld(18, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_10 = "location"; _ck(_v, 12, 0, currVal_10); _ck(_v, 15, 0); var currVal_12 = _co.viewModel.form.getCardControlErrors("location"); _ck(_v, 17, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵinlineInterpolate(1, "", i1.ɵunv(_v, 3, 0, _ck(_v, 4, 0, i1.ɵnov(_v.parent.parent, 0), "form_location", _co.lang, "\u6D3B\u52A8\u5730\u70B9")), ""); _ck(_v, 3, 0, currVal_0); var currVal_1 = i1.ɵunv(_v, 6, 0, _ck(_v, 7, 0, i1.ɵnov(_v.parent.parent, 0), "form_location", _co.lang, "\u6D3B\u52A8\u5730\u70B9")); _ck(_v, 6, 0, currVal_1); var currVal_2 = !_co.viewModel.stateMachine["editable"]; var currVal_3 = i1.ɵnov(_v, 14).ngClassUntouched; var currVal_4 = i1.ɵnov(_v, 14).ngClassTouched; var currVal_5 = i1.ɵnov(_v, 14).ngClassPristine; var currVal_6 = i1.ɵnov(_v, 14).ngClassDirty; var currVal_7 = i1.ɵnov(_v, 14).ngClassValid; var currVal_8 = i1.ɵnov(_v, 14).ngClassInvalid; var currVal_9 = i1.ɵnov(_v, 14).ngClassPending; _ck(_v, 9, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_11 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 16, 0, currVal_11); }); }
function View_DetailFormComponent_5(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 18, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 17, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 16, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 4, "label", [["class", "col-form-label"], ["for", "form_geoLng"]], [[8, "title", 0]], null, null, null, null)), i1.ɵppd(4, 3), (_l()(), i1.ɵeld(5, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), i1.ɵted(6, null, ["", ""])), i1.ɵppd(7, 3), (_l()(), i1.ɵeld(8, 0, null, null, 10, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 6, "input", [["class", "form-control"], ["formControlName", "geoLng"], ["id", "form_geoLng"], ["input-end-edit", ""], ["tabindex", "-1"]], [[8, "readOnly", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 10)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 10).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 10)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 10)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(10, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i1.ɵdid(12, 671744, null, 0, i2.FormControlName, [[3, i2.ControlContainer], [8, null], [8, null], [6, i2.NG_VALUE_ACCESSOR], [2, i2.ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i2.NgControl, null, [i2.FormControlName]), i1.ɵdid(14, 16384, null, 0, i2.NgControlStatus, [[4, i2.NgControl]], null, null), i1.ɵdid(15, 212992, null, 0, i3.InputEndEditDirective, [i4.AppContext, i1.ElementRef], null, null), (_l()(), i1.ɵeld(16, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, i5.View_ValidationMessageComponent_0, i5.RenderType_ValidationMessageComponent)), i1.ɵdid(17, 573440, null, 0, i6.ValidationMessageComponent, [i1.ElementRef], { errors: [0, "errors"] }, null), (_l()(), i1.ɵeld(18, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_10 = "geoLng"; _ck(_v, 12, 0, currVal_10); _ck(_v, 15, 0); var currVal_12 = _co.viewModel.form.getCardControlErrors("geoLng"); _ck(_v, 17, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵinlineInterpolate(1, "", i1.ɵunv(_v, 3, 0, _ck(_v, 4, 0, i1.ɵnov(_v.parent.parent, 0), "form_geoLng", _co.lang, "\u5730\u7406\u7ECF\u5EA6")), ""); _ck(_v, 3, 0, currVal_0); var currVal_1 = i1.ɵunv(_v, 6, 0, _ck(_v, 7, 0, i1.ɵnov(_v.parent.parent, 0), "form_geoLng", _co.lang, "\u5730\u7406\u7ECF\u5EA6")); _ck(_v, 6, 0, currVal_1); var currVal_2 = !_co.viewModel.stateMachine["editable"]; var currVal_3 = i1.ɵnov(_v, 14).ngClassUntouched; var currVal_4 = i1.ɵnov(_v, 14).ngClassTouched; var currVal_5 = i1.ɵnov(_v, 14).ngClassPristine; var currVal_6 = i1.ɵnov(_v, 14).ngClassDirty; var currVal_7 = i1.ɵnov(_v, 14).ngClassValid; var currVal_8 = i1.ɵnov(_v, 14).ngClassInvalid; var currVal_9 = i1.ɵnov(_v, 14).ngClassPending; _ck(_v, 9, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_11 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 16, 0, currVal_11); }); }
function View_DetailFormComponent_6(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 18, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 17, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 16, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 4, "label", [["class", "col-form-label"], ["for", "form_geoLat"]], [[8, "title", 0]], null, null, null, null)), i1.ɵppd(4, 3), (_l()(), i1.ɵeld(5, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), i1.ɵted(6, null, ["", ""])), i1.ɵppd(7, 3), (_l()(), i1.ɵeld(8, 0, null, null, 10, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 6, "input", [["class", "form-control"], ["formControlName", "geoLat"], ["id", "form_geoLat"], ["input-end-edit", ""], ["tabindex", "-1"]], [[8, "readOnly", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 10)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 10).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 10)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 10)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(10, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i1.ɵdid(12, 671744, null, 0, i2.FormControlName, [[3, i2.ControlContainer], [8, null], [8, null], [6, i2.NG_VALUE_ACCESSOR], [2, i2.ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i2.NgControl, null, [i2.FormControlName]), i1.ɵdid(14, 16384, null, 0, i2.NgControlStatus, [[4, i2.NgControl]], null, null), i1.ɵdid(15, 212992, null, 0, i3.InputEndEditDirective, [i4.AppContext, i1.ElementRef], null, null), (_l()(), i1.ɵeld(16, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, i5.View_ValidationMessageComponent_0, i5.RenderType_ValidationMessageComponent)), i1.ɵdid(17, 573440, null, 0, i6.ValidationMessageComponent, [i1.ElementRef], { errors: [0, "errors"] }, null), (_l()(), i1.ɵeld(18, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_10 = "geoLat"; _ck(_v, 12, 0, currVal_10); _ck(_v, 15, 0); var currVal_12 = _co.viewModel.form.getCardControlErrors("geoLat"); _ck(_v, 17, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵinlineInterpolate(1, "", i1.ɵunv(_v, 3, 0, _ck(_v, 4, 0, i1.ɵnov(_v.parent.parent, 0), "form_geoLat", _co.lang, "\u5730\u7406\u7EAC\u5EA6")), ""); _ck(_v, 3, 0, currVal_0); var currVal_1 = i1.ɵunv(_v, 6, 0, _ck(_v, 7, 0, i1.ɵnov(_v.parent.parent, 0), "form_geoLat", _co.lang, "\u5730\u7406\u7EAC\u5EA6")); _ck(_v, 6, 0, currVal_1); var currVal_2 = !_co.viewModel.stateMachine["editable"]; var currVal_3 = i1.ɵnov(_v, 14).ngClassUntouched; var currVal_4 = i1.ɵnov(_v, 14).ngClassTouched; var currVal_5 = i1.ɵnov(_v, 14).ngClassPristine; var currVal_6 = i1.ɵnov(_v, 14).ngClassDirty; var currVal_7 = i1.ɵnov(_v, 14).ngClassValid; var currVal_8 = i1.ɵnov(_v, 14).ngClassInvalid; var currVal_9 = i1.ɵnov(_v, 14).ngClassPending; _ck(_v, 9, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_11 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 16, 0, currVal_11); }); }
function View_DetailFormComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 27, "farris-section", [["class", "f-section-form f-section-in-main"], ["id", "detail-form-section"]], [[2, "f-section", null], [2, "f-section-maximize", null], [2, "f-section-fill", null], [2, "f-section-accordion", null], [2, "f-state-collapse", null], [2, "f-section-custom-accordion", null]], null, null, i7.View_FarrisSectionComponent_0, i7.RenderType_FarrisSectionComponent)), i1.ɵdid(1, 114688, null, 6, i8.FarrisSectionComponent, [], { mainTitle: [0, "mainTitle"], subTitle: [1, "subTitle"], showHeader: [2, "showHeader"], enableMaximize: [3, "enableMaximize"], enableAccordion: [4, "enableAccordion"], fill: [5, "fill"], expandStatus: [6, "expandStatus"] }, null), i1.ɵqud(335544320, 1, { headerDirective: 0 }), i1.ɵqud(335544320, 2, { headerTitleDirective: 0 }), i1.ɵqud(335544320, 3, { headerContentDirective: 0 }), i1.ɵqud(335544320, 4, { headerToolbarDirective: 0 }), i1.ɵqud(335544320, 5, { extendDirective: 0 }), i1.ɵqud(335544320, 6, { contentDirective: 0 }), (_l()(), i1.ɵeld(8, 0, null, 0, 13, "div", [["class", "f-form-layout farris-form farris-form-controls-inline"], ["id", "detail-form-layout"]], [[2, "farris-form-controls-inline", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (i1.ɵnov(_v, 9).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (i1.ɵnov(_v, 9).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i1.ɵdid(9, 540672, null, 0, i2.FormGroupDirective, [[8, null], [8, null]], { form: [0, "form"] }, null), i1.ɵprd(2048, null, i2.ControlContainer, null, [i2.FormGroupDirective]), i1.ɵdid(11, 16384, null, 0, i2.NgControlStatusGroup, [[4, i2.ControlContainer]], null, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_DetailFormComponent_2)), i1.ɵdid(13, 16384, null, 0, i9.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_DetailFormComponent_3)), i1.ɵdid(15, 16384, null, 0, i9.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_DetailFormComponent_4)), i1.ɵdid(17, 16384, null, 0, i9.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_DetailFormComponent_5)), i1.ɵdid(19, 16384, null, 0, i9.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_DetailFormComponent_6)), i1.ɵdid(21, 16384, null, 0, i9.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(22, 0, null, 0, 5, "div", [["class", "f-utils-fill-flex-column"], ["style", "padding: 30px;"]], null, null, null, null, null)), (_l()(), i1.ɵeld(23, 0, null, null, 4, "app-map", [["class", "f-utils-fill-flex-column"]], null, [[null, "positionChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("positionChange" === en)) {
        _co.viewModel.bindingData.setValue(["geoLng"], $event.lng, true, true);
        var pd_0 = (_co.viewModel.bindingData.setValue(["geoLat"], $event.lat, true, true) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i10.View_MapComponent_0, i10.RenderType_MapComponent)), i1.ɵdid(24, 638976, null, 0, i11.MapComponent, [], { position: [0, "position"], readonly: [1, "readonly"], disabled: [2, "disabled"] }, { positionChange: "positionChange" }), i1.ɵpad(25, 1), i1.ɵpad(26, 1), i1.ɵpod(27, { lng: 0, lat: 1 })], function (_ck, _v) { var _co = _v.component; var currVal_6 = _co.SectiondetailformsectionMainTitle; var currVal_7 = _co.SectiondetailformsectionSubTitle; var currVal_8 = false; var currVal_9 = true; var currVal_10 = "default"; var currVal_11 = true; var currVal_12 = true; _ck(_v, 1, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12); var currVal_21 = _co.viewModel.form; _ck(_v, 9, 0, currVal_21); var currVal_22 = true; _ck(_v, 13, 0, currVal_22); var currVal_23 = true; _ck(_v, 15, 0, currVal_23); var currVal_24 = true; _ck(_v, 17, 0, currVal_24); var currVal_25 = true; _ck(_v, 19, 0, currVal_25); var currVal_26 = true; _ck(_v, 21, 0, currVal_26); var currVal_27 = _ck(_v, 27, 0, _co.viewModel.bindingData.getValue(_ck(_v, 25, 0, "geoLng")), _co.viewModel.bindingData.getValue(_ck(_v, 26, 0, "geoLat"))); var currVal_28 = !_co.viewModel.stateMachine["editable"]; var currVal_29 = false; _ck(_v, 24, 0, currVal_27, currVal_28, currVal_29); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵnov(_v, 1).baseCls; var currVal_1 = i1.ɵnov(_v, 1).maxStatus; var currVal_2 = i1.ɵnov(_v, 1).fillCls; var currVal_3 = i1.ɵnov(_v, 1).enableAccordionCls; var currVal_4 = i1.ɵnov(_v, 1).enableCollapseCls; var currVal_5 = i1.ɵnov(_v, 1).enableCustomAccordionCls; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_13 = (_co.lang === "zh-CHS"); var currVal_14 = i1.ɵnov(_v, 11).ngClassUntouched; var currVal_15 = i1.ɵnov(_v, 11).ngClassTouched; var currVal_16 = i1.ɵnov(_v, 11).ngClassPristine; var currVal_17 = i1.ɵnov(_v, 11).ngClassDirty; var currVal_18 = i1.ɵnov(_v, 11).ngClassValid; var currVal_19 = i1.ɵnov(_v, 11).ngClassInvalid; var currVal_20 = i1.ɵnov(_v, 11).ngClassPending; _ck(_v, 8, 0, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20); }); }
export function View_DetailFormComponent_0(_l) { return i1.ɵvid(0, [i1.ɵpid(0, i12.LangPipe, [i13.TranslateService, i14.HttpClient]), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_DetailFormComponent_1)), i1.ɵdid(2, 16384, null, 0, i9.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); }, null); }
export function View_DetailFormComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 58, "app-detailformcomponent", [], [[8, "className", 0]], null, null, View_DetailFormComponent_0, RenderType_DetailFormComponent)), i1.ɵprd(4608, null, i15.CardDataService, i15.CardDataService, [i15.FormMessageService, i4.FrameContext, i15.FormLoadingService, i15.FormNotifyService, [2, i15.LanguageService], i15.FormErrorService]), i1.ɵprd(4608, null, i15.StateMachineService, i15.StateMachineService, [i4.StateMachine]), i1.ɵprd(4608, null, i4.BindingData, i4.BindingData, []), i1.ɵprd(4608, null, i4.ViewModel, i16.DetailFormComponentViewmodel, []), i1.ɵprd(4608, null, i15.ListDataService, i15.ListDataService, [i15.FormMessageService, i4.Repository, i4.BindingData, i15.FormLoadingService, [2, i15.LanguageService], i15.FormNotifyService, i15.FormErrorService, i4.ViewModel, i15.FilterConditionService]), i1.ɵprd(4608, null, i15.EndEditService, i15.EndEditService, [i4.FrameContext]), i1.ɵprd(4608, null, i15.ValidationService, i15.ValidationService, [i4.Repository, i4.FrameContext]), i1.ɵprd(5120, null, i4.COMMAND_HANDLERS_TOKEN, function (p0_0, p0_1, p1_0, p1_1, p1_2, p1_3, p1_4, p2_0, p2_1, p2_2, p2_3, p2_4) { return [new i17.edit1Handler(p0_0, p0_1), new i18.save1Handler(p1_0, p1_1, p1_2, p1_3, p1_4), new i19.cancel1Handler(p2_0, p2_1, p2_2, p2_3, p2_4)]; }, [i15.CardDataService, i15.StateMachineService, i15.ListDataService, i15.CardDataService, i15.StateMachineService, i15.EndEditService, i15.ValidationService, i15.ListDataService, i15.CardDataService, i15.StateMachineService, i15.EndEditService, i15.ValidationService]), i1.ɵprd(4608, null, i4.CommandHandlerRegistry, i4.CommandHandlerRegistry, [[2, i4.COMMAND_HANDLERS_TOKEN]]), i1.ɵprd(4608, null, i4.CommandHandlerExtenderRegistry, i4.CommandHandlerExtenderRegistry, [[2, i4.COMMAND_HANDLER_EXTENDERS_TOKEN]]), i1.ɵprd(4608, null, i4.CommandHandlerFactory, i4.CommandHandlerFactory, [i4.CommandHandlerRegistry, i4.CommandHandlerExtenderRegistry, i4.FrameContext]), i1.ɵprd(4608, null, i4.CommandBus, i4.CommandBus, [i4.CommandHandlerFactory]), i1.ɵprd(4608, null, i15.ChangeItemService, i15.ChangeItemService, [i4.Repository, i4.FrameContext, i15.FormNotifyService, i15.LanguageService]), i1.ɵprd(4608, null, i15.UIStateService, i15.UIStateService, []), i1.ɵprd(4608, null, i15.BindingDataService, i15.BindingDataService, [i4.BindingData, i4.AppContext]), i1.ɵprd(4608, null, i15.CommandService, i15.CommandService, [i4.ViewModel, i4.AppContext]), i1.ɵprd(4608, null, i15.EntityTraversingService, i15.EntityTraversingService, [i4.FrameContext]), i1.ɵprd(4608, null, i15.EntityManipulationService, i15.EntityManipulationService, [i4.FrameContext]), i1.ɵprd(4608, null, i15.EntityAggregationService, i15.EntityAggregationService, [i4.FrameContext]), i1.ɵprd(4608, null, i15.EntityListService, i15.EntityListService, [i4.BindingData]), i1.ɵprd(4608, null, i15.EntityService, i15.EntityService, [i4.FrameContext]), i1.ɵprd(4608, null, i15.TreeDataService, i15.TreeDataService, [i4.FrameContext, i15.FormMessageService, i15.FormLoadingService, i15.FormNotifyService, i15.FormErrorService, [2, i15.LanguageService]]), i1.ɵprd(4608, null, i15.SubListDataService, i15.SubListDataService, [i15.FormMessageService, i4.Repository, i15.FormLoadingService, i4.ViewModel, [2, i15.LanguageService], i15.FormNotifyService, i15.FormErrorService]), i1.ɵprd(4608, null, i15.RemoveDataService, i15.RemoveDataService, [i4.FrameContext]), i1.ɵprd(4608, null, i15.SaveDataService, i15.SaveDataService, [i4.FrameContext]), i1.ɵprd(4608, null, i15.EditDataService, i15.EditDataService, [i4.FrameContext]), i1.ɵprd(4608, null, i15.FilterConditionDataService, i15.FilterConditionDataService, [i4.ViewModel, i15.FilterConditionService, i15.CommandService]), i1.ɵprd(4608, null, i15.RemoteSummaryService, i15.RemoteSummaryService, [i4.ViewModel]), i1.ɵprd(4608, null, i15.BeActionService, i15.BeActionService, [i4.Repository, i15.FormLoadingService, i15.FormMessageService, i15.FormNotifyService, i15.FormErrorService, [2, i15.LanguageService]]), i1.ɵprd(4608, null, i15.ApproveService, i15.ApproveService, [i15.FormLoadingService, i15.BeActionService, i15.FormMessageService, i15.FormNotifyService, [2, i15.LanguageService], i15.FormErrorService, i4.FrameContext, [2, i20.WFSubmiteService], [2, i21.WFFlowchartService]]), i1.ɵprd(4608, null, i15.PrintService, i15.PrintService, [i15.FormMessageService, i15.LanguageService, i22.CloudprintService]), i1.ɵprd(4608, null, i15.AttachmentDataService, i15.AttachmentDataService, [i4.FrameContext, i15.FormLoadingService]), i1.ɵprd(4608, null, i15.AttachmentService, i15.AttachmentService, [i4.FrameContext, i15.AttachmentDataService, i15.FormNotifyService, i23.UploadDialogService]), i1.ɵprd(4608, null, i15.FileService, i15.FileService, [i4.FrameContext, i15.AttachmentDataService, i15.EntityService, i15.SubListDataService, i15.FormNotifyService, i15.LanguageService]), i1.ɵprd(4608, null, i15.NavigationEventService, i15.NavigationEventService, [i15.RuntimeFrameworkService, i15.MenuStateService, i15.QuerystringService]), i1.ɵprd(4608, null, i15.NavigationService, i15.NavigationService, [i15.RuntimeFrameworkService, i15.MenuStateService, i15.NavigationEventService, i15.QuerystringService, [2, i4.FrameContext], [2, i1.Injector]]), i1.ɵprd(4608, null, i15.NavigationMiddlewareService, i15.NavigationMiddlewareService, [i15.NavigationService, i4.FrameContext, i15.FormMessageService, [2, i15.LanguageService], i15.CardDataService]), i1.ɵprd(4608, null, i15.GridMiddlewareService, i15.GridMiddlewareService, [i4.FrameContext, i15.FormMessageService, [2, i15.LanguageService]]), i1.ɵprd(4608, null, i15.SidebarService, i15.SidebarService, [i4.FrameContext, i24.FarrisSidebarService, i15.FormMessageService, [2, i15.LanguageService]]), i1.ɵprd(4608, null, i15.FarrisFormService, i15.FarrisFormService, [[2, i15.FARRIS_FORM_COMPONENTS]]), i1.ɵprd(4608, null, i15.DialogService, i15.DialogService, [i25.BsModalService, i15.FarrisFormService, i1.ComponentFactoryResolver, i4.FrameContext]), i1.ɵprd(4608, null, i15.RouterService, i15.RouterService, [i26.Router, i4.RouterParamService, i27.FrameworkService, [2, i27.AppService], [2, i15.MenuStateService], [2, i15.LanguageService]]), i1.ɵprd(4608, null, i15.AuthorityService, i15.AuthorityService, []), i1.ɵprd(4608, null, i28.QUERYSOLUTION_HANDLER_TOKEN, i15.ɵb, [i4.FrameContext, i29.FrameworkSessionService]), i1.ɵprd(4608, null, i30.BatchEditDialogService, i30.BatchEditDialogService, [i1.Injector, i25.BsModalService, i1.ComponentFactoryResolver, i31.LocaleService]), i1.ɵprd(4608, null, i15.BatchEditService, i15.BatchEditService, [i1.Injector, i15.ComponentManagerService, i4.ViewModel, i4.Repository, i30.BatchEditDialogService, i32.DateTimeHelperService]), i1.ɵprd(4608, null, i33.ServerSideToken, i29.BefLookupRestService, [i4.Repository, [2, i4.FrameContext]]), i1.ɵprd(4608, null, i34.ComboServerSideToken, i29.DefaultComboHttpService, [i4.Repository]), i1.ɵprd(4608, null, i4.Form, i35.DetailFormComponentViewmodelForm, []), i1.ɵprd(4608, null, i4.UIState, i36.DetailFormComponentViewmodelUIState, []), i1.ɵprd(512, null, i12.LangService, i12.LangService, [i13.TranslateService]), i1.ɵprd(2048, null, i4.Repository, null, [i37.ActivityRepository]), i1.ɵprd(512, null, i4.FrameContext, i4.FrameContext, [i1.Injector, [3, i4.FrameContext]]), i1.ɵprd(512, null, i15.FocusInvalidService, i15.FocusInvalidService, [i4.Repository, i4.FrameContext]), i1.ɵdid(55, 4440064, null, 0, i38.DetailFormComponent, [i39.WizardService, i15.KeybindingService, i12.LangService, i26.ActivatedRoute, i26.Router, i1.ElementRef, i15.FocusInvalidService, i1.Injector], null, null), i1.ɵprd(256, null, i4.FRAME_ID, "detail-form-component", []), i1.ɵprd(256, null, i4.NAMESPACE, "activitydemo", []), i1.ɵprd(256, null, i4.EXCEPTION_HANDLER, null, [])], function (_ck, _v) { _ck(_v, 55, 0); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 55).cls; _ck(_v, 0, 0, currVal_0); }); }
var DetailFormComponentNgFactory = i1.ɵccf("app-detailformcomponent", i38.DetailFormComponent, View_DetailFormComponent_Host_0, {}, {}, []);
export { DetailFormComponentNgFactory as DetailFormComponentNgFactory };
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgValidateForm } from '@farris/devkit';
var DetailFormComponentViewmodelForm = /** @class */ (function (_super) {
    tslib_1.__extends(DetailFormComponentViewmodelForm, _super);
    function DetailFormComponentViewmodelForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgFormControl({
            id: 'form_code',
            name: "{{form_code}}",
            binding: 'code',
            updateOn: 'blur',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "code", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'form_title',
            name: "{{form_title}}",
            binding: 'title',
            updateOn: 'blur',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "title", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'form_location',
            name: "{{form_location}}",
            binding: 'location',
            updateOn: 'blur',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "location", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'form_geoLng',
            name: "{{form_geoLng}}",
            binding: 'geoLng',
            updateOn: 'blur',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "geoLng", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'form_geoLat',
            name: "{{form_geoLat}}",
            binding: 'geoLat',
            updateOn: 'blur',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "geoLat", void 0);
    DetailFormComponentViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '活动',
            enableValidate: false
        }),
        Injectable()
    ], DetailFormComponentViewmodelForm);
    return DetailFormComponentViewmodelForm;
}(Form));
export { DetailFormComponentViewmodelForm };

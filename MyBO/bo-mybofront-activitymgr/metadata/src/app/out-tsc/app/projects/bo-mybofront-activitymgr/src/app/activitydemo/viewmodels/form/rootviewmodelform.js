import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Form, NgValidateForm } from '@farris/devkit';
var RootViewmodelForm = /** @class */ (function (_super) {
    tslib_1.__extends(RootViewmodelForm, _super);
    function RootViewmodelForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RootViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '活动',
            enableValidate: false
        }),
        Injectable()
    ], RootViewmodelForm);
    return RootViewmodelForm;
}(Form));
export { RootViewmodelForm };

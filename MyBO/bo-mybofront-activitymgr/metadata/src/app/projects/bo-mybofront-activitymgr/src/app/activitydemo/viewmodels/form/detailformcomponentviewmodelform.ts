
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm  } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '活动',
    enableValidate: false
})

@Injectable()
export class DetailFormComponentViewmodelForm extends Form {
    @NgFormControl({
        id: 'form_code',
        name: "{{form_code}}",
        binding: 'code',
        updateOn: 'blur',
    })
    code: FormControl;

    @NgFormControl({
        id: 'form_title',
        name: "{{form_title}}",
        binding: 'title',
        updateOn: 'blur',
    })
    title: FormControl;

    @NgFormControl({
        id: 'form_location',
        name: "{{form_location}}",
        binding: 'location',
        updateOn: 'blur',
    })
    location: FormControl;

    @NgFormControl({
        id: 'form_geoLng',
        name: "{{form_geoLng}}",
        binding: 'geoLng',
        updateOn: 'blur',
    })
    geoLng: FormControl;

    @NgFormControl({
        id: 'form_geoLat',
        name: "{{form_geoLat}}",
        binding: 'geoLat',
        updateOn: 'blur',
    })
    geoLat: FormControl;

}
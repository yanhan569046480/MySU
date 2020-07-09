
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
export class DataGridComponentViewmodelForm extends Form {
    @NgFormControl({
        id: 'code',
        name: "{{gridField_31f4b1d9-0213-48ee-a282-1c527d16c4e8_code}}",
        binding: 'code',
        updateOn: 'blur',
    })
    code: FormControl;

    @NgFormControl({
        id: 'title',
        name: "{{gridField_bd1edf94-9d71-4c07-a2e8-3439c31f9a04_title}}",
        binding: 'title',
        updateOn: 'blur',
    })
    title: FormControl;

    @NgFormControl({
        id: 'location',
        name: "{{gridField_f664c181-9d27-451e-80ca-657cd1f078c4_location}}",
        binding: 'location',
        updateOn: 'blur',
    })
    location: FormControl;

}
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { REGEX_EMAIL } from './../../form/constants';

@Injectable()
export class FormTwoModel {
    constructor(private fb: FormBuilder) {}

    get model(){
        return this.fb.group({
            email: new FormControl('', [Validators.required, Validators.pattern(REGEX_EMAIL)])
        });
    }
}

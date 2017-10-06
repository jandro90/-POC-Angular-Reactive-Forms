import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

import { REGEX_NAME, REGEX_AGE, REGEX_EMAIL, REGEX_PHONE } from './../constants';

@Injectable()
export class FormModel {
    get model() {
        return new FormGroup({
          person: new FormGroup(this.getPersonGroup()),
          personalInformation: new FormGroup(this.getPersonalInformation()),
          operations: new FormGroup(this.getOperations())
        });
    }

  private getPersonGroup() {
    return {
      name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.pattern(REGEX_NAME)] ),
      lastName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.pattern(REGEX_NAME)] ),
      age: new FormControl(null, [Validators.required, Validators.pattern(REGEX_AGE)] )
    };
  }

  private getPersonalInformation() {
    return {
      email: new FormControl(null, [Validators.required, Validators.pattern(REGEX_EMAIL)] ),
      phone: new FormControl(null, [Validators.required, Validators.pattern(REGEX_PHONE)] ),
      city: new FormControl(null, Validators.required )
    };
  }

  private getOperations() {
    return {
      firstNumber: new FormControl(null, Validators.required),
      secondNumber: new FormControl(null, Validators.required),
      resultNumber: new FormControl(null, Validators.required)
    };
  }
}

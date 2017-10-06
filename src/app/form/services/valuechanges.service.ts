import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/combineLatest';

@Injectable()
export class ValueChangesService {

  getChanges(form: FormGroup) {
    form.get('operations.firstNumber').valueChanges.combineLatest(form.get('operations.secondNumber').valueChanges)
      .subscribe(([firstNumber, secondNumber]) => {
        const resultNumber: Number = parseFloat(firstNumber) + parseFloat(secondNumber);
        form.get('operations.resultNumber').setValue(resultNumber);
      });
  }
}

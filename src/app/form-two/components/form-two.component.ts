import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

import { FormTwoModel } from './../models/form-two.model';

@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.component.html',
  styleUrls: ['./form-two.component.scss']
})

export class FormTwoComponent {
  modelEmailForm: FormGroup;

  constructor(private form: FormTwoModel) {
    this.modelEmailForm = this.form.model;
   }
}

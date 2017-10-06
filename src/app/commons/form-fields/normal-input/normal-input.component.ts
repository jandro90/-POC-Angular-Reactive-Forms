import { FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-normal-input',
  templateUrl: './normal-input.component.html',
  styleUrls: ['./normal-input.component.scss']
})

export class NormalInputComponent {
  @Input() group: FormGroup;
  @Input() field: string;
  @Input() inputType: string;
  @Input() placeHolder: string;
  @Input() nameField: string;
}

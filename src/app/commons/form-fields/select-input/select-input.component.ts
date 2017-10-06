import { FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss']
})

export class SelectInputComponent {
  @Input() group: FormGroup;
  @Input() options: string[];
  @Input() field: string;
  @Input() nameField: string;
}

import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NormalInputComponent } from './form-fields/normal-input/normal-input.component';
import { SelectInputComponent } from './form-fields/select-input/select-input.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        NormalInputComponent,
        SelectInputComponent
    ],
    declarations: [
        NormalInputComponent,
        SelectInputComponent
    ],
    providers: [],
})

export class CommonsModule {}

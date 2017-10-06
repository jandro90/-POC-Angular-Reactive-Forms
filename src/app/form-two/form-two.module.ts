import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormTwoComponent } from './components/form-two.component';
import { FormTwoModel } from './models/form-two.model';
import { CommonsModule } from '../commons/commons.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CommonsModule
    ],
    exports: [
        FormTwoComponent
    ],
    declarations: [
        FormTwoComponent
    ],
    providers: [
        FormTwoModel
    ],
})

export class FormTwoModule { }

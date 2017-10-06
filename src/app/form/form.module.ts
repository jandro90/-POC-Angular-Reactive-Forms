import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ValueChangesService } from './services/valuechanges.service';
import { FormComponent } from './components/form.component';
import { FormModel } from './models/form.model';
import { CitiesService } from './services/cities.service';
import { CommonsModule } from '../commons/commons.module';

@NgModule({
    imports: [
        ReactiveFormsModule,
        CommonModule,
        HttpClientModule,
        CommonsModule
    ],
    exports: [
        FormComponent
    ],
    declarations: [
        FormComponent
    ],
    providers: [
        FormModel,
        ValueChangesService,
        CitiesService
    ]
})

export class FormModule {}

import { Routes } from '@angular/router';

import { FormTwoComponent } from './../form-two/components/form-two.component';
import { FormComponent } from './../form/components/form.component';

export const ROUTES: Routes = [
    { path: 'form', component: FormComponent },
    { path: 'form-two', component: FormTwoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'form' }
  ];

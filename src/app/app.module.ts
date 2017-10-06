import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormTwoModule } from './form-two/form-two.module';
import { FormModule } from './form/form.module';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { NavbarComponent } from './header/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormModule,
    FormTwoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

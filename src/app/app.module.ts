import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClientModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { EyeAppointmentComponent } from './eye-appointment/eye-appointment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


const appRoutes: Routes = [
  { path: 'eye-appointment', component: EyeAppointmentComponent }]

@NgModule({
  declarations: [
    AppComponent,
    EyeAppointmentComponent,
	  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
	NgbModule,
	ReactiveFormsModule,
	 RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

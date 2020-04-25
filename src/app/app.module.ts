import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { EditEmployeeDialogComponent } from './crud/edit-employee-dialog/edit-employee-dialog.component';
import { CrudComponent } from './crud/crud.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from './services/country.service';

@NgModule({
  declarations: [
    AppComponent,
    EditEmployeeDialogComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    CountryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

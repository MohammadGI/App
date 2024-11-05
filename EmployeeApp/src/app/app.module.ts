import { NgModule } from '@angular/core';
import {BrowserModule,provideClientHydration,} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from '../form/form.component';
import { ListComponent } from '../list/list.component';
import { EmployeeEditComponent } from '../employee-edit/employee-edit.component';
import { PopupComponent } from '../popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    EmployeeEditComponent,
    PopupComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule], 
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}

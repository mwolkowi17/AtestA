import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import {FormsModule} from '@angular/forms';  

import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CarsComponent } from './cars/cars.component';
import { ListAComponent } from './list-a/list-a.component';
import { TestlistComponent } from './testlist/testlist.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    WelcomeComponent,
    CarsComponent,
    ListAComponent,
    TestlistComponent,
    FormComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [WelcomeComponent]
})
export class AppModule { }

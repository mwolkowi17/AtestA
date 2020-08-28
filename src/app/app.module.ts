import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CarsComponent } from './cars/cars.component';
import { ListAComponent } from './list-a/list-a.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    CarsComponent,
    ListAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [WelcomeComponent]
})
export class AppModule { }

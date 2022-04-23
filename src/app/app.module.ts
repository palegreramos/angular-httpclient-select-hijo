import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  //añadir

import { SaludarComponent } from './saludar/saludar.component';
import { AppComponent } from './app.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,  HttpClientModule  ],//añadir HttpClientModule
  declarations: [ AppComponent, SaludarComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

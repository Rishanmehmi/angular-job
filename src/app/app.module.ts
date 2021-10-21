import { AppRoutingModule, routingComponents } from './app-routing.module';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { AppliesComponent } from './applies/applies.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   
    AppliesComponent,
    routingComponents,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
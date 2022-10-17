import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatorRoutingModule } from './creator-routing.module';
import { CreatorComponent } from './creator/creator.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiService } from '../api.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core'
// import { googlemaps } from '../../../node_modules/@types/googlemaps'

@NgModule({
  declarations: [
    CreatorComponent
  ],
  imports: [
    CommonModule,
    CreatorRoutingModule,
    AutocompleteLibModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey:'',
      libraries:['places']
    })
    // BrowserModule
    
  ],
  providers: [
    ApiService
  ],
})
export class CreatorModule { }

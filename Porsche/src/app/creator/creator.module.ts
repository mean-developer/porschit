import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatorRoutingModule } from './creator-routing.module';
import { CreatorComponent } from './creator/creator.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    CreatorComponent
  ],
  imports: [
    CommonModule,
    CreatorRoutingModule,
    AutocompleteLibModule,
    CommonModule,
    HttpClientModule
    
  ]
})
export class CreatorModule { }

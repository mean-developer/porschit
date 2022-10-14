import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { MotherNatureRoutingModule } from './mother-nature-routing.module';
import { MotherNatureComponent } from './mother-nature/mother-nature.component';


@NgModule({
  declarations: [
    MotherNatureComponent
  ],
  imports: [
    CommonModule,
    MotherNatureRoutingModule,
    FormsModule
  ]
})
export class MotherNatureModule { }

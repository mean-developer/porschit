import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotherNatureComponent } from './mother-nature/mother-nature.component';

const routes: Routes = [
  { path: 'MNC', component: MotherNatureComponent },
  // { path: '',   redirectTo: '/MotherNatureComponent', pathMatch: 'full' }, // redirect to `MotherNatureComponent`
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotherNatureRoutingModule { }

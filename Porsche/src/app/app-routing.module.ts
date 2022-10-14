import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'MNM',
    loadChildren: () => import('./mother-nature/mother-nature.module').then(m => m.MotherNatureModule)
  },
  {
    path: 'CM',
    loadChildren: () => import('./creator/creator.module').then(m => m.CreatorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

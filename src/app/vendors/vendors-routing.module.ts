import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomevendorsComponent } from './homevendors/homevendors.component';

const routes: Routes = [
  {path:'home',component:HomevendorsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorsRoutingModule { }

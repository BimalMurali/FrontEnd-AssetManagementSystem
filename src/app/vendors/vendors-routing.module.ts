import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VendorsComponent} from './vendors.component'
import { HomevendorsComponent } from './homevendors/homevendors.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorsRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetcreationListComponent } from './assetcreation-list/assetcreation-list.component';

const routes: Routes = [
  {path:'list',component:AssetcreationListComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetcreationRoutingModule { }

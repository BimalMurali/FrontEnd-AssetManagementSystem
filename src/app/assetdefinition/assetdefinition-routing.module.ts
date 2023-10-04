import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ListassetsComponent } from './listassets/listassets.component'
import{AddassetsComponent} from './addassets/addassets.component'
import { UpdateassetsComponent } from './updateassets/updateassets.component';
const routes: Routes = [
  {path:'list',component:ListassetsComponent},
  {path:'add',component:AddassetsComponent},
  {path:'edit/:id',component:UpdateassetsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetdefinitionRoutingModule { }

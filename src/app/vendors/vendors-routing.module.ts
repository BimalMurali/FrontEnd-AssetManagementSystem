import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomevendorsComponent } from './homevendors/homevendors.component';
import {ListassetsComponent} from './listassets/listassets.component'
import {EditassetsComponent} from './editassets/editassets.component'
import {AddassetsComponent} from './addassets/addassets.component'
import {UpdatestatusComponent} from './updatestatus/updatestatus.component'

const routes: Routes = [
  {path:'home',component:HomevendorsComponent},
  {path :'listassets',component:ListassetsComponent},
  {path :'editassets',component:EditassetsComponent},
  {path :'addassets',component:AddassetsComponent},
  {path :'updatestatus',component:UpdatestatusComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorsRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ListassetsComponent } from './listassets/listassets.component'
import{AddassetsComponent} from './addassets/addassets.component'
import { UpdateassetsComponent } from './updateassets/updateassets.component';
import {HomeComponent} from './home/home.component'
import { AuthGuard } from '../auth/auth.guard';
const routes: Routes = [
  {path:'list',component:ListassetsComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'add',component:AddassetsComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'edit/:id',component:UpdateassetsComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard],data:{role:'1'}}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetdefinitionRoutingModule { }

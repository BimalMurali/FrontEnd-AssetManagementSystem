import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './shared/home/home.component'
import {LoginComponent} from './auth/login/login.component'
import {VendorsComponent} from './vendors/vendors.component'


const routes: Routes = [
  {  path: '',redirectTo:'shared/home',pathMatch:'full'},
  { path: 'login', component: LoginComponent},
 { path: 'list', component: VendorsComponent} ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

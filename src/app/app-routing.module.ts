import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {LoginComponent} from './auth/login/login.component'
import { VendorsComponent } from './vendors/vendors.component'
import { HomeComponent } from './shared/home/home.component';
import { AuthComponent } from './auth/auth.component'
import {CompanyComponent} from './company/company.component'


const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'company',component:CompanyComponent,
loadChildren: ()=>import('./company/company.module').then(x=>x.CompanyModule)},
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () => import('./auth/auth.module').then(x => x.AuthModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

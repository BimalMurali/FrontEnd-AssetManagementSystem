import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {LoginComponent} from './auth/login/login.component'
// import { VendorsComponent } from './vendors/vendors.component'
import { HomeComponent } from './shared/home/home.component';
import { AuthComponent } from './auth/auth.component'
import {CompanyComponent} from './company/company.component'
import {NotfoundComponent} from './shared/notfound/notfound.component'
import { VendordetailsComponent } from './vendordetails/vendordetails.component';

const routes: Routes = [
  {path: '',redirectTo:'home',pathMatch:'full'},

  { 
    path: 'home', component: HomeComponent },

  {
    path: 'company',
    component: CompanyComponent,
    loadChildren: () => import('./company/company.module').then(x => x.CompanyModule)
  },
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () => import('./auth/auth.module').then(x => x.AuthModule)
  },
  {
    path: 'vendordetails',
    component: VendordetailsComponent,
    loadChildren: () => import('./vendordetails/vendordetails.module').then(x => x.VendordetailsModule)

  },

  //Wild card routes for page not found
  {
    path: '**',component: NotfoundComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

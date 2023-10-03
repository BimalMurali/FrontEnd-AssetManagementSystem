import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {LoginComponent} from './auth/login/login.component'
import { VendorsComponent } from './vendors/vendors.component'
import { HomeComponent } from './shared/home/home.component';
import { AuthComponent } from './auth/auth.component'
import {AssetcreationComponent} from './assetcreation/assetcreation.component'
import {NotfoundComponent} from './shared/notfound/notfound.component'
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {path: '',redirectTo:'home',pathMatch:'full'},

  { 
    path: 'home', component: LoginComponent },

  {
    path: 'assetcreation',
    component: AssetcreationComponent,
    loadChildren: () => import('./assetcreation/assetcreation.module').then(x => x.AssetcreationModule)
  },
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () => import('./auth/auth.module').then(x => x.AuthModule)
  },
  {
    path: 'vendors',
    component: VendorsComponent,
    loadChildren: () => import('./vendors/vendors.module').then(x => x.VendorsModule)

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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {LoginComponent} from './auth/login/login.component'
// import { VendorsComponent } from './vendors/vendors.component'
import { HomeComponent } from './shared/home/home.component';
import { AuthComponent } from './auth/auth.component'
import {AssetcreationComponent} from './assetcreation/assetcreation.component'
import {NotfoundComponent} from './shared/notfound/notfound.component'
import { VendordetailsComponent } from './vendordetails/vendordetails.component';
import { LoginComponent } from './auth/login/login.component';
import {AssetdefinitionComponent} from './assetdefinition/assetdefinition.component';
import {PurchaseordersComponent} from './purchaseorders/purchaseorders.component'


const routes: Routes = [
  {path: '',redirectTo:'home',pathMatch:'full'},

  { 
    path: 'home', component: LoginComponent },
  
    {
      path:'purchaseorders',
      component:PurchaseordersComponent,
      loadChildren:()=>import('./purchaseorders/purchaseorders.module').then(x=>x.PurchaseordersModule)
    },

  {
    path: 'assetcreation',
    component: AssetcreationComponent,
    loadChildren: () => import('./assetcreation/assetcreation.module').then(x => x.AssetcreationModule)
  },
  {
    path: 'assetdefinition',
    component: AssetdefinitionComponent,
    loadChildren: () => import('./assetdefinition/assetdefinition.module').then(x => x.AssetdefinitionModule)
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

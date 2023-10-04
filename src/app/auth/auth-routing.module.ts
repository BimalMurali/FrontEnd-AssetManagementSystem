import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {AuthGuard} from './auth.guard'
import { AssetcreationComponent } from '../assetcreation/assetcreation.component';
import { AssetdefinitionComponent } from '../assetdefinition/assetdefinition.component';
import { VendordetailsComponent } from '../vendordetails/vendordetails.component';
import { PurchaseordersComponent } from '../purchaseorders/purchaseorders.component';

const routes: Routes = [
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

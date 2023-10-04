import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorlistComponent } from './vendorlist/vendorlist.component';
import { VendoreditComponent } from './vendoredit/vendoredit.component';
import { VendoraddComponent } from './vendoradd/vendoradd.component';
import {HomeComponent} from './home/home.component'
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'list',
    component: VendorlistComponent,canActivate:[AuthGuard],data:{role:'2'}
  },
  {
    path: 'edit/:id',
    component: VendoreditComponent,canActivate:[AuthGuard],data:{role:'2'}
  },
  {
    path: 'add',
    component: VendoraddComponent,canActivate:[AuthGuard],data:{role:'2'}
  },
  {
    path:'home',
    component:HomeComponent,canActivate:[AuthGuard],data:{role:'2'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendordetailsRoutingModule { }

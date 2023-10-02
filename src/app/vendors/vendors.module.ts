import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorsRoutingModule } from './vendors-routing.module';
import { VendorsComponent } from './vendors.component';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [VendorsComponent],
  imports: [
    CommonModule,
    VendorsRoutingModule,
    RouterModule,
    FormsModule
  ]
})
export class VendorsModule { }

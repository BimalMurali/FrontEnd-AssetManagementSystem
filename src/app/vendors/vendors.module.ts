import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorsRoutingModule } from './vendors-routing.module';
import { VendorsComponent } from './vendors.component';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddassetsComponent } from './addassets/addassets.component';
import { ListassetsComponent } from './listassets/listassets.component';
import { EditassetsComponent } from './editassets/editassets.component';
import { UpdatestatusComponent } from './updatestatus/updatestatus.component';
import { HomevendorsComponent } from './homevendors/homevendors.component';



@NgModule({
  declarations: [VendorsComponent, AddassetsComponent, ListassetsComponent, EditassetsComponent, UpdatestatusComponent, HomevendorsComponent],
  imports: [
    CommonModule,
    VendorsRoutingModule,
    RouterModule,
    FormsModule
  ]
})
export class VendorsModule { }

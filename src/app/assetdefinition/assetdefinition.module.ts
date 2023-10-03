import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetdefinitionRoutingModule } from './assetdefinition-routing.module';
import { AssetdefinitionComponent } from './assetdefinition.component';
import { AddassetsComponent } from './addassets/addassets.component';
import { UpdateassetsComponent } from './updateassets/updateassets.component';
import { ListassetsComponent } from './listassets/listassets.component';


@NgModule({
  declarations: [AssetdefinitionComponent, AddassetsComponent, UpdateassetsComponent, ListassetsComponent],
  imports: [
    CommonModule,
    AssetdefinitionRoutingModule
  ]
})
export class AssetdefinitionModule { }

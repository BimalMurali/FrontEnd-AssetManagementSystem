import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetdefinitionRoutingModule } from './assetdefinition-routing.module';
import { AssetdefinitionComponent } from './assetdefinition.component';
import { AddassetsComponent } from './addassets/addassets.component';
import { UpdateassetsComponent } from './updateassets/updateassets.component';
import { ListassetsComponent } from './listassets/listassets.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import{ Ng2SearchPipeModule} from 'ng2-search-filter';
import{NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [AssetdefinitionComponent, AddassetsComponent, UpdateassetsComponent, ListassetsComponent, HomeComponent],
  imports: [
    CommonModule,
    AssetdefinitionRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class AssetdefinitionModule { }

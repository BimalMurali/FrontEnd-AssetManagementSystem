import { Component, OnInit } from '@angular/core';
import { AssetDefinitionService } from '../shared/services/asset-definition.service';

@Component({
  selector: 'app-assetdefinition',
  templateUrl: './assetdefinition.component.html',
  styleUrls: ['./assetdefinition.component.scss']
})
export class AssetdefinitionComponent implements OnInit {

  constructor(private assetdefinitionservice:AssetDefinitionService) { }

  ngOnInit(): void {
  }

  logOut(){
    console.log("Log out");
    this.assetdefinitionservice.logOut();
  }
}



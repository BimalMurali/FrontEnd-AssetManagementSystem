import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssetcreationService } from 'src/app/shared/services/assetcreation.service';

@Component({
  selector: 'app-assetcreation-list',
  templateUrl: './assetcreation-list.component.html',
  styleUrls: ['./assetcreation-list.component.scss']
})
export class AssetcreationListComponent implements OnInit {

  constructor(public assetcreationservice: AssetcreationService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.assetcreationservice.getAllAssetDefinitions());
    this.assetcreationservice.getAllAssetDefinitions();

  }

}

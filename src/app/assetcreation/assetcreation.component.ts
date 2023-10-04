import { Component, OnInit } from '@angular/core';
import { AssetcreationService } from '../shared/services/assetcreation.service';

@Component({
  selector: 'app-assetcreation',
  templateUrl: './assetcreation.component.html',
  styleUrls: ['./assetcreation.component.scss']
})
export class AssetcreationComponent implements OnInit {

  constructor(private assetcreationservice:AssetcreationService) { }

  ngOnInit(): void {
  }

  logOut(){
    console.log("Log out");
    this.assetcreationservice.logOut();
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssetDefinitionService } from 'src/app/shared/services/asset-definition.service';


@Component({
  selector: 'app-listassets',
  templateUrl: './listassets.component.html',
  styleUrls: ['./listassets.component.scss']
})
export class ListassetsComponent implements OnInit {

  constructor(public assetService: AssetDefinitionService,
    private router:Router) { }

  ngOnInit(): void {
    this.assetService.getAllAssets();
  }

  
  }


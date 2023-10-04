import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssetcreationService } from 'src/app/shared/services/assetcreation.service';

@Component({
  selector: 'app-assetcreation-edit',
  templateUrl: './assetcreation-edit.component.html',
  styleUrls: ['./assetcreation-edit.component.scss']
})
export class AssetcreationEditComponent implements OnInit {

  constructor(public assetcreationservice: AssetcreationService,private router:Router) { }

  ngOnInit(): void {
  }

}

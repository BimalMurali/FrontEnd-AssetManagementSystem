import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {VendorsService} from 'src/app/shared/services/vendors.service';


@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {

  constructor(public vendorService: VendorsService,private router:Router) { }

  

  ngOnInit(): void {
    console.log(this.vendorService.getAllVendors());
    this.vendorService.getAllVendors();
  }

}

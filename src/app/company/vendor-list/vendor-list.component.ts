import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorsService } from 'src/app/shared/services/vendors.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit {

  constructor(public vendorService: VendorsService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.vendorService.getAllVendors());
    this.vendorService.getAllVendors();
  }

}

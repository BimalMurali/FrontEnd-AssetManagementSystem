import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendors } from 'src/app/shared/models/vendors';
import { VendordetailsService } from 'src/app/shared/services/vendordetails.service'
@Component({
  selector: 'app-vendorlist',
  templateUrl: './vendorlist.component.html',
  styleUrls: ['./vendorlist.component.scss']
})
export class VendorlistComponent implements OnInit {

  constructor(public vendordetailsService: VendordetailsService,
    private router: Router) { }

  ngOnInit(): void {
    console.log(this.vendordetailsService.getAllVendors());
    this.vendordetailsService.getAllVendors();
  }
  //udate an vendor
  updateVendor(vendors: Vendors){
    console.log(vendors);
    console.log(vendors.validFrom);
    console.log(vendors.validTo);

    this.populateVendorData(vendors)
    this.router.navigate(['vendordetails/edit',vendors.id])
    // local host:4200/employees/edit/id
  }
  //getting vendor data
  populateVendorData(vendors: Vendors){
    console.log(vendors.validFrom+"in list");
    this.vendordetailsService.formVendorData=Object.assign({},vendors);
  }

}

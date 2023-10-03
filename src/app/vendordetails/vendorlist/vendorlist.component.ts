import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

}

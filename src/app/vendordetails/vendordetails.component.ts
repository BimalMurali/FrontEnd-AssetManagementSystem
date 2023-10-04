import { Component, OnInit } from '@angular/core';
import { VendordetailsService } from '../shared/services/vendordetails.service';

@Component({
  selector: 'app-vendordetails',
  templateUrl: './vendordetails.component.html',
  styleUrls: ['./vendordetails.component.scss']
})
export class VendordetailsComponent implements OnInit {

  constructor(private vendordetailservice:VendordetailsService) { }

  ngOnInit(): void {
  }

  logOut(){
    console.log("Log out");
    this.vendordetailservice.logOut();
  }
}

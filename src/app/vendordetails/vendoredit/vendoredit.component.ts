import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { VendordetailsService } from 'src/app/shared/services/vendordetails.service';

@Component({
  selector: 'app-vendoredit',
  templateUrl: './vendoredit.component.html',
  styleUrls: ['./vendoredit.component.scss']
})
export class VendoreditComponent implements OnInit {

  constructor(public vendordetailsService: VendordetailsService,
    private router: Router) { }

  ngOnInit(): void {
    this.vendordetailsService.getAllVendors();
    this.vendordetailsService.getAllVendors();
  }
  //insert

  //update
  updateVendor(form: NgForm){
    console.log("Editing...");
    this.vendordetailsService.updateVendor(form.value)
    .subscribe(
      (response)=>{
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    )

}
//submit form
onSubmit(form?: NgForm){
  console.log(form.value);
  this.updateVendor(form);
  form.reset();
this.router.navigateByUrl('vendordetails/list');
}
}

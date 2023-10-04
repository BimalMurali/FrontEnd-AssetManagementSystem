import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { VendordetailsService } from 'src/app/shared/services/vendordetails.service';

@Component({
  selector: 'app-vendoradd',
  templateUrl: './vendoradd.component.html',
  styleUrls: ['./vendoradd.component.scss']
})
export class VendoraddComponent implements OnInit {

  constructor(public vendordetailsService: VendordetailsService,
    private router: Router) { }

  ngOnInit(): void {
    this.vendordetailsService.getAllVendors();
    this.vendordetailsService.getAllAssetsDef();

  }
  // Insert
  addVendordetails(form:NgForm){
    console.log("Inserting");
    this.vendordetailsService.insertVendordetails(form.value).subscribe(
      (response )=>{
        console.log(response)
      },
      (error)=>{
        console.log(error)
      }
    )

  }
  // submit form
  onSubmit(form : NgForm){
    console.log(form.value)
    // insert
    this.addVendordetails(form)

    //reset
    form.reset();
    this.router.navigateByUrl("/vendordetails/list")

}

}

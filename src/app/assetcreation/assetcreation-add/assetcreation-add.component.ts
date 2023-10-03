import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AssetcreationService } from 'src/app/shared/services/assetcreation.service';

@Component({
  selector: 'app-assetcreation-add',
  templateUrl: './assetcreation-add.component.html',
  styleUrls: ['./assetcreation-add.component.scss']
})
export class AssetcreationAddComponent implements OnInit {

  constructor(public assetcreationservice: AssetcreationService, private router:Router) { }

  ngOnInit(): void {
    this.assetcreationservice.getAllVendors();
    this.assetcreationservice.getAllAssetsDef();
  }
  // Insert
  addAssetCreation(form:NgForm){
    console.log("Inserting");
    this.assetcreationservice.insertAssetCreation(form.value).subscribe(
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
    this.addAssetCreation(form)

    //reset
    form.reset();
    this.router.navigateByUrl("/assetcreation/list")

}
}

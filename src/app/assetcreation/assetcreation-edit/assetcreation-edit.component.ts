import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Assetcreation } from 'src/app/shared/models/assetcreation';
import { AssetcreationService } from 'src/app/shared/services/assetcreation.service';

@Component({
  selector: 'app-assetcreation-edit',
  templateUrl: './assetcreation-edit.component.html',
  styleUrls: ['./assetcreation-edit.component.scss']
})
export class AssetcreationEditComponent implements OnInit {

  constructor(public assetcreationservice: AssetcreationService,private router:Router) { }

  ngOnInit(): void {
    this.assetcreationservice.getAllVendors();
    this.assetcreationservice.getAllAssetsDef();
  }

   // Update
  editAssetCreation(form:NgForm){
    console.log("Editing..");
    this.assetcreationservice.updateAssetCreation(form.value).subscribe(
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
    this.editAssetCreation(form)

    //reset
    form.reset();
    this.router.navigateByUrl("/assetcreation/list")

  }


}


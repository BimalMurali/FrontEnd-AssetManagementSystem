import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AssetDefinitionService } from 'src/app/shared/services/asset-definition.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-addassets',
  templateUrl: './addassets.component.html',
  styleUrls: ['./addassets.component.scss']
})
export class AddassetsComponent implements OnInit {

  constructor(public assetService: AssetDefinitionService,
    private router:Router) { }

    private assetDefinitionDataSubscription: Subscription;

  ngOnInit(): void {
  this.assetService.getAllAssets();
  this.assetService.getAllAssetType();
  }

  // Insert
  addAssetDefinition(form:NgForm){
    console.log("Inserting");
    this.assetService.insertAsset(form.value).subscribe(
      (response)=>{
        console.log(response +"hiiii")
      },
      (error)=>{
        console.log(error)
      }
    )

  }

  // submit form
  onSubmit(form : NgForm){
    console.log("hii")
    console.log(form.value)
    console.log("hello")
    // insert
    this.addAssetDefinition(form)

    //reset
    form.reset();
    this.router.navigateByUrl("/assetdefinition/list")
    this.assetDefinitionDataSubscription.unsubscribe();

}
}

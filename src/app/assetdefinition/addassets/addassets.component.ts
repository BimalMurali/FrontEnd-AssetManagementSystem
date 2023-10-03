import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AssetDefinitionService } from 'src/app/shared/services/asset-definition.service';

@Component({
  selector: 'app-addassets',
  templateUrl: './addassets.component.html',
  styleUrls: ['./addassets.component.scss']
})
export class AddassetsComponent implements OnInit {

  constructor(public assetService: AssetDefinitionService,
    private router:Router) { }

  ngOnInit(): void {
  this.assetService.getAllAssets();
  }

  // Insert
  addAssetDefinition(form:NgForm){
    console.log("Inserting");
    this.assetService.insertAsset(form.value).subscribe(
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
    this.addAssetDefinition(form)

    //reset
    form.reset();
    this.router.navigateByUrl("/assetdefinition/list")

}
}

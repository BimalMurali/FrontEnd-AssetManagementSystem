import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AssetDefinitionService } from 'src/app/shared/services/asset-definition.service';

@Component({
  selector: 'app-updateassets',
  templateUrl: './updateassets.component.html',
  styleUrls: ['./updateassets.component.scss']
})
export class UpdateassetsComponent implements OnInit {

  constructor(public assetService: AssetDefinitionService,
    private router:Router ) { }

  ngOnInit(): void {
    this.assetService.getAllAssets();
    this.assetService.getAllAssetType();
  }

  //update
  editAssetDefinition(form:NgForm){
    console.log("Editing..");
    this.assetService.updateAssetDefinition(form.value).subscribe(
      (response)=>{
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
    this.editAssetDefinition(form)

    //reset
    form.reset();
    this.router.navigateByUrl("/assetdefinition/list")

  }

}

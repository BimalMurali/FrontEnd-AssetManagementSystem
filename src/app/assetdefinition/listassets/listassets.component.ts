import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Assetdefinition } from 'src/app/shared/models/assetdefinition';
import { AssetDefinitionService } from 'src/app/shared/services/asset-definition.service';


@Component({
  selector: 'app-listassets',
  templateUrl: './listassets.component.html',
  styleUrls: ['./listassets.component.scss']
})
export class ListassetsComponent implements OnInit {

  searchTerm='';
  page:number=1;
  pageSize=5;

  constructor(public assetService: AssetDefinitionService,
    private router:Router) { }

  ngOnInit(): void {
    this.assetService.getAllAssets();
  }

  
  

  // update an asset creation
  updateAssetDefinition(assetdefinition:Assetdefinition){
    console.log(assetdefinition)
    console.log(this.populatedEmployeeData(assetdefinition))
    this.router.navigate(['assetdefinition/edit',assetdefinition.id])
    // Localhost:4200/employees/id

  }

   // Getting employee data
   populatedEmployeeData(assetdefinition:Assetdefinition){
    this.assetService.formAssetDefinitionData=Object.assign({},assetdefinition);
  }

  //delete
  disableAsset(_id:number){
    if(confirm("Do you want to delete this record?")){
      this.assetService.disableAsset(_id)
      .subscribe(
        (response)=>{
          console.log(response);
          this.assetService.getAllAssets();
        },
        (error)=>{
          console.log(error);
        }
      )
    }
  }

  
  }


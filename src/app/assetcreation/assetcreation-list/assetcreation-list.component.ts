import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Assetcreation } from 'src/app/shared/models/assetcreation';
import { AssetcreationService } from 'src/app/shared/services/assetcreation.service';

@Component({
  selector: 'app-assetcreation-list',
  templateUrl: './assetcreation-list.component.html',
  styleUrls: ['./assetcreation-list.component.scss']
})
export class AssetcreationListComponent implements OnInit {

  searchTerm=' ';
  page:number=1;
  pageSize:number=5;
  constructor(public assetcreationservice: AssetcreationService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.assetcreationservice.getAllAssetDefinitions());
    this.assetcreationservice.getAllAssetDefinitions();
    this.assetcreationservice.getAllVendors();
  }
  
  // update an asset creation
  updateAssetCreation(assetcreation:Assetcreation){
    console.log(assetcreation)
    console.log(this.populatedEmployeeData(assetcreation))
    this.router.navigate(['assetcreation/edit',assetcreation.id])
    // Localhost:4200/employees/id

  }

   // Getting employee data
   populatedEmployeeData(assetcreation:Assetcreation){
    this.assetcreationservice.formAssetCreationData=Object.assign({},assetcreation);
  }

  disableOrder(_id:number){
    if(confirm("Do you want to delete this record?")){
      this.assetcreationservice.disableOrder(_id)
      .subscribe(
        (response)=>{
          console.log(response);
          this.assetcreationservice.getAllAssetDefinitions();
        },
        (error)=>{
        console.log(error);
        // this.router.navigate(["/assetcreation/list"]);
      }
      )
    
    }
  
  }
}







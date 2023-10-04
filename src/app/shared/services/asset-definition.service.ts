import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Assettype } from '../models/assettype';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Assetdefinition } from '../models/assetdefinition';

@Injectable({
  providedIn: 'root'
})
export class AssetDefinitionService {

  //declare variables--global variable
  // formEmployeeData: Asset=new Asset();

  //list of employees
  assets: Assetdefinition[];

  // form
  formAssetDefinitionData:Assetdefinition=new Assetdefinition();

  //list of departments
  assetTypes:Assettype[];

  constructor(private httpClient: HttpClient) { } // DI -CI
  //http://localhost:9091/api/employees
  //1 Get all Employees - promises
  getAllAssets(): void{

    //getting the data
    this.httpClient.get(environment.apiUrl +'/api/assets')
    .toPromise()
    .then(response=>{
      console.log(response);
      this.assets=response as Assetdefinition[];
    },
    error=>{
      console.log('Error')
    });
  }

  //2 Get all Employees - Observable Types
  // getAllEmployeesList(): Observable<any>{
  //   return this.httpClient.get(environment.apiUrl +'/api/assets');
  // }
 
  getAllAssetType(): void{

    //getting the data
    this.httpClient.get(environment.apiUrl +'/api/assettypeid')
    .toPromise()
    .then(response=>{
      console.log("testing")
      console.log(response);
      this.assetTypes=response as Assettype[];
    },
    error=>{
      console.log('Error')
    });
  }

  insertAsset(assets: Assetdefinition): Observable<any>{
    console.log(assets.assetTypeId);
    console.log(assets.assetName);
    return this.httpClient.post(environment.apiUrl +'/api/assets',assets);
  }
}

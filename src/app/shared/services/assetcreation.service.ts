import { Injectable } from '@angular/core';
import { Assetcreation } from '../models/assetcreation';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AssetcreationService {
  // list of assetcreations
  assetdefinitions:Assetcreation[];

  // form
  formAssetCreationData:Assetcreation=new Assetcreation();



  constructor(private httpClient: HttpClient) { }

  //1 Get all vendors - promises 
//http://localhost:9091/api/assetcreation  
getAllAssetDefinitions(): void {
  this.httpClient.get(environment.apiUrl + '/api/assetcreation')
  .toPromise()
  .then(response =>{
    console.log(response);
    this.assetdefinitions=response as Assetcreation[];
  },
  error=>{
    console.log(error);
  });
}

//2 Get all employees - Observable Types
getAllAssetDefinitionList(): Observable<any>{
  return this.httpClient.get(environment.apiUrl + '/api/assetcreation')
}

// insert
insertAssetCreation(assetcreation:Assetcreation):Observable<any>{
  return this.httpClient.post(environment.apiUrl + '/api/assetcreation',assetcreation)
}


}

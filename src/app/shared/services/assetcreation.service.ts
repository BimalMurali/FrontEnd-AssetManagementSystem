import { Injectable } from '@angular/core';
import { Assetcreation } from '../models/assetcreation';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssetcreationService {
  // list of assetcreations
  assetdefinitions:Assetcreation[];

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
}

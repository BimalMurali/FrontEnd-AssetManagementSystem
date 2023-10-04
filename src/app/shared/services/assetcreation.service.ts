import { Injectable } from '@angular/core';
import { Assetcreation } from '../models/assetcreation';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Vendors } from '../models/vendors';
import { Assetdefinition } from '../models/assetdefinition';
import { Purchaseorder } from '../models/purchaseorder';


@Injectable({
  providedIn: 'root'
})
export class AssetcreationService {
  // list of assetcreations
  assetdefinitions:Assetcreation[];

 

  // form
  formAssetCreationData:Assetcreation=new Assetcreation();


  // list of vendors
  vendors:Vendors[];

  // list of asset definitions
  assetdefinition:Assetdefinition[];



  constructor(private httpClient: HttpClient) { }

  //1 Get all vendors - promises 
//http://localhost:9091/api/assetcreation  
getAllAssetDefinitions(): void {
  this.httpClient.get(environment.apiUrl + '/api/assetcreation')
  .toPromise()
  .then(response =>{
    // console.log(response);
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

// update assset creation
updateAssetCreation(assetcreation:Assetcreation):Observable<any>{
  return this.httpClient.put(environment.apiUrl + '/api/assetcreation',assetcreation)
}

// update order status and delivery date
// updateStatus(order:Purchaseorder):Observable<any>{
//   return this.httpClient.put(environment.apiUrl + '/api/purchaseorders',order)
// }


// get all vendors
// http://localhost:9091/api/vendors
getAllVendors(): void {
  this.httpClient.get(environment.apiUrl + '/api/vendors')
  .toPromise()
  .then(response =>{
    // console.log(response);
    this.vendors=response as Vendors[];
  },
  error=>{
    console.log(error);
  });
}

// get all asset definitions
// http://localhost:9091/api/assettype
getAllAssetsDef(): void {
  this.httpClient.get(environment.apiUrl + '/api/assets')
  .toPromise()
  .then(response =>{
    // console.log(response);
    this.assetdefinition=response as Assetdefinition[];
  },
  error=>{
    console.log(error);
  });
}

// updatePurchaseOrders(purchaseorder:Purchaseorder):Observable<any>{
//   return this.httpClient.put(environment.apiUrl+'/api/purchaseorders',purchaseorder);
// }



}

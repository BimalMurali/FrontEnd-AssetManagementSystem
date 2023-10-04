import { Injectable } from '@angular/core';
import { Purchaseorder } from '../models/purchaseorder';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { Vendors } from '../models/vendors';
import { Assetdefinition } from '../models/assetdefinition';

import { Status } from '../models/status';


@Injectable({
  providedIn: 'root'
})
export class PurchaseordersService {

  formPurchaseOrderData: Purchaseorder = new Purchaseorder;

  order: Purchaseorder[]

  // list of vendors
  vendors: Vendors[];

  // list of asset definitions
  assetdefinition:Assetdefinition[];

  //list of statuses
  status:Status[];


  constructor(private httpClient: HttpClient) { }

  getAllStatus():void{
    this.httpClient.get(environment.apiUrl + '/api/status')
      .toPromise()
      .then(response => {
        console.log(response);
        this.status = response as Status[];
      },
        error => {
          console.log(error);
        });
  }

  getAllOrder(): void {
    this.httpClient.get(environment.apiUrl + '/api/purchaseorders')
      .toPromise()
      .then(response => {
        console.log("hi")
        console.log(response);
        this.order = response as Purchaseorder[];

      },
        error => {
          console.log(error);
        });
  }
  getAllAssetsDef(): void {
    this.httpClient.get(environment.apiUrl + '/api/assettype')
    .toPromise()
    .then(response =>{
      console.log(response);
      this.assetdefinition=response as Assetdefinition[];
    },
    error=>{
      console.log(error);
    });
  }
  

  getAllVendors(): void {
    this.httpClient.get(environment.apiUrl + '/api/vendors')
    .toPromise()
    .then(response =>{
      console.log(response);
      this.vendors=response as Vendors[];
    },
    error=>{
      console.log(error);
    });
  }



  insertPurchaseOrder(purchaseorder: Purchaseorder): Observable<any> {
    purchaseorder.statusId=1
    return this.httpClient.post(environment.apiUrl + '/api/purchaseorders', purchaseorder)
  }

  updatePurchaseOrder(purchaseorder:Purchaseorder):Observable<any>{
    return this.httpClient.put(environment.apiUrl+'/api/purchaseorders',purchaseorder);
  }

  disableOrder(id:number){
    return this.httpClient.get(environment.apiUrl+'/api/purchaseorders/'+id);
  }

}

import { Injectable } from '@angular/core';
import { Purchaseorder } from '../models/purchaseorder';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class PurchaseordersService {

  formPurchaseOrderData:Purchaseorder=new Purchaseorder;

  order:Purchaseorder[]

  constructor(private httpClient:HttpClient) { }

  getAllOrder():void{
    this.httpClient.get(environment.apiUrl + '/api/purchaseorders')
    .toPromise()
    .then(response =>{
      console.log(response);
      this.order=response as Purchaseorder[];
    },
    error=>{
      console.log(error);
    });
  }

  insertPurchaseOrder(purchaseorder:Purchaseorder):Observable<any>{
    return this.httpClient.post(environment.apiUrl+'/api/purchaseorders',purchaseorder)
  }
}

import { Injectable } from '@angular/core';
import { Purchaseorder } from '../models/purchaseorder';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  // list all products
  products:Purchaseorder[];


  constructor(private httpClient: HttpClient) { }

  // http://localhost:9091/api/purchaseorders
  getAllProducts(): void{
    this.httpClient.get(environment.apiUrl + '/api/purchaseorders')
      .toPromise()
      .then(response =>{
        console.log(response);
        this.products=response as Purchaseorder[];
      },
      error=>{
        console.log(error);
      });
    }
}

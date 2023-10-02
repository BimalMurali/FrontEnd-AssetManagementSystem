import { Injectable } from '@angular/core';
import { Vendors } from '../models/vendors';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendorsService {
    //list of Vendors
    vendors : Vendors[];

  constructor(private httpClient: HttpClient) { }

   //1 Get all vendors - promises 
//http://localhost:9091/api/vendors    
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
}

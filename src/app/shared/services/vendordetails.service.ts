import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Vendors } from '../models/vendors';
import { Observable } from 'rxjs';
import { Assetdefinition } from '../models/assetdefinition';
import { Assettype } from '../models/assettype';


@Injectable({
  providedIn: 'root'
})
export class VendordetailsService {

  // list of asset definitions
  //assetdefinition: Assetdefinition[];

  assettype: Assettype[];
  //form
  formVendorData: Vendors = new Vendors();

  //list all vendors
  vendors: Vendors[];


  //dependency injection --- Constructor
  constructor(private httpClient: HttpClient) { }

  getAllVendors(): void {
    this.httpClient.get(environment.apiUrl + '/api/vendors')
      .toPromise()
      .then(response => {
        console.log(response);
        this.vendors = response as Vendors[];
        console.log(this.vendors);
      },
        error => {
          console.log(error);
        });
  }
  getAllAssetsDef(): void {
    this.httpClient.get(environment.apiUrl + '/api/assets')
      .toPromise()
      .then(response => {
        console.log(response);
        this.assettype = response as Assettype[];
      },
        error => {
          console.log(error);
        });
  }
  // insert
  insertVendordetails(vendors: Vendors): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/api/vendors', vendors)
  }
  //update vendor details
  updateVendor(vendors: Vendors): Observable<any> {
    console.log("hiii reached ")
    console.log(vendors);
    console.log(vendors.type);
    return this.httpClient.put(environment.apiUrl + '/api/vendors', vendors);
  }
}


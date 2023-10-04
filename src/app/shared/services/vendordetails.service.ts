import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Vendors } from '../models/vendors';
import { Observable } from 'rxjs';
import { Assetdefinition } from '../models/assetdefinition';


@Injectable({
  providedIn: 'root'
})
export class VendordetailsService {

  // list of asset definitions
  assetdefinition: Assetdefinition[];
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
        this.assetdefinition = response as Assetdefinition[];
      },
        error => {
          console.log(error);
        });
  }
  // insert
  insertVendordetails(vendors: Vendors): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/api/vendordetails', vendors)
  }
  //update vendor details
  updateVendor(vendors: Vendors): Observable<any> {
    return this.httpClient.put(environment.apiUrl + '/api/vendordetails', vendors);
  }
}


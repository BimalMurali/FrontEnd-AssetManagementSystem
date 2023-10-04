import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Vendors } from '../models/vendors';
import { Observable } from 'rxjs';
import { Assetdefinition } from '../models/assetdefinition';
import { Assettype } from '../models/assettype';
import { Router } from '@angular/router';


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
  constructor(private httpClient: HttpClient,private router:Router) { }

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
    this.httpClient.get(environment.apiUrl + '/api/assettypeid')
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

  disableOrder(id:number){
    return this.httpClient.get(environment.apiUrl+'/api/vendors/'+id);
  }


  public logOut() {
    //clear all local and session storage keys
    localStorage.removeItem("USER_NAME");
    sessionStorage.removeItem("USER_NAME");
    localStorage.removeItem("ROLE");
    localStorage.removeItem("JWT_UTIL");
  
    this.router.navigate(['home'])
  }
}


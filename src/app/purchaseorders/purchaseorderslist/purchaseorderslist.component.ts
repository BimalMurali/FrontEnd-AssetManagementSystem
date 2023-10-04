import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PurchaseordersService} from '../../shared/services/purchaseorders.service';
import { Purchaseorder } from 'src/app/shared/models/purchaseorder';

@Component({
  selector: 'app-purchaseorderslist',
  templateUrl: './purchaseorderslist.component.html',
  styleUrls: ['./purchaseorderslist.component.scss']
})
export class PurchaseorderslistComponent implements OnInit {

  searchTerm=' ';
  page:number=1;
  pageSize:number=5;
 

  constructor(public purchaseorderservice:PurchaseordersService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.purchaseorderservice.getAllOrder());
    this.purchaseorderservice.getAllStatus();
    this.purchaseorderservice.getAllAssetsDef();
    this.purchaseorderservice.getAllVendors();
  }

  getVendorNameById(vendorId: number): string {
    const vendor = this.purchaseorderservice.vendors.find(vendor => vendor.id === vendorId);
    return vendor ? vendor.vendorName : '';
  }

  getAssetNameById(assetId: number): string {
    const asset = this.purchaseorderservice.assetdefinition.find(asset => asset.id === assetId);
    return asset ? asset.assetName : '';
  }

  getStatusNameById(statusId:number):string{
    const status = this.purchaseorderservice.status.find(status => status.statusId === statusId);
    return status ? status.statusNames : '';
  }

  //update
  editPurchaseOrder(purchaseorder:Purchaseorder){
    console.log(purchaseorder);
    console.log(this.populatedOrdersData(purchaseorder));
    this.router.navigate(['purchaseorders/edit',purchaseorder.id]);

  }

  populatedOrdersData(purchaseorder:Purchaseorder){
    this.purchaseorderservice.formPurchaseOrderData=Object.assign({},purchaseorder)
  }

  disableOrder(_id:number){
    if(confirm("Do you want to delete this record?")){
      this.purchaseorderservice.disableOrder(_id)
      .subscribe(
        (response)=>{
          console.log(response);
          this.purchaseorderservice.getAllOrder();
        },
        (error)=>{
        console.log(error);
      }
      )
    }


    
  }

}

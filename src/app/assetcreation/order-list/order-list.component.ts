import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Purchaseorder } from 'src/app/shared/models/purchaseorder';
import { PurchaseordersService } from 'src/app/shared/services/purchaseorders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

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

  //update
  editPurchaseOrder(purchaseorder:Purchaseorder){
    console.log(purchaseorder);
    console.log(this.populatedOrdersData(purchaseorder));
    this.router.navigate(['assetcreation/orderedit',purchaseorder.id]);

  }

  populatedOrdersData(purchaseorder:Purchaseorder){
    this.purchaseorderservice.formPurchaseOrderData=Object.assign({},purchaseorder)
  }
}

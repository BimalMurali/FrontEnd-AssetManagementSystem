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

  constructor(public purchaseorderservice:PurchaseordersService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.purchaseorderservice.getAllOrder());
    this.purchaseorderservice.getAllStatus();
    this.purchaseorderservice.getAllAssetsDef();
    this.purchaseorderservice.getAllVendors();
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

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PurchaseordersService} from '../../shared/services/purchaseorders.service';

@Component({
  selector: 'app-purchaseorderslist',
  templateUrl: './purchaseorderslist.component.html',
  styleUrls: ['./purchaseorderslist.component.scss']
})
export class PurchaseorderslistComponent implements OnInit {

  constructor(public purchaseorderservice:PurchaseordersService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.purchaseorderservice.getAllOrder());
    this.purchaseorderservice.getAllOrder();
  }

}

import { Component, OnInit } from '@angular/core';
import { PurchaseordersService } from '../shared/services/purchaseorders.service';

@Component({
  selector: 'app-purchaseorders',
  templateUrl: './purchaseorders.component.html',
  styleUrls: ['./purchaseorders.component.scss']
})
export class PurchaseordersComponent implements OnInit {

  constructor(private purchaseorderservice:PurchaseordersService) { }

  ngOnInit(): void {
  }

  logOut(){
    console.log("Log out");
    this.purchaseorderservice.logOut();
  }

}

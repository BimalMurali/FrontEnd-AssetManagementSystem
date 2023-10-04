import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PurchaseordersService } from 'src/app/shared/services/purchaseorders.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.scss']
})
export class OrderEditComponent implements OnInit {

  constructor(public purchaseorderservice:PurchaseordersService,private router:Router) { }

  ngOnInit(): void {
    this.purchaseorderservice.getAllAssetsDef();
    this.purchaseorderservice.getAllVendors();
  }

  editPurchaseOrder(form:NgForm){
    console.log("Editing");
    this.purchaseorderservice.updatePurchaseOrder(form.value).subscribe(
      (response)=>{
        console.log(response)
      },
      (error)=>{
        console.log(error)
      }
    )
  }
  // submit form
  onSubmit(form : NgForm){
    console.log(form.value)
    // insert
    this.editPurchaseOrder(form)

    //reset
    form.reset();
    this.router.navigateByUrl("/assetcreation/orders")

  }

  getStatusById(statusId: number): string {
    const selectedStatus = this.purchaseorderservice.status.find(status => status.statusId ===statusId);
    return selectedStatus ? selectedStatus.statusNames : '';
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PurchaseordersService } from 'src/app/shared/services/purchaseorders.service';

@Component({
  selector: 'app-purchaseordersedit',
  templateUrl: './purchaseordersedit.component.html',
  styleUrls: ['./purchaseordersedit.component.scss']
})
export class PurchaseorderseditComponent implements OnInit {

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
    this.router.navigateByUrl("/purchaseorders/list")

  }

  getStatusById(statusId: number): string {
    const selectedStatus = this.purchaseorderservice.status.find(status => status.statusId ===statusId);
    return selectedStatus ? selectedStatus.statusNames : '';
  }

}

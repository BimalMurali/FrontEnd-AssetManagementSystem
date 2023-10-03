import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PurchaseordersService } from 'src/app/shared/services/purchaseorders.service';

@Component({
  selector: 'app-purchaseordersadd',
  templateUrl: './purchaseordersadd.component.html',
  styleUrls: ['./purchaseordersadd.component.scss']
})
export class PurchaseordersaddComponent implements OnInit {

  constructor(public purchaseorderservice:PurchaseordersService,private router:Router) { }

  ngOnInit(): void {
    this.purchaseorderservice.getAllOrder();
  }

  addOrder(form:NgForm){
    console.log("Inserting");
    this.purchaseorderservice.insertPurchaseOrder(form.value).subscribe(
      (response)=>{
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  
  //Submit
  onSubmit(form:NgForm){
    console.log(form.value);
    this.addOrder(form);
    form.resetForm();
    this.router.navigate(['/purchaseorders/list'])
  }

  }


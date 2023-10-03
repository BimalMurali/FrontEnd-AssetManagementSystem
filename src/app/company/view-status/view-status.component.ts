import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{CompanyService} from 'src/app/shared/services/company.service'

@Component({
  selector: 'app-view-status',
  templateUrl: './view-status.component.html',
  styleUrls: ['./view-status.component.scss']
})
export class ViewStatusComponent implements OnInit {

  constructor(public companyService: CompanyService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.companyService.getAllProducts());
    this.companyService.getAllProducts();

  }

}

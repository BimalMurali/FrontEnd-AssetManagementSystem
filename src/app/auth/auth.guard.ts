import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {ToastrService} from 'ngx-toastr'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,private toastr:ToastrService) { }
  canActivate(
    next: ActivatedRouteSnapshot
    ): boolean {
      //if false, redirect to the login else show the authorized page
      //check role: currentRole  vs expectedRole
      // localStorage                     app.routing.module
      
      const currentRole = localStorage.getItem("ROLE")
      const expectedRole = next.data.role;
  
      //check condition
      if (currentRole !== expectedRole) {
        this.toastr.error("<div class='error-message'>Unauthorized Access!!!</div>", "", {
          enableHtml: true,
        });
        localStorage.removeItem("USER_NAME");
        sessionStorage.removeItem("USER_NAME");
        localStorage.removeItem("ROLE");
        localStorage.removeItem("JWT_UTIL");
        this.router.navigate(['home'])
        return false;
      }
  
      return true;
    }
  
  }

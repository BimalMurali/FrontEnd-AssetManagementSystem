import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/users'
import { AuthService } from 'src/app/shared/services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //declare variables
  loginForm!: FormGroup;
  isSubmitted: boolean = false;
  error: String = '';

  loginUser?: User = new User()

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  //Life Cycle Hook
  ngOnInit(): void {

    //Create a Reactive Form
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

  }
  //get controls for validation
  get formControls() {
    return this.loginForm.controls;
  }

  //Functionality
  loginCredentials():void{
    //Setting Value to isSubmitted
    this.isSubmitted=true;

    //Checking form is Valid
    if(this.loginForm.invalid){
      this.error="Please enter username and Password"
      return;
    }

    //form is valid
    else{
      console.log("Form is valid");
    //Call service for login
    this.authService.loginVerify(this.loginForm.value)
    .subscribe(response =>{
      console.log(response);

      if(response==null){
        this.error="Invalid response"
      }
      else if(response.data.role===3){
        this.router.navigate(["/assetcreation"]);}
        else if(response.data.role===3){
          this.router.navigate(["/assetdefinition"]);

        }
      
      // //Session storage
      // sessionStorage.setItem("USER_NAME",response.data.Username);
      
      // //Local storage
      // localStorage.setItem("TOKEN",response.data.ACCESSTOKEN);
    
    
    else if(response.data.role===2){
      this.router.navigate(["/vendors/home"]);
      
      //Session storage
      sessionStorage.setItem("USER_NAME",response.data.Username);
      
      //Local storage
      localStorage.setItem("TOKEN",response.data.ACCESSTOKEN);
    }
  })
    }


  }
}

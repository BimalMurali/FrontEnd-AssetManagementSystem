import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/users';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // declare variables
  loginForm!:FormGroup;
  isSubmitted:boolean=false;
  error:string =''

  loginUser?:User=new User();

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router : Router) { }

    // Life Cycle Hook
  ngOnInit(): void {
    // create a Reactive form 
    this.loginForm=this.formBuilder.group({
      userName: ['',[Validators.required]],
      password:['',[Validators.required]]
    });
  }

  // get controls for validation
  get formControls(){
    return this.loginForm.controls;
  }

  //Functionalites
  loginCredentials():void {
    // setting value to isSubmitted
    this.isSubmitted=true;

  // checking form is valid
  if(this.loginForm.invalid){
    this.error="please enter your name and password"
    return;
  }

  // form is valid
  if(this.loginForm.valid){
    console.log(this.loginForm.value)

    // checking login functionality
    this.authService.loginverify(this.loginForm.value)
    .subscribe((response)=>{

      console.log(response)
      if(response==null){
        this.error="Invalid Username and password";
      }
      if(response.data.role ===1){
        console.log(response.data.role);
        this.router.navigate(["/shared/home"])

        // session storage
        sessionStorage.setItem("USER_NAME",response.data.UserName)

        // local storage
        localStorage.setItem("TOKEN",response.data.ACCESSTOKEN)

        console.log(sessionStorage.getItem("USER_NAME"))
      }
    })
  }
  }

}
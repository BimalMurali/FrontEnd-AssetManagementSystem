import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/users';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  // Verify login userName and Password
  public loginVerify(user:User){
    // call the webAPI for checking username and password
    return this.httpClient.get<User>(environment.apiUrl+'/api/users/'+user.userName+'/'+user.password)
  }
 
}

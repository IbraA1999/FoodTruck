import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RegisterUser } from '../models/user/register-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpClient:HttpClient = inject(HttpClient)
  constructor() { }

  baseUrl:string = '';

  register(registerForm:RegisterUser){
    return this.httpClient.post(this.baseUrl + 'user/register', registerForm)
  }
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user/show-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  httpClient: HttpClient = inject(HttpClient);

  baseUrl: string = '';

  constructor() { }

  GetAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl + 'get/users');
  }
}

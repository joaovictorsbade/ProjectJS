import { Injectable } from '@angular/core';
import {User} from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<User>{
    return this.http.post<User>(this.apiUrl+'/user/new-user', user);

  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl+'/user/all-users');
  }

}

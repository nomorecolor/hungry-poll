import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from './../../../environments/environment';
import { User } from './user.type';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(user: User): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}User`, user);
  }
}

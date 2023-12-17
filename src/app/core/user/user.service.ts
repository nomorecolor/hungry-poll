import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from './user.type';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUser(): Observable<User> {
    return of({
      name: 'Faith Elemia',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    });
  }
}

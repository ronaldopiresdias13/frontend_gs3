import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  login(userForm: string,) {
    return this.http.post(`${this.apiUrl}/login`, userForm)
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
      }));
  }

  getAll(){
    return this.http.get(`${this.apiUrl}/users`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  login(userForm: string):Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, userForm)
  }

  getAll(){
    return this.http.get(`${this.apiUrl}/users`);
  }

  getUserById(id: any) {
    return this.http.get(`${this.apiUrl}/users/${id}`);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/users/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/users/${id}`);
  }

  create(formulario: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/users`, formulario);
  }
}

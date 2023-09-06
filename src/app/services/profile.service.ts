import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  create(formulario: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/profiles`, formulario);
  }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/profiles`);
  }
  getProfileById(id: any) {
    return this.http.get(`${this.apiUrl}/profiles/${id}`);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/profiles/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/profiles/${id}`);
  }
}

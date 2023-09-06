import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  create(formulario: string,) {
    return this.http.post(`${this.apiUrl}/profiles`, formulario);
  }

  getAll(){
    return this.http.get(`${this.apiUrl}/profiles`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'any',
})
export class ApiService {
  apiurl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  getAllUser() {
    return this.http.get(`${this.apiurl}`);
  }
}

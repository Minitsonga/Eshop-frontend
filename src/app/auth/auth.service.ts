import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = '/api/auth';

  constructor(private http: HttpClient) {}

  login(credentials: { usernameOrEmail: string; password: string }): Observable<any> {
    return this.http.post(`${this.authUrl}/login`, credentials);
  }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.authUrl}/signup`, userData);
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}

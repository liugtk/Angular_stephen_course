import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  rootUrl: string = "https:///api.angular-email.com"
  constructor(private http: HttpClient) { }

  usernameAvailable(username: string) {
    return this.http.post<{ available: boolean }>(this.rootUrl + '/auth/username', {
      username: username
    });
  }

  signup(credentials: { username: string, password: string, confirmPassword: string }) {
    return this.http.post<{ username: string }>(`${this.rootUrl}/auth/signup`,
      {
        username: credentials.username,
        password: credentials.password,
        passwordConfirmation: credentials.confirmPassword
      })
  }
}


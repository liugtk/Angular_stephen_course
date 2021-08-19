import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  rootUrl: string = "https:///api.angular-email.com"
  signedin$ = new BehaviorSubject(false)
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
      }).pipe(
        tap(() => {
          this.signedin$.next(true);
        })
      )
  }

  checkAuth() {
    return this.http.get<{ username: string }>(`${this.rootUrl}/auth/signedin`).pipe(
      tap(() => {
        this.signedin$.next(true);
      })
    )
  }


}


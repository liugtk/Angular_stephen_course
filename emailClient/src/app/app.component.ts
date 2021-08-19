import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  signedin$: BehaviorSubject<boolean>
  constructor(private authService: AuthService) {
    this.signedin$ = authService.signedin$
  }

  ngOnInit() {
    this.authService.checkAuth().subscribe() // we just need to subscribe, because auth is updated directly by auth service
  }

}

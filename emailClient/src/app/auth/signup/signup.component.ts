import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatchPassword } from '../validator/match-password';
import { UniqueUserName } from '../validator/unique-user-name';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  authForm = new FormGroup({
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/)
    ], [this.uniqueUsername.validate]),
    password: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    confirmPassword: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(20)])
  },
    { validators: [this.matchPassword.validate] }
  )

  constructor(private matchPassword: MatchPassword, private uniqueUsername: UniqueUserName, private authService: AuthService) { }

  ngOnInit(): void {
  }

  getFormControl(label: string) {
    return this.authForm.get(label) as FormControl
  }
  showPasswordDonMatch() {
    this.authForm.get("password")?.touched && this.authForm.get("confirmPassword")?.touched && this.authForm.errors
  }
  onSubmit() {
    if (this.authForm.invalid) {
      return;
    }
    console.log(this.authForm.value)
    this.authService.signup(this.authForm.value).subscribe({
      next: (res) => {
        // if success
        console.log(this)
      },
      error: (err) => { // use arrow func to have the this
        console.log("In err", err)
        this.authForm.setErrors({ noConnection: true })
      }
    })

  }

}

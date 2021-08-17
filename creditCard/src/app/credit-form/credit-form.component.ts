import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateFromControl } from '../date-from-control';
@Component({
  selector: 'app-credit-form',
  templateUrl: './credit-form.component.html',
  styleUrls: ['./credit-form.component.css']
})
export class CreditFormComponent implements OnInit {
  cardForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16)
    ]),
    expiration: new DateFromControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}/)
    ]),
    securityCode: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3)
    ])
  })
  constructor() { }

  getNameForm(label: string) {
    return this.cardForm.get(label) as FormControl
  }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log("submit", this.cardForm.value)
  }
  onResetClick() {
    this.cardForm.reset()
  }
}

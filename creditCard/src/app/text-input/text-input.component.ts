import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {
  @Input() control: FormControl = new FormControl("");
  @Input() label: string = "";
  constructor() { }

  ngOnInit(): void {
  }
  showError() {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }

}

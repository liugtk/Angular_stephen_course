import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = "";
  includeLetters = true;
  includeNumbers = true;
  includeSymbols = false;
  canGenerate = true;
  length = 8;

  onButtonClick() {

    const numberPool = "1023456";
    const letterPool = "abdslkdf";
    const symbolPool = "@_";
    let validChar = "";
    if (this.includeNumbers) {
      validChar += numberPool;
    }
    if (this.includeLetters) {
      validChar += letterPool;
    }
    if (this.includeSymbols) {
      validChar += symbolPool;
    }
    let generatedPassword = "";
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChar.length);
      generatedPassword += validChar[index]
    }
    console.log("click")
    console.log(this.length, this.includeLetters, this.includeNumbers, this.includeSymbols, generatedPassword)
    this.password = generatedPassword
  }

  onChangeLength(value: string) {
    const parsedValue = parseInt(value)
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
    else {
      this.length = 0;
    }
    this.canGeneratePasswordCheck();
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters
    this.canGeneratePasswordCheck();
    //console.log(this.includeLetters)
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers
    this.canGeneratePasswordCheck();
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols
    this.canGeneratePasswordCheck();
  }

  getPassword() {

    return this.password
  }

  canGeneratePasswordCheck() {
    let can = false;
    let atLeastOnePoolInclude = false;
    if (this.includeLetters || this.includeNumbers || this.includeSymbols) {
      atLeastOnePoolInclude = true
    }
    if (this.length > 0 && atLeastOnePoolInclude) {
      can = true;
    }
    console.log(can)
    if (can) {
      this.canGenerate = true;
    }
    else {
      this.canGenerate = false;
    }
  }
}

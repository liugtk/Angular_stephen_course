import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "";
  date: string = "2021-08-11";
  amount: number = 0;
  car = {
    make: "TOYOTA",
    model: "abc",
    wheels: 4,
    year: 2000,
    good: true
  }
  miles: number = 100;
  onNameChange(value: string) {
    this.name = value;
  }
  onDateChange(value: string) {
    this.date = value
  }
  onAmountChange(value: string) {
    const extractAmount = parseInt(value)
    if (extractAmount != NaN) {
      this.amount = extractAmount;
    } else {
      this.amount = 0;
    }

  }
  onMilesChange(value: string) {
    const extractMiles = parseInt(value)
    if (extractMiles != NaN) {
      this.miles = extractMiles;
    } else {
      this.miles = 0;
    }

  }

  title = 'pipes';
}

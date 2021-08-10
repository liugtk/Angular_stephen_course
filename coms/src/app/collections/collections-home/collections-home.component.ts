import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: "James", age: 24, job: "designer", employed: true },
    { name: "Jill", age: 26, job: "Engineer", employed: true },
    { name: "Elyse", age: 35, job: "Engineer", employed: false }
  ]
  header = [
    { key: "employed", label: "Working" },
    { key: "name", label: "Name" },
    { key: 'age', label: "Age" },
    { key: 'job', label: "Job" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 22, label: "# of Users" },
    { value: 900, label: "Revenue" },
    { value: 50, label: "reviews" }
  ]
  items = [
    { image: "/assets/couch.jpeg", title: "Couch", description: "This is a comfortable couch" },
    { image: "/assets/dresser.jpeg", title: "dresser", description: "This is a beautiful dress" }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

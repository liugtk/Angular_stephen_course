import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cards';
  posts = [{
    title: 'Neat Tree',
    imageUrl: 'assets/tree.jpeg',
    username: 'nature',
    content: 'I saw that tree'
  },
  {
    title: 'Mountain',
    imageUrl: 'assets/mountain.jpeg',
    username: 'nature',
    content: 'I saw that Mountain'
  },
  {
    title: 'biking',
    imageUrl: 'assets/biking.jpeg',
    username: 'bikeLover',
    content: 'I love biking '
  },
  {
    title: 'biking',
    imageUrl: 'assets/biking.jpeg',
    username: 'bikeLover',
    content: 'I love biking '
  }
  ]
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Juan';
  age = 27;
  img = 'https://source.unsplash.com/random';
  btnDisabled = true;
  person = {
    name: 'Juan',
    age: 27,
    avatar: 'https://source.unsplash.com/random'
  }
}

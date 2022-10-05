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
  };
  emojis = [ '😂' , '🐦', '🐳','🌮', '💚'];
  names: string[] = ['Pedro', 'Maria', 'Angela', 'Yomi', 'Miguel'];
  newName = '';

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.person.age++
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}

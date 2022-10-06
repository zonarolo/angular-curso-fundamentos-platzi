import { Component } from '@angular/core';
import { Product } from './product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
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
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.webp',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.webp'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.webp'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.webp'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.webp'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

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

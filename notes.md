# Notas

## Propierty binding

- Es una forma de controlar dinamamicamente algunos atributos html para que estos sean renderizados apartir una string, variable o atributo de un objeto de la capa logica.

- Solo funcionan en una direccion desde la capa logica (conponent.ts) al objeto destino (atributo html), a esto se le conoce como flujo de datos.

- Debemos vincular los valores del componente a los atributos html, esto logramos encerrando el atributo html entre “square brakets”.

- Los corchetes [ ] (square brakets) hacen que Angular evalúe el lado derecho de la asignación como una expresión dinámica. Sin los corchetes, Angular trata el lado derecho como un literal de cadena y establece la propiedad en ese valor estático.
```
  <button disabled="false"></button> // dato fijo como string
  <button [disabled]="btnDisabled"></button> //dato dinamico
```

- A menudo, “interpolation” y “Property Binding” pueden lograr los mismos resultados. Los siguientes pares de enlaces hacen lo mismo.
```
  <p><img src="{{itemImageUrl}}"> is the <i>interpolated</i> image.</p>
  <p><img [src]="itemImageUrl"> is the <i>property bound</i> image.</p>
```
- Utilice cualquiera de las formas cuando represente valores de datos como cadenas.

- Es preferible el metodo de “interpolation” para facilitar la lectura.

- Al establecer una propiedad de elemento en un valor de datos que no sea una cadena, debe usar “Property Binding”.

- Se recomienda comprender los “Event binding” para entender el flujo de datos de la aplicacion y como este interactua con “interpolation” y “Property Binding”.

## Event Binding

- El Event Binding le permite escuchar y responder a las acciones del usuario, como pulsaciones de teclas, movimientos del mouse, clics y toques (Atributos HTML y propiedades DOM).

- Para vincular un elemento html a un evento, debemos indicar el nombre del evento entre paréntesis a la izquierda de un signo igual y el nombre de una funcion entre comillas a la derecha, recuerda indicar que se trata de una funcion con los parentecis “nameFunction()” .
```
  <button (click)="onSave()">Save</button>
```
- Usar () en el template html es sinonimo de llamar “addEventListener()”

- Podemos realizar eventos personalizados con “EventEmitter”

- Podemos llamar multiples eventos de la siguiente forma
```
  <button (click)="clickEvent()" (mouseenter)="mouseEnterEvent()">Click Me</button>
```
- Podemos determinar un objetivo de evento de la siguiente manera
```
  <button (click)="handleClick($event)">Save</button>
```
- Se recomienda comprender el flujo de datos de la aplicacion y como este interactua con la misma, existen tres tipos de enlaces:
    - Enlace unidireccional [] para enlazar desde la capa logica (component.ts) a la vista (html).
    - Enlace unidireccional () para enlazar de la vista (html) a la capa logica (component.ts).
    - Enlace bidireccional [()] para enlazar una secuencia de vista bidireccional a la capa logica (component.ts).

## Otros eventos que podemos escuchar

- Una forma común de manejar eventos es pasar el “objeto de evento” $event, donde se capturan eleentos del DOM, por lo general este evento contiene la informacion que debemos procesar en el metodo.

- Conviene conocer los objetos del evento DOM Event reference

- Tenga en cuenta el contexto de ejecución

- Las propiedades de un $event (objeto) varían según el tipo de evento DOM. Por ejemplo, un evento de mouse incluye información diferente a la de un evento de edición de cuadro de entrada.

- Podemos escuchar el scroll con el siguiente codigo
```
  //en el html
  <div class="box" (scroll)="onScroll($event)"></div>
  // en la capa logica
  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
```
- Podemos leer las teclas que se estan digitando a medida que estas son digitadas, esto lo hacemos con el sigiente codigo
```
  // en el html
  <input type="text" [value]="person.name" (keyup)="onKeyUp($event)" />
  <p>Name {{ person.name }}</p>
  // en la capa logica
  onKeyUp(event: Event) {
  const element = event.target as HTMLInputElement;
  this.person.name = element.value;
  }
```
- Use un tipo de datos espesifico (no any) que pueda revelar las propiedades del objeto asociado al evento
```
  // sin informacion de tipo ... simplifica el código al costo de no saber las propiedades del evento
  onK(event: any) {
    this.values += event.target.value + ' | ';
  }
  // define un tipo de dato para el evento que estamos capturando, lo que nos permite utilizar las propiedades adecuadas para el objeto
  onKey(event: KeyboardEvent) {
  this.values += (event.target as HTMLInputElement).value + ' | ';
  }
  // No todos los elementos tienen una value propiedad, por lo que se convierte target en un elemento de entrada. El método onKey expresa más claramente lo que espera y cómo debera interpretar el evento.
```
- Tambien puedes capturar teclas como Ctr, Alt, Shift y sus conbinaciones
```
  <input (keyup.control)='...respond to ctrl/control...' />
  <input (keyup.alt)='...respond to alt/option...' />
  <input (keyup.shift)='...respond to shift...' />
  <input (keyup.meta)='...respond to command...' />
  <input (keydown.control.shift.z)='...'/>
  <input (keyup.enter)='...responds to enter...' />
  <input (keydown.esc)='...responds to escape...' />
  <input (keyup.shift.f)='...responds to shift+f...' />
```
- Al utilizar el “$event” tenga en cuenta que este muestra mas infomacion de la necesaria, lo que rompe “la separacion de responsabilidaes” entre la plantilla ( lo que ve el usuario ) y el componente ( cómo la aplicación procesa los datos del usuario ), es mejor usar variables de referencia en la capa logica (componente) para abordar este problema.

## Data binding con ngModel

- Importante recalcar que para hacer uso de ngModel debemos importar el “FormModule” y habilitar el mismo en app.module.ts

- ngModel raliza un seguimiento del valor y el estado de validación de un control de formulario individual debido a las propiedades que hereda de FormControl es recomentado saber como funciona dicho proceso.

- Podemos personalizar las validaciones que deberia tener un campo o el mismo formulario

- Aqui utilizamos las variables de referencia (las que tienen el signo #) y debemos indicar que la variable debera tomar el valor del ngModel <<#nameInput=“ngModel”>>

- Se pueden realizar las validaciones que normalmente encontramos en html y con “pattern” podemos especificar una comprobacion como exprecion regular

- Podemos tener un flujo de datos unidireccional con [] o bidireccional con [()]

- Acepta inputs

- Cuando se utiliza el ngModel sin la etiqueta `<form>` es necesario proporcionar un “nombre de atributo” de manera que el control pueda ser registrado en el formulario padre bajo ese nombre.
```
//comportamiento del ngModel sin etiqueta <form>
    //html
    <input [(ngModel)]="name" #ctrl="ngModel" required>
    //capa logica
    name: string = '';
//Comportamiento dentro de un form
  //html
  <form #f="ngForm" (ngSubmit)="onSubmit(f)" novalidate>
    <input name="first" ngModel required #first="ngModel">
    <input name="last" ngModel>
        <button>Submit</button>
  </form>
    //capa logica
  onSubmit(f: NgForm) {
  console.log(f.value);  // { first: '', last: '' }
  console.log(f.valid);  // false
  }

En el contexto de un formulario principal, a menudo no es necesario incluir enlaces unidireccionales o bidireccionales, ya que el formulario principal se encarga de su  sincronizacion
```

## ngIf y su bloque else

- Para entrar en mas detalles sobre este tema he encontrado un blog que resulta particularmente util donde se evidencia el uso que puede llegar a tener ngIf con la directiva ng-template y ng-container ----> [Angular Templates: las directivas ng-template, ng-container y ngTemplateOutlet](https://profile.es/blog/angular-templates-las-directivas-ng-template-ng-container-y-ngtemplateoutlet/)

## ngFor
[Angular ngFor la directiva y sus opciones](https://www.arquitecturajava.com/angular-ngfor-y-sus-opciones/)

## ngFor Objs
[ngFor and For loop over objects or Array in Angular](https://readerstacks.com/ngfor-and-for-loop-over-object-or-array-in-angular/)

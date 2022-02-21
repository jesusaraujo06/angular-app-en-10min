/**
 * ? app.component.ts es el fichero asociado a nuestro html 'app-component.html'
 * ? Aqui es donde haremos toda la logica.
 */

// Modulos
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// Clase normal de Typescript
export class AppComponent {


  constructor(){

  }

  ngOnInit() {

  }

  onSearch(): void{
    console.log('OnSearch');
  }
}

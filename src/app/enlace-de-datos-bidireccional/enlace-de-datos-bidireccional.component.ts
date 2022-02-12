import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enlace-de-datos-bidireccional',
  templateUrl: './enlace-de-datos-bidireccional.component.html',
  styleUrls: ['./enlace-de-datos-bidireccional.component.scss']
})
export class EnlaceDeDatosBidireccionalComponent implements OnInit {

  // Propiedades

  /**
   * Typescript nos pide que declaremos y definamos las variables
   * Pero en este caso solo la vamos a declarar, para eso usamos el signo '!'
   * asi le decimos a typescript que solo la voy a declarar para definirla despues
   * */ 
  name: string = 'Jesus Araujo';

  constructor() { }

  ngOnInit(): void {

  
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.scss']
})
export class InterpolacionComponent implements OnInit {

  // Propiedades, estas pueden ser llamadas desde el template HTML
  title = 'Dia 4 del reto';
  urlImgAngular = 'https://therichpost.com/wp-content/uploads/2019/09/Angular-8-custom-accordion-working-example.png';

  constructor() { }

  ngOnInit(): void {
  }

}

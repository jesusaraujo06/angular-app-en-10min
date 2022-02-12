import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.scss']
})
export class DirectivasComponent implements OnInit {

  // Propiedades
  cities = [
    'Barcelona',
    'Madrid',
    'Lima',
    'Andorra'
  ]

  name!: string;

  students = [
    'Jesus',
    'Duvan',
  ]

  tutors = [
    'Mellado',
    'Jacke',
  ]

  pays = [
    '100.000',
    '200.000',
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

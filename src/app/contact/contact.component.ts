import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface ContactForm {
  "name": string;
  "checkAdult": boolean;
  "department": string;
  "comment": string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // Imaginemos que estos son datos precargados que vienen de una api y los vamos a cargar a nuestro form
  model = {
    name: "Jesus Araujo",
    checkAdult: true,
    department: "",
    comment: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {

    // Validar 
    console.log('Forms values', form);
  }

}

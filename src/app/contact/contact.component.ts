import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

interface ContactForm {
  name: string;
  checkAdult: boolean;
  department: string;
  comment: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  // Propiedad para guardar el params de la url
  id!: string;

  // Imaginemos que estos son datos precargados que vienen de una api y los vamos a cargar a nuestro form
  model = {
    name: 'Jesus Araujo',
    checkAdult: true,
    department: '',
    comment: '',
  };

  // Inyectamos el route
  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
  }

  onSubmit(form: NgForm): void {
    // Validar
    console.log('Forms values', form);
  }
}

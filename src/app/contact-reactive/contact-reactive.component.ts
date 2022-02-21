import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss']
})
export class ContactReactiveComponent implements OnInit {

  // Propiedad tipo FormGroup  creada para el formulario
  contactForm !: FormGroup;  

  // Si es solo tenemos un input es mejor utilizar la clase FormControl()
  field = new FormControl();

  // Tenemos que importar el FormBuilder
  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {

    // Y aqui ya podriamos usar propiedades del FormControl
    // this.field.valid == true;

    // PAra FormGroup
    this.contactForm = this.initForm();

    // this.onPathValue();

    this.onSetValue();
  }

  // Añadir datos a un campo 
  onPathValue(): void {
    this.contactForm.patchValue({name: 'Yisus'});
  }

  // Añadir a datos a todos los campos, nos obliga a pasarle datos a todos los capos
  onSetValue(): void {
    this.contactForm.setValue({comment: 'Hola mundo'});
  }

  onSubmit(): void {
    console.log('Form ->', this.contactForm.value);
  }

  // Metodo para declarar las propiedades de nuestro formulario
  initForm(): FormGroup{
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      checkAdult: ['', [Validators.required]],
      department: ['', [Validators.required]],
      comment: ['']

    })
  }

}

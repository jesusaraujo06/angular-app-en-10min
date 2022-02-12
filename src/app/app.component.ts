/**
 * ? app.component.ts es el fichero asociado a nuestro html 'app-component.html'
 * ? Aqui es donde haremos toda la logica.
 */

// Modulos
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// Clase normal de Typescript
export class AppComponent {
  title = 'my-app';
  data: any[] = [];

  constructor(private http: HttpClient){

  }

  ngOnInit() {
    this.http.get('https://api.spacexdata.com/v4/rockets')
      .subscribe( (data: any) => {
        this.data = data;
      })
  }
}

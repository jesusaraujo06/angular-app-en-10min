/**
 * ? Este fichero 'app.module.ts' es el modulo principal de nuestra aplicación,
 * Por ejemplo si necesitamos trabajar con el modulo de formularios de angular lo inyectamos aqui en 'imports'
 */

// Modulos importados
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  // En declarations, declaramos los componentes a utilizar
  declarations: [
    AppComponent,
    ButtonComponent
  ],
  // En imports, importamos o inyectamos modulos por ejemplo HttpClientModule
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // En providers, podemos inyectar servicios en nuestra aplicacion
  providers: [],
  // En bootstrap o arranque, se establece el componente inicial que se va a lanzar o bootear
  bootstrap: [AppComponent]
})

// Clase normal de Typescript
export class AppModule { }

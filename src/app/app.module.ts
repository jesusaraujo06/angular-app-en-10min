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
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { NavesComponent } from './naves/naves.component';
import { EnlaceDeDatosBidireccionalComponent } from './enlace-de-datos-bidireccional/enlace-de-datos-bidireccional.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivasComponent } from './directivas/directivas.component';
import { CicloDeVidaComponenteComponent } from './ciclo-de-vida-componente/ciclo-de-vida-componente.component';
import { FormNewItemComponent } from './form-new-item/form-new-item.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ContactComponent } from './contact/contact.component';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  // En declarations, declaramos los componentes a utilizar
  declarations: [
    AppComponent,
    ButtonComponent,
    InterpolacionComponent,
    NavesComponent,
    EnlaceDeDatosBidireccionalComponent,
    DirectivasComponent,
    CicloDeVidaComponenteComponent,
    FormNewItemComponent,
    FilterPipe,
    ContactComponent,
    ContactReactiveComponent,
    HomeComponent,
    NavbarComponent,
    PageNotFoundComponent
  ],
  // En imports, importamos o inyectamos modulos por ejemplo HttpClientModule
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // En providers, podemos inyectar servicios en nuestra aplicacion
  providers: [],
  // En bootstrap o arranque, se establece el componente inicial que se va a lanzar o bootear
  bootstrap: [AppComponent]
})

// Clase normal de Typescript
export class AppModule { }

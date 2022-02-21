import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NavesComponent } from './naves/naves.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'naves', component: NavesComponent},
  {path: 'contact-reactive', component: ContactReactiveComponent},
  {path: 'contact-template', component: ContactComponent},
];

// Decorador para cambiar el comportamiento de la clase
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// Clase normal de typescript
export class AppRoutingModule { }

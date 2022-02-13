import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida-componente',
  templateUrl: './ciclo-de-vida-componente.component.html',
  styleUrls: ['./ciclo-de-vida-componente.component.scss']
})
export class CicloDeVidaComponenteComponent implements OnChanges, OnInit, OnDestroy {

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
      console.log('Change ->', changes);
  }

  ngOnInit(): void {
    console.log('Metodo ngOnInit');
  }

  ngOnDestroy(): void {
      console.log('Metodo ngOnDestroy')
  }

}

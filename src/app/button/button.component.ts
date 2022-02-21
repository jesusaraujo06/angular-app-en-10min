import { Component, Input, ChangeDetectionStrategy, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

/**
 * En angular el arroba '@' es un decorador.
 * un decorador lo que hace es convertir o transformar una clase
 * a través de una determinada configuración
 */
@Component({
  // Selector para llamar el componente en HTMl: <app-button></app-button>
  selector: 'app-button',

  // Definir la ruta del template html
  templateUrl: './button.component.html',
  
  // O tambien podemos pasarle el html directamente
  // template: `<button>Button desde la configuración template</button>`,
  
  // Definir la ruta de los estilos
  styleUrls: ['./button.component.scss'],

  // O tambien podemos pasarle los estilos directamente
  // styles: [
  //   'button { background: red; color: white; }',
  //   'h1 { font-size: 20px }'
  // ]

  // Cambiar la estrategia de detección de cambios
  changeDetection: ChangeDetectionStrategy.OnPush,

})

// Funcion normal de Typescript, donde estaran nuestros metodos
// export class ButtonComponent implements OnChanges, OnInit, OnDestroy {
export class ButtonComponent  {

  /**
   * ? Usaremos el decorador @input
   * para recibir las variables que nos estan devolviendo
   */
  @Input() color !: string;
  @Input() label1 !: string;
  // @Input() selection !: string;
  @Input() className : string = 'btn-warning';

  /**
   * El constructor es un defualt method, que siempre se ejecuta cuando se crea una clase,
   * dicho tecnicamente, se ejecuta cuando creamos una instancia de una clase,
   *
   * * En angular es utilizado para cargar cosas ligeras
   */
  constructor() { }

  /**
   ** ngOnInit es propio de angular y se ejecuta después del constructor. 
   * 
   * A diferencia del constructor, ngOnInit pertenece al ciclo de vida propio de angular
   * y es aquí donde le ‘decimos’ que el componente ya está listo para darle uso.
   *
   * Este se implementa a traves de la interface OnInit, la cual se llama con 'implements OnInit'
   *
   ** “ngOnInit está puramente ahí para darnos una señal de que Angular ha terminado de inicializar el componente”.
   *
   ** 'void' quiere decir que el metodo no retorna ningun valor
   */

  // ngOnChanges(changes: SimpleChanges): void {
  //     console.log('Changes -> ', changes)
  // }

  // ngOnInit(): void {

  //   console.log('onInit')
  //   // ! Return da error por que el metodo tiene void
  //   // return 0;
  // }

  // ngOnDestroy(): void {
  //     console.log('OnDestroy')
  // }

  counterRender(): void {
    console.log('Render Button');
  }

}

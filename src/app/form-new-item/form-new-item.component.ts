import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormNewItemComponent implements OnInit {

  // Recibimos datos con el decorador @input
  @Input() className = 'btn-primary';
  @Input() label!: string;
  // Vamos a usar el decorador @output para enviar los datos al padre
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddNewItem(item: string): void {
    if(item == ''){
      return alert('Campo vacio');
    }

    // Emitir los datos al padre
    this.newItemEvent.emit(item);
  }

  // Funcion que va a devolver un booleano
  counterRender(): void {
    console.log('Render Form');
  }

}

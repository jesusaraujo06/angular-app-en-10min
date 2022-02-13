import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss']
})
export class FormNewItemComponent implements OnInit {

  // Recibimos datos con el decorador @input
  @Input() className = 'btn-prmary';
  @Input() label!: string;
  // Vamos a usar el decorador @output para enviar los datos al padre
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }



  onAddNewItem(item: string): void {
    this.newItemEvent.emit(item);
    // console.log(item);
  }

}

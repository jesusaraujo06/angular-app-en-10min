import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.scss']
})

export class NavesComponent implements OnInit {

  title = 'my-app';
  data: any[] = [];
  selection!: string;
  arrayPropuestas: any[] = [];
  criteria = '';


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://api.spacexdata.com/v4/rockets')
    .subscribe( (data: any) => {
      this.data = data;
    })
  }

  addNewPropuesta(propuesta: string):void {
    this.arrayPropuestas.push(propuesta);
  }

  onImgClicked(name: string, event: Event): void {
    
    this.selection = name;
  }

  onClear(): void{
    this.selection = '';
  }

  onSearch(): void{
    console.log('OnSearch');
  }

}

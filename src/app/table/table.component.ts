import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  pokemonInfo: any [] = [];
  isAltered = false;


  constructor(private http : HttpClient){}
   
  // traemos los datos del JSON externo
  ngOnInit() : void {
    const url : string = '../assets/Pokedex.json'
    this.http.get<any[]>(url).subscribe((res) => {
      this.pokemonInfo = res.slice(0, 151);
    })
  }
}


import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  tiles: Tile[] = [
    { text: 'ATELIER CREATION', cols: 2, rows: 1, color: '#BBf025' },
    { text: 'NOTRE CARTE', cols: 1, rows: 1, color: 'lightcoral' },
    { text: 'VOTRE CARTE', cols: 1, rows: 1, color: 'lightcoral' },
    { text: 'Nos différentes pizzas', cols: 1, rows: 3, color: 'lightgreen' },
    { text: 'Vos différentes pizzas', cols: 1, rows: 3, color: 'lightgreen' },
  ];
  constructor() { }

  ngOnInit() {
  }

}

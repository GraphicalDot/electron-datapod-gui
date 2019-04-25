import { Component, OnInit } from '@angular/core';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {
  tiles = [
    {text: 'One', cols: 2, rows: 1, color: '#142A5C'},
    {text: 'Two', cols: 1, rows: 1, color: '#B7A0E8'},
    {text: 'Three', cols: 1, rows: 2, color: '#FF0000'},
    {text: 'Four', cols: 3, rows: 1, color: '#D9EDD9'},
  ];
  constructor() { }

  ngOnInit() {
  }

}

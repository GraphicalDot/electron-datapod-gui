import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';


export interface PeriodicElement {
  name: string;
  month: string;
  weight: number;
  symbol: string;
  total_credit_transactions: number
}

const ELEMENT_DATA: PeriodicElement[] = [
  {month: "Jan", 
    name: 'Hydrogen', 
    weight: 1.0079, 
    total_credit_transactions: 12,
    symbol: 'H'},
  
    {month: "Feb" , 
        name: 'Helium', 
        weight: 4.0026, 
        symbol: 'He',
    total_credit_transactions: 12,
      
      },
    {month: "March", 
        name: 'Lithium', 
        weight: 6.941, 
        symbol: 'Li',
    total_credit_transactions: 12,
      
      },
  
    {month: "April", 
      name: 'Beryllium', 
      weight: 9.0122,
    total_credit_transactions: 12,

      symbol: 'Be'},
  
      {month: "May", 
        name: 'Boron', 
        weight: 10.811,
    total_credit_transactions: 12,

        symbol: 'B'},
  
        {month: "June", 
          name: 'Carbon', 
          weight: 12.0107,
    total_credit_transactions: 12,

          symbol: 'C'},
  
          {month: "July", 
            name: 'Nitrogen',
             weight: 14.0067,
    total_credit_transactions: 12,

             symbol: 'N'},

             {month: "August", 
              name: 'Oxygen', 
              weight: 15.9994, 
    total_credit_transactions: 12,
              
              symbol: 'O'},
    {month: "September", 
      name: 'Fluorine', 
      weight: 18.9984, 
    total_credit_transactions: 12,
      
      symbol: 'F'},
  {month: "Oct", 
    name: 'Neon', 
    total_credit_transactions: 12,
    
    weight: 20.1797,
     symbol: 'Ne'},
     {month: "November", 
     name: 'Neon', 
     total_credit_transactions: 12,
     
     weight: 20.1797,
      symbol: 'Ne'},
      {month: "December", 
      name: 'Neon', 
      total_credit_transactions: 12,
      
      weight: 20.1797,
       symbol: 'Ne'},
];



@Component({
  selector: 'app-bank-statements-summary',
  templateUrl: './bank-statements-summary.component.html',
  styleUrls: ['./bank-statements-summary.component.scss']
})
export class BankStatementsSummaryComponent implements OnInit {
  displayedColumns: string[] = ['month', 'total_credit_transactions', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }
  applyFilter(filterValue: string) {
    //this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

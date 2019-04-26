import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-datasource',
  templateUrl: './datasource.component.html',
  styleUrls: ['./datasource.component.scss']
})
export class DatasourceComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) {}

 
  ngOnInit() {
  }

  onGmail(event) {
    //this.snackBar.open("Only enabled for google takeout folder")
    var tmppath = event.target.files[0].path;
    console.log("Gmail input has been clicked")
    console.log(tmppath)

      }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-a',
  templateUrl: './list-a.component.html',
  styleUrls: ['./list-a.component.css']
})
export class ListAComponent implements OnInit {

  cars:Cars[];
  checker:boolean

  constructor() {
    this.cars=["merc","fiat","opel"];
    this.checker=true;

    }
   

  ngOnInit(): void {
  }

}
class Cars{
  
}
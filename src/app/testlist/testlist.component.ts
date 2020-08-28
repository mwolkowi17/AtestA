import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-testlist',
  templateUrl: './testlist.component.html',
  styleUrls: ['./testlist.component.css']
})
export class TestlistComponent implements OnInit  {

  public guests:Guest[];

  constructor(private httpService: HttpService) { }

  
  
  public getGuests = () => {
    let route: string = 'https://localhost:44343/api/Guests';
    this.httpService.getData(route)
      .subscribe((result) => {
        this.guests = result as Guest[];
      },
        (error) => {
          console.error(error);
        });
  }
 
  ngOnInit(): void {
    this.getGuests();
  }
}
interface Guest{
 guestID: number,
 name:string,
 surname: string,
 member_since: string

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title: string;

  constructor() {
    this.title = "Wygląda na to, że wszystko działa jak należy!"
  }

  @ViewChild('f', { static: false }) carForm: NgForm;

  onSubmit(form: NgForm) {
    // Przekaliśmy naszą zmienną lokalną 'f' z formularza dzięki czemu mamy dostęp do poszczególnych pól
    console.log("Marka samochodu: " + form.value.carBrand);
    console.log("Opis samochodu: " + form.value.carDescription);
    console.log("Wielkość zamówienia: " + form.value.carAmount);
  }
  
  onClear() {
    this.carForm.reset();
  }
  ngOnInit(): void {

  }

}

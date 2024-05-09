import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  valor1: string;
  valor2: string;
  result: number;

  constructor() {
  this.valor1 = "0";
  this.valor2 = "0";
  this.result = 0;
}
calc(){
  this.result = parseFloat(this.valor1)+parseFloat(this.valor2);
}
exibirResultado():number{
  return this.result
}
}

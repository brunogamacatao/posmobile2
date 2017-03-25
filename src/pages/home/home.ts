import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  valorEmReais   = 1.0;
  valorEmDolares = 1.0;
  valorEmEuros   = 1.0;
  valorEmLibras  = 1.0;

  taxaDolar = 0.31925;
  taxaEuro  = 0.29546;
  taxaLibra = 0.25587;

  constructor(public navCtrl: NavController) {
    
  }

  converter() {
    this.valorEmDolares = this.valorEmReais * this.taxaDolar;
    this.valorEmEuros   = this.valorEmReais * this.taxaEuro;
    this.valorEmLibras  = this.valorEmReais * this.taxaLibra;
  }
}

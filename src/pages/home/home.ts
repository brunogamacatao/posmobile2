import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ConversorService } from '../../providers/conversor-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  valorEmReais   = 1.0;
  valorEmDolares = 1.0;
  valorEmEuros   = 1.0;
  valorEmLibras  = 1.0;

  taxaDolar = 0;
  taxaEuro  = 0;
  taxaLibra = 0;

  constructor(public navCtrl: NavController, public conversor: ConversorService) {
    conversor.getCotacoes().subscribe(cotacoes => {
      this.taxaDolar = cotacoes['USD'];
      this.taxaEuro  = cotacoes['EUR'];
      this.taxaLibra = cotacoes['GBP'];
    });
  }

  converter() {
    this.valorEmDolares = this.valorEmReais * this.taxaDolar;
    this.valorEmEuros   = this.valorEmReais * this.taxaEuro;
    this.valorEmLibras  = this.valorEmReais * this.taxaLibra;
  }
}

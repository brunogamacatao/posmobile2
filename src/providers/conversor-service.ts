import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

const API_URL = 'http://api.fixer.io/latest?base=BRL';

@Injectable()
export class ConversorService {
  constructor(private http: Http) {
  }

  getCotacoes() {
    return this.http.get(API_URL).toPromise()
      .then(response => {
        return response.json().rates;
      }).catch(erro => {
        return {erro: 'Ocorreu um erro'};
      });
  }
}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const API_URL = 'http://api.fixer.io/latest?base=BRL';

@Injectable()
export class ConversorService {
  constructor(private http: Http) {
  }

  getCotacoes() {
    return this.http.get(API_URL)
      .map(this.extraiDados)
      .catch(this.trataErros);
  }

  private extraiDados(res: Response) {
    return res.json().rates;
  }

  private trataErros(erro) {
    return Observable.throw('Erro: ' + JSON.stringify(erro));
  }
}

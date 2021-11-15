import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }
  getClientes() {
    return of([
      {
        nome: 'Cristierre Gomes Konrath',
        data_nascimento: '22/12/1995',
        genero: 'M',
        rg: '12312313',
        cpf: '00994854323',
        celular: '51 898576345'
      },
      {
        nome: 'Maicon Nascimento Tadeu',
        data_nascimento: '22/12/1994',
        genero: 'F',
        rg: '333333',
        cpf: '777775453',
        celular: '51 82222222'
      }
    ])
  }
}

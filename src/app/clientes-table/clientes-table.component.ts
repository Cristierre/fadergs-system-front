import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-clientes-table',
  templateUrl: './clientes-table.component.html',
  styleUrls: ['./clientes-table.component.css']
})
export class ClientesTableComponent implements OnInit {
  
  clientes:Observable<any> | undefined;

  displayedColumns: String[] = ["nome", "data_nascimento", "genero", "rg", "cpf","celular"];
 
  constructor(private clientesService:ClientesService) { }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes() {
    this.clientes = this.clientesService.getClientes();
  }

}

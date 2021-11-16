import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  visualizarQuartos(){
    return this.authService.isGerente() || this.authService.isCliente() ;
  }
  
  visualizarClientes(){
    return this.authService.isGerente();
  }
}

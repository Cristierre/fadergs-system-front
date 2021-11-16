import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { StorageService } from './local-storage-service.service';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient, private storageService: StorageService) { }

  login(user: { user_name: string, password: string }) {
    return this.http.post(`${environment.baseUrl}/auth/login`,user);
  }
  setLocalStorage(data:any) {
    this.storageService.set('token', data.token);
    this.router.navigate(['/admin']);
  }

  estaAutenticado(): boolean {
    // return this.storageService.get('token') != null && !this.tokenExpirado();
    return true;
  }

  tokenExpirado() {
    // const token = this.storageService.get('token');
    // const payload = jwt_decode(token).exp;
    // const nowTimestamp = Math.floor(+new Date() / 1000);
    // if (payload > nowTimestamp) {
    //   return false;
    // }
    // return true;
    return false;
  }

  usuarioLogado(){
    return {
      user_name:'gerente',
      role:'gerente'
    }
  }

  isGerente(){
    return this.usuarioLogado().role === 'gerente';
  }
  isCliente(){
    return this.usuarioLogado().role === 'cliente';
  }

  logout(): void {
    this.limpa();
    this.router.navigate(['/login']);
  }

  limpa(){
    this.storageService.remove('token');
  }
}

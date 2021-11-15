import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StorageService } from './local-storage-service.service';

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

  logout(): void {
    this.limpa();
    this.router.navigate(['/login']);
  }

  limpa(){
    this.storageService.remove('token');
  }
}

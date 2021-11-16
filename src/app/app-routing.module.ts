import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardaAutenticacaoService } from './guards/auth.guard';
import { GuardaLoginService } from './guards/login.guard';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: 'login',
    canActivate:[GuardaLoginService],
    component: LoginComponent
  },
  {
    path: '',
    canActivate:[GuardaAutenticacaoService],
    component: MainComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

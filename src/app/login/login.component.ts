import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  group: FormGroup = this.fb.group({
    user_name: [null, Validators.required],
    password: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, private authService:AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(){
      this.authService.login(this.group.getRawValue()).subscribe((token)=>{});
  }

}

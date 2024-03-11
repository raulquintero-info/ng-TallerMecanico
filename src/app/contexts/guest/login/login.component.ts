import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/modules/auth/interfaces/User.interface';
import { LoginService } from 'src/app/core/modules/auth/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  errorMessage: string = '';
  showError: boolean = false;

  loginForm = this.fb.group({
    username: ['customer@server.com', [Validators.required, Validators.email]],
    password: ['', Validators.required]
    ,
  })

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  get username(){
    return this.loginForm.controls.username;
  }
  get password(){
    return this.loginForm.controls.password;
  }

  loginCustomer() {
    this.loginService.login({username: "customer@server",  rol:{ id: 1,  name: "USER"}} as User);

    this.router.navigateByUrl('/dashboard');
  }

  loginAdmin(){
    this.loginService.login({username: "administrador@server",  rol:{ id: 1,  name: "ADMIN"}} as User);

    this.router.navigateByUrl('/admin/dashboard');
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/core/modules/auth/interfaces/credentials.interface';
import { LoginService } from 'src/app/core/modules/auth/services/login.service';
import { User } from 'src/app/core/modules/auth/interfaces/user.interface';
import { catchError } from 'rxjs';
import { LoginResponse } from '../../interfaces/loginResponse.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  user: User = {} as User;
  role: string = "";

  showSpinner: boolean =false;
  loginForm = this.formBuilder.group({
    email:['', [Validators.required, Validators.email,]],
    password:['', [Validators.required]],
  })

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
    ){}

  ngOnInit(){
    // window.location.reload();
  }

  public get email(){
    return this.loginForm.controls.email;
  }

  public get password(){
    return this.loginForm.controls.password;
  }


  login(){
    this.showSpinner =true;
    if (this.loginForm.valid){

      this.loginService.login(this.loginForm.value as Credentials).subscribe({
        next: (loginResponse: LoginResponse)=>{

          localStorage.setItem('token', loginResponse.accessToken ? loginResponse.accessToken : '');

          this.loginService.currentUser().subscribe({
            next: (userData:User)=>{
              localStorage.setItem('user',JSON.stringify(userData));
              localStorage.setItem('userLoginOn', JSON.stringify(true));

              this.showSpinner = false;
              this.loginService.checkStatus();
              let url ="";
              switch(userData.authorities[0].authority){
                case "CUSTOMER": url="/mi-garage"; break;
                case "ADMIN": url="/admin/dashboard"; break;
              }
              this.router.navigateByUrl(url);
            }
          })
        },
        error: (error: any)=>{
          console.log(error);
          this.showSpinner = false;
          if (error.status == 401) alert('Credenciales invalidas')
          else alert('ha habido un error en el servidor, intente mas tarde');

        }
      });






      // this.loginService.login(this.loginForm.value as Credentials).subscribe({
      //   next: resp=>{
      //     console.log(resp);
      //     // this.loginService.setToken( resp.tokenType + ' ' + resp.accessToken)
      //     this.loginService.getCurrentUser().subscribe({
      //       next: resp=>{
      //         console.log(resp);
      //         this.loginService.setUser(JSON.stringify(resp));
      //         let path='';
      //         switch(this.loginService.getRole()){
      //           case 'ADMIN': path = '/admin/dashboard'; break;
      //           case 'CUSTOMER': path = '/dashboard'; break;
      //         }
      //         this.showSpinner =false;

      //         console.log('role', this.loginService.getRole())
      //         console.log('path', path)
      //         this.loginForm.reset();
      //         this.router.navigateByUrl(path);
      //       }
      //     })
      //   },
      //   error: resp=>{
      //   this.showSpinner = false;

      //     console.log(resp);
      //   }
      // });

    } else{
      this.loginForm.markAllAsTouched();
      alert("error")
    }
  }





}

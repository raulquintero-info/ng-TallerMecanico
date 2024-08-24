import { Component, OnDestroy, OnInit, Renderer2, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/core/modules/auth/interfaces/credentials.interface';
import { LoginService } from 'src/app/core/modules/auth/services/login.service';
import { User } from 'src/app/core/modules/auth/interfaces/user.interface';
import { catchError } from 'rxjs';
import { LoginResponse } from '../../interfaces/loginResponse.interface';
import { MainLoaderService } from 'src/app/core/services/mainLoader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy{
  user: User = {} as User;
  role: string = "";
  message: string ='';

  showSpinner: boolean =false;
  loginForm = this.formBuilder.group({
    // email:['', [Validators.required, Validators.email,]],
    username:['',[]],
    password:['', [Validators.required]],
  })

  constructor(
    private renderer: Renderer2,
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
    ){}

    private mLoaderService = inject(MainLoaderService);

  ngOnInit(): void {
    this.mLoaderService.setStatus('ocultar');

  }

  // public get email(){
  //   return this.loginForm.controls.email;
  // }

  public get username(){
      return this.loginForm.controls.username;
    }

  public get password(){
    return this.loginForm.controls.password;
  }


  login(){
    this.showSpinner =true;
    this.message = '';
    if (this.loginForm.valid){

      this.loginService.login(this.loginForm.value as Credentials).subscribe({
        next: (loginResponse: LoginResponse)=>{

          localStorage.setItem('token', loginResponse.accessToken ? loginResponse.accessToken : '');

          this.loginService.currentUser().subscribe({
            next: (userData:User)=>{
              console.log('USER', userData);
              localStorage.setItem('user',JSON.stringify(userData));
              localStorage.setItem('userLoginOn', JSON.stringify(true));

              this.showSpinner = false;
              this.loginService.checkStatus();
              let url ="";
              switch(userData.role){
                // switch(userData.authorities[0].authority){
                case "CLIENTE":
                  url="/mi-garage";
                  break;
                case "ADMIN": url="/admin/dashboard"; break;
                case "EMPLEADO": url="/admin/dashboard"; break;
              }

              this.router.navigateByUrl(url);
            },
            error: resp=>{
              console.log('error', resp)
              this.router.navigateByUrl("not-found", {skipLocationChange: true});

            }
          })
        },
        error: (error: any)=>{
          console.log(error);
          this.showSpinner = false;
          this.message = error;

        }
      });



    } else{
      this.loginForm.markAllAsTouched();
      this.showSpinner = false;

      // alert("error")
    }
  }

  loginAsAdmin( user: string, pass:string){
    this.loginForm.patchValue({
      username: user,
      password: pass
    });
    this.login()
  }

  ngOnDestroy(): void {
    // this.renderer.removeClass(document.body, 'bg');
  }



}

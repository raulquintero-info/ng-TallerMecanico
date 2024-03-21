import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/modules/auth/interfaces/user.interface';
import { LoginService } from 'src/app/core/modules/auth/services/login.service';

@Component({
  selector: 'app-navbar-back',
  templateUrl: './navbar-back.component.html',
  styleUrls: ['./navbar-back.component.css']
})
export class NavbarBackComponent implements OnInit {



  titleBar: String = "Taller Mecánico"
  userLoginOn: boolean = false;
  userData: User = { "username":"", authorities:[{}] } as User;


  constructor(private loginService: LoginService, private router: Router){}
  ngOnInit() {

    this.loginService.currentUserLoginOn.subscribe({
      next: (userLoginOn) => {
        this.userLoginOn = userLoginOn;
      }
    });

    this.loginService.currentUserData.subscribe({
      next: (userData) => {
        this.userData = userData
      }
    })
  }

  login(){
    this.router.navigateByUrl('/login');
  }
  logout(){
    this.loginService.logout();
    this.router.navigateByUrl('/');
  }



}

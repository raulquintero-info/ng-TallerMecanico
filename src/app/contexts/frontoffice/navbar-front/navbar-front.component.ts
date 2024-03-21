import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/modules/auth/interfaces/user.interface';
import { LoginService } from 'src/app/core/modules/auth/services/login.service';

@Component({
  selector: 'app-navbar-front',
  templateUrl: './navbar-front.component.html',
  styleUrls: ['./navbar-front.component.css']
})
export class NavbarFrontComponent implements OnInit {
  userLoginOn: boolean = false;
  userData: User = {} as User;
  role: string = '';

  constructor(private loginService: LoginService) { }

  ngOnInit() {

    this.loginService.checkStatus();

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

    this.loginService.currentRole.subscribe({
      next: (userRole: string) => {
        this.role = userRole
      }
    })


  }
}

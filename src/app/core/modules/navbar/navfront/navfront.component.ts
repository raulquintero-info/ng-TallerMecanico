import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../auth/services/login.service';
import { User } from '../../auth/interfaces/User.interface';
// import { LoginService } from 'src/app/core/services/login/login.service';
// import { User } from 'src/app/core/services/login/User.interface';

@Component({
  selector: 'app-navfront',
  templateUrl: './navfront.component.html',
  styleUrls: ['./navfront.component.css']
})
export class NavfrontComponent implements OnInit {

  titleBar: String = "Taller Mecánico"
  userLoginOn: boolean = false;
  userData: User = { id: 0, rol: { id: 0, name: 'none' } } as User;


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

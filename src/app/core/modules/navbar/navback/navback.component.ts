import { Component } from '@angular/core';
import { LoginService } from '../../auth/services/login.service';
import { Router } from '@angular/router';
import { User } from '../../auth/interfaces/User.interface';
// import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-navback',
  templateUrl: './navback.component.html',
  styleUrls: ['./navback.component.css']
})
export class NavbackComponent {

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

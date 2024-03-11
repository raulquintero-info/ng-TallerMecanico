import { Component } from '@angular/core';
import { LoginService } from './core/modules/auth/services/login.service';
import { User } from './core/modules/auth/interfaces/User.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-TallerMecanico';

  userLoginOn: boolean = false;
  userData: User = { id: 0, rol: { id: 0, name: 'none' } } as User;

  constructor(private loginService: LoginService,private router: Router) { }

  ngOnInit() {

    this.loginService.checkStatus();

    this.loginService.currentUserLoginOn.subscribe({
      next: (userLoginOn) => {
        this.userLoginOn = userLoginOn;

      }
    });

    this.loginService.currentUserData.subscribe({
      next: (userData) => {
        this.userData = userData;

      }
    })
  }


}

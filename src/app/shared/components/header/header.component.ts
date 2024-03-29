import { Component, OnInit, inject } from '@angular/core';
import { LoginService } from '../../../core/modules/auth/services/login.service';
import { User } from 'src/app/core/modules/auth/interfaces/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userLoginOn: boolean = false;
  userData: User = {} as User;
  role: string = '';

  private loginService = inject(LoginService);

  ngOnInit() {

    this.loginService.checkStatus();



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

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/modules/auth/interfaces/User.interface';
import { LoginService } from 'src/app/core/modules/auth/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
 favoriteProducts: any;

  constructor(private loginService: LoginService, private router: Router){}

  ngOnInit(){

  }

  login(){
    this.router.navigate(
      ['/login']);
    // this.loginService.login({username: "customer@server",  rol:{ id: 1,  name: "USER"}} as User);
  }



}

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { User } from '../interfaces/User.interface';
import { LoginRequest } from '../interfaces/loginRequest.interface';





@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<User> = new BehaviorSubject<User>({ username: "no user", rol: { id: 0, name: "no rol" } } as User);


  constructor(private http: HttpClient, private router: Router) { }



  get userData(): Observable<User> {
    return this.currentUserData.asObservable();
  }

  get userLoginOn(): Observable<boolean> {
    return this.currentUserLoginOn.asObservable();
  }



  login(userData: User) {
    this.currentUserData.next(userData);
    this.currentUserLoginOn.next(true);
    sessionStorage.setItem('user', JSON.stringify(userData));
    sessionStorage.setItem('userLoginOn', JSON.stringify(true))
  }

  checkStatus(){
    let currentUser: any;
    let currentUserLoginOn: any;
    let userLogged: User;
    currentUser = sessionStorage.getItem('user')
    if(currentUser){
      userLogged = JSON.parse(currentUser);
      this.currentUserData.next(userLogged);
    }
    currentUserLoginOn = sessionStorage.getItem('userLoginOn')
    if(currentUserLoginOn){
      currentUserLoginOn = JSON.parse(currentUserLoginOn);
      this.currentUserLoginOn.next(currentUserLoginOn);
    }
  }



  logout() {

    console.log('1 logout.service');
    this.currentUserData.next({ id: 0, rol: { id: 0, name: '' } } as User);

    this.currentUserLoginOn.next(false);

    sessionStorage.clear();
    // await new Promise(f => setTimeout(f, 10000));
    this.router.navigateByUrl('/');

  }
}

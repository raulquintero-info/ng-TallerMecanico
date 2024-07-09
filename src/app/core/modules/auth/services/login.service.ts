import { Injectable } from '@angular/core';
import { Credentials } from '../interfaces/credentials.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, NEVER, Observable, Subject, catchError, tap, throwError } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { LoginResponse } from '../interfaces/loginResponse.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = "http://localhost:8080/api/auth";
  private userDataLocal: User = {} as User;

  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<User> = new BehaviorSubject<User>({ "username": "no username", "authorities": [{}] } as User);
  currentRole: BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor(private http: HttpClient, private router: Router) { }

  get userData(): Observable<User> {
    return this.currentUserData.asObservable();
  }

  get userLoginOn(): Observable<boolean> {
    return this.currentUserLoginOn.asObservable();
  }

  get userRole(): Observable<string> {
    return this.currentRole.asObservable();
  }

  checkStatus() {
    let currentUser: any;
    let userLogged: User;

    currentUser = localStorage.getItem('user')
    // this.currentUser().subscribe({
    //   next: (resp: any)=>{
    //     this.currentUser = resp;
    //   }
    // })

    if (currentUser) {
      userLogged = JSON.parse(currentUser);
      this.currentUserData.next(userLogged);
      this.currentRole.next(userLogged.role!);
      // this.currentRole.next(userLogged.authorities[0].authority);
      this.currentUserLoginOn.next(true);
      console.log(userLogged);
    } else {
      this.currentUserData.next({} as User);
      this.currentRole.next("");
      this.currentUserLoginOn.next(false);
    }


  }

  login(credentials: Credentials): Observable<LoginResponse> {
    console.log(credentials)
    return this.http.post<LoginResponse>(this.url + '/login', credentials).pipe(
      tap((loginResponse: LoginResponse) => {
        localStorage.setItem('token', loginResponse.accessToken ? loginResponse.accessToken : '');
        console.log('login response', loginResponse);
        // this.http.get<User>(this.url + '/current-user').subscribe({
        //   next: resp=>{
        //     localStorage.setItem('user', JSON.stringify(resp));
        //   }
        // })
      }),
      catchError(this.handleError)
    );
  }

  currentUser(): Observable<User> {

    return this.http.get<User>(this.url + '/current-user').pipe(
      tap((userData: User) => {
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('userLoginOn', JSON.stringify(true));
        this.currentUserLoginOn.next(true);
        this.currentUserData.next(userData);
        console.log('currentUser', userData)
      })
    );
  }

  private handleError(error: HttpErrorResponse) {
    let mensaje = "";
    switch (error.status) {
      case 0:
        mensaje = "El servidor no esta disponible, intentelo mas tarde.";
        break;
      case 403:
        mensaje = "Credenciales Invalidas.";
        break;

    }
    console.error('Se ha producido un error: ', error.status);
    // this.router.navigateByUrl("not-found", {skipLocationChange: true});
    return throwError(() => new Error(mensaje));
  }

  public getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null)
      return userStr;
    else
      // this.logout();
      return null;
  }

  getRole() {
    let user: User = JSON.parse(this.getUser()!);
    if (user == undefined)
      return '';
    else
      return user.role;
    // return user.authorities[0].authority;
  }

  setNewPassword(newPassword: any):Observable<any> {return this.http.post(this.url + '/new-credentials', newPassword)}

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.clear();
    this.checkStatus();
  }






























  // baseUrl:string = "http://localhost:3000";
  // public loginStatusSubject = new Subject<boolean>();

  // constructor(private httpClient: HttpClient) { }

  // public login(user: Credentials){
  //   console.log('post login', user)
  //   // return this.httpClient.post(`${this.baseUrl}/api/auth/login`, user).pipe(
  //     return this.httpClient.get(`${this.baseUrl}/login`).pipe(
  //     tap((userData: any)=>{
  //       console.log('tap',userData);
  //     })
  //   )
  // }


  // public loginUser(token:any){
  //   console.log('setToken', token)
  //   localStorage.setItem('token', token);
  // }

  // public  isLoggedIn(){
  //   let tokenStr = localStorage.getItem('token');
  //   return  ((tokenStr == undefined || tokenStr == '' || tokenStr == null)) ? false : true;
  // }

  // public logout(){
  //   localStorage.removeItem('token');
  //   localStorage.removeItem('user');
  // }

  // public getToken(){
  //   console.log('obteniendo token',localStorage)
  //   return localStorage.getItem('token');
  // }

  // public setUser(user: any){
  //   localStorage.setItem('user', JSON.stringify(user));
  // }

  // public getUser(){
  //   let userStr = localStorage.getItem('user');
  //   if(userStr != null)
  //     return userStr;
  //   else
  //     // this.logout();
  //     return null;
  // }

  // public getUserRole(){
  //   let user: any = JSON.parse(this.getUser()!);
  //   console.log('user', user.authorities[0].authority);
  //   if( user == undefined)
  //     return '';
  //   else
  //     return  user.authorities[0].authority;
  // }

  // public getCurrentUser(){
  //   return this.httpClient.get(`${this.baseUrl}/currentuser`);
  // }


  // checkStatus(){
  //   this.getUser()
  // }
































  // private userDataLocal: User = {} as User;
  // currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean> (false);
  // currentUserData: BehaviorSubject<User> = new BehaviorSubject<User>({"username": "no username", "authorities": [{}] } as User);
  // currentRole: BehaviorSubject<string> = new BehaviorSubject<string>("");

  // url: string = "http://localhost:3000";

  // constructor(private httpClient: HttpClient) { }

  // get userData(): Observable<User>{
  //   return this.currentUserData.asObservable();
  //  }

  //  get userLoginOn(): Observable<boolean>{
  //    return this.currentUserLoginOn.asObservable();
  //  }

  //  get userRole():Observable<string>{
  //   return this.currentRole.asObservable();
  //  }

  // login(credentials: Credentials): Observable<LoginResponse> {
  //   console.log(credentials)
  //    return this.httpClient.get<LoginResponse>(this.url + '/login').pipe(
  //     tap(resp=>{
  //       // this.setToken( resp.tokenType + ' ' + resp.accessToken)
  //       localStorage.setItem('token', resp.tokenType + ' ' + resp.accessToken)
  //     }),
  //     catchError(this.handleError)
  //    );
  //   }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.status===0){
  //     console.error('se ha producido un error')
  //   } else {
  //     console.log('backend retorno el codigo de estado ', error.status, error.error);
  //   }
  //   return throwError(()=> new Error('Algo fallo. por favor intenta nuevamente'));
  // }

  // logout() {
  //   localStorage.clear()
  //   this.currentUserData.next({"username": "no username", "authorities": [{}] } as User);
  //   this.currentUserLoginOn.next(false);
  //   this.currentRole.next("");

  // }



  // getCurrentUser(): Observable<User> {
  //   return this.httpClient.get<User>(this.url + '/currentuser').pipe(
  //     tap((userData: User)=>{
  //       this.userDataLocal = userData;
  //       this.currentUserLoginOn.next(true);
  //       this.currentUserData.next(userData);
  //       this.currentRole.next(this.getRole());
  //       localStorage.setItem('user', JSON.stringify(userData));

  //       }
  //     ),
  //   );
  // }


  // public getUser(){
  //   let userStr = localStorage.getItem('user');
  //   if(userStr != null)
  //     return userStr;
  //   else
  //     // this.logout();
  //     return null;
  // }
  // getRole() {
  //   let user: User = this.userDataLocal; //JSON.parse(this.getUser()!);
  //   if (user == undefined)
  //     return '';
  //   else
  //     return user.authorities[0].authority;
  // }

  // public setUser(userData: any){
  //   localStorage.setItem('user', JSON.stringify(userData));
  // }




}

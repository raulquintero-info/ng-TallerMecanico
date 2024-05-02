import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "../modules/auth/services/login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let authReq = req;
    const token = this.loginService.getToken();
    console.log('token', this.loginService.getToken());
    if(token!= null ){
      authReq = authReq.clone({setHeaders : {Authorization: `Bearer ${token}`}});
    }
    console.log('cloned', authReq)

    return next.handle(authReq);
  }


} export const authInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi:true
  }
]

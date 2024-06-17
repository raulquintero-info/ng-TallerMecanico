import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, finalize, tap } from "rxjs";
import { LoginService } from "../modules/auth/services/login.service";
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private router = inject(Router)
  constructor(private loginService: LoginService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
    let authReq = req;
    let ok: string;
    const token = this.loginService.getToken();
    console.log('token', this.loginService.getToken());
    if (token != null) {
      authReq = authReq.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
    }
    console.log('cloned', authReq)

    return next.handle(authReq).pipe(
      tap({
        // Succeeds when there is a response; ignore other events
        next: (event) => (ok = event instanceof HttpResponse ? 'succeeded' : ''),
        // Operation failed; error is an HttpErrorResponse
        error: (_error) => {
          ok = 'failed'
          console.log(this.router.url)
          //cerrar sesion al expirar el token
          // if(this.router.url!='/login'){
          //   localStorage.clear()
          //   this.router.navigateByUrl("expired-session")//, {skipLocationChange: true})
          // }
        }
      }),
      // Log when response observable either completes or errors
      finalize(() => {
        const elapsed = Date.now() - started;
        const msg = `${req.method} "${req.urlWithParams}"
           ${ok} in ${elapsed} ms.`;
        // this.messenger.add(msg);
        console.log(msg, ok);

      })
    );
  }


} export const authInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
]

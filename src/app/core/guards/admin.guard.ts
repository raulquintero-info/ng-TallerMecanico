import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../modules/auth/services/login.service';
import { inject } from '@angular/core';
import { tap } from 'rxjs';


export const adminGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = inject(Router)
  const loginService = inject(LoginService);

      loginService.checkStatus();
      let role = loginService.getRole();
      if(role == "ADMIN"){
        return true;
      }

      router.navigate(['not-authorized']);
      return false;



  }

import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../modules/auth/services/login.service';
import { inject } from '@angular/core';

import { MainLoaderService } from '../services/mainLoader.service';

export const empleadoGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = inject(Router)
  const loginService = inject(LoginService);
  const mLoaderService = inject(MainLoaderService);


  // mLoaderService.setStatus('');

      loginService.checkStatus();
      let role = loginService.getRole();
      if(role == "EMPLEADO"){
        return true;
      }

      router.navigateByUrl("not-authorized", {skipLocationChange: true});
      return false;



  }

import { CanActivateFn } from '@angular/router';

import { Inject } from '@angular/core';
import { Route } from '@angular/router';
import { LoginService } from '../services/login.service';

export const authGuard: CanActivateFn = (route, state) => {

  const router = Inject(route);
  const loginService = Inject(LoginService);

  if(loginService.isLogged()){
    return true
  } else{
    router.navigate(['/login']);
    return false
  }
};
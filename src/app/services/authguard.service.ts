import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate() {
    let user = this.loginService.getUser();
    console.log(user);
    if(user) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

import { Injectable } from '@angular/core';
import { JwtService } from './jwt.service';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private jwtService: JwtService,
    private userService: UserService, 
    private router: Router
    ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.jwtService.getToken() && this.userService.getUser()) {
      return true;
    } else {
      this.router.navigateByUrl('/');
      return false;
    }
  }
}


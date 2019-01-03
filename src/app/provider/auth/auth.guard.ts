import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoggerService } from '../logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private logger: LoggerService,
    private auth: AuthService,
    private jwt: JwtHelperService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const notAllowed = this.jwt.isTokenExpired(this.auth.token);
    this.logger.info('Cheking auth on route', `"${next.url[0].path}"`, ' with token expired', notAllowed);

    if (notAllowed) {
      return false;
    }

    return true;
  }
}

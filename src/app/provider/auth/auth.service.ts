import { Injectable, Injector } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Auth } from './auth.model';
import { environment } from 'src/environments/environment';
import { LoggerService } from '../logger/logger.service';
import { Subscription, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public static AUTH_KEY = 'AUTH_TOKEN';
  public static AUTH_ENDPOINT = '/oauth/token';

  constructor(
    private logger: LoggerService,
    private api: ApiService,
    private injector: Injector
  ) { }

  get token() {
    return localStorage.getItem(AuthService.AUTH_KEY)
  }

  set token(token: string) {
    localStorage.setItem(AuthService.AUTH_KEY, token);
  }

  get user() {
    return this.token ? this.injector.get(JwtHelperService).decodeToken(this.token).user_name : null;
  }

  async authenticate(username: string, password: string): Promise<Auth> {
    this.logger.info('Authenticating user', username);

    const body = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&grant_type=${environment.api.auth.grant}`;
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(`${environment.api.auth.clientId}:${environment.api.auth.clientSecret}`)
    };

    return this.api.post<Auth>(AuthService.AUTH_ENDPOINT, body, {headers: headers})
      .toPromise()
      .then(auth => {
        this.logger.info('Authenticaded user', username);
        this.token = auth.access_token;
        return auth;
      });
  }
}

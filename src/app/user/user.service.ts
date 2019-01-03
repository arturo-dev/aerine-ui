import { Injectable } from '@angular/core';
import { LoggerService } from '../provider/logger/logger.service';
import { ApiService } from '../provider/api/api.service';
import { AuthService } from '../provider/auth/auth.service';
import { User } from './user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URI_USER = '/users';

  public signed: User;

  constructor(
    private logger: LoggerService,
    private api: ApiService,
    private auth: AuthService
  ) { }

  async queryAuthUser(): Promise<User> {
    if (this.signed) {
      this.logger.info('Retriving cached user', this.signed.username);
      return this.signed;
    }
    
    this.logger.info('Query auth user as', this.auth.user);
    return this.api.get<User>(`${this.URI_USER}/${this.auth.user}`).toPromise().then(user => {
      this.signed = user;
      return user;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/provider/logger/logger.service';
import { ApiService } from 'src/app/provider/api/api.service';
import { AuthService } from 'src/app/provider/auth/auth.service';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  private URI_USER = '/users';

  constructor(
    private logger: LoggerService,
    private api: ApiService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.queryUser();
  }

  private queryUser(): void {
    this.logger.info('Query user', this.auth.user);
    this.api.get<User>(`${this.URI_USER}/${this.auth.user}`).subscribe(user => {
      console.log(user);
    });
  }

}

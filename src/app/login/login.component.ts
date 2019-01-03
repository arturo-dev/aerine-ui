import { Component, OnInit } from '@angular/core';
import { AuthService } from '../provider/auth/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ServerService } from '../game/server/server.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: any;
  formLogin: FormGroup;

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private server: ServerService
  ) { }

  ngOnInit() {
    this.buildLogin();
    this.server.queryServers();
  }

  private buildLogin(): void {
    this.formLogin = this.fb.group({
      username: [environment.default ? environment.default.user.username : '', [Validators.required, Validators.email]],
      password: [environment.default ? environment.default.user.password : '', [Validators.required]]
    });
  }

  login(): void {
    this.auth.authenticate(
      this.formLogin.value.username, 
      this.formLogin.value.password
    ).then(() => {
      this.router.navigate(['game', 'tabs', 'home']); 
    });
  }

  signUpGoogle() {
    this.auth.authenticateByGoogle().then(user => {
      this.user = user;
    })
  }

}

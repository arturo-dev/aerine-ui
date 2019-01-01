import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { GooglePlayGamesServices } from '@ionic-native/google-play-games-services/ngx';
import { AuthService } from './provider/auth/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private googlePlayGamesServices: GooglePlayGamesServices,
    private auth: AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.auth.authenticate('arturo', '123456');

    this.platform.ready().then(() => {
      this.googlePlayGamesServices.auth()
        .then(() => {
          console.log('Logged in to Play Games Services')
          this.statusBar.styleDefault();
          this.splashScreen.hide();
        })
        .catch((e) => console.log('Error logging in Play Games Services', e));
    });

    
  }
}

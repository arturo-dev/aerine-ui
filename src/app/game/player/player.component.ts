import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/provider/logger/logger.service';
import { ApiService } from 'src/app/provider/api/api.service';
import { Player } from './player.model';
import { ServerService } from '../server/server.service';
import { ApiUri } from 'src/app/provider/api/api-uri';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  private FIND_BY_USER_AND_SERVER = '/findOneByUserAndServer';

  constructor(
    private logger: LoggerService,
    private api: ApiService,
    private user: UserService,
    private server: ServerService
  ) { }

  ngOnInit() {
    this.searchCurrentPlayer();
  }

  private searchCurrentPlayer() {
    this.logger.info('Querying current player');
    Promise.all([
      this.user.queryAuthUser(),
      this.server.currentServer()
    ]).then(([user, server]) => {
      const params = {
        user: user._links.self.href,
        server: server.href
      };
  
      this.api.get<Player>(`${ApiUri.PLAYER}${ApiUri.SEARCH}${this.FIND_BY_USER_AND_SERVER}`, {params: params}).subscribe(player => {
        this.logger.info('Recivied player', player);
      });
    });
  }

}

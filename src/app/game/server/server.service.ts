import { Injectable } from '@angular/core';
import { ApiResource } from 'src/app/provider/api/api-resource.model';
import { LoggerService } from 'src/app/provider/logger/logger.service';
import { ApiService } from 'src/app/provider/api/api.service';
import { ApiUri } from 'src/app/provider/api/api-uri';
import { ApiList } from 'src/app/provider/api/api-list.model';
import { ServerList, Server } from './server.model';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private servers: Server[];

  constructor(
    private logger: LoggerService,
    private api: ApiService
  ) { 
    this.queryServers();
  }

  get defaultServer(): ApiResource {
    return this.servers[0]._links.self;
  }

  async currentServer(): Promise<ApiResource> {
    return this.queryServers().then((servers: Server[]) => {
      return this.defaultServer;
    });
  }

  async queryServers(): Promise<Server[]> {
    if (this.servers) {
      return this.servers;
    }

    this.logger.info('Querying servers list');
    return this.api.get<ApiList<ServerList>>(`${ApiUri.SERVER}`).toPromise().then(servers => {
      this.logger.info('Servers available', servers);
      this.servers = servers._embedded.servers;
      return this.servers;
    });
  }
}

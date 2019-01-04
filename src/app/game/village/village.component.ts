import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/provider/api/api.service';
import { Village, VillageList } from './village.model';
import { LoggerService } from 'src/app/provider/logger/logger.service';
import { Build } from './build/build.model';
import { ApiResource } from 'src/app/provider/api/api-resource.model';
import { Player } from '../player/player.model';
import { ApiList } from 'src/app/provider/api/api-list.model';

@Component({
  selector: 'app-village',
  templateUrl: './village.component.html',
  styleUrls: ['./village.component.scss']
})
export class VillageComponent implements OnInit {

  @Input() player: Player;

  static ENDPOINT_VILLAGE = '/villages';

  villages: Village[];
  village: Village;
  resourceCurrentVillage: string;

  constructor(
    private api: ApiService,
    private logger: LoggerService
  ) { }

  ngOnInit() {
    this.queryVillages(this.player._links.villages);
  }

  private queryVillages(resource: ApiResource): void {
    this.logger.info(`Query villages`);
    this.api.get<ApiList<VillageList>>(resource.href).subscribe(villages => {
      this.logger.info(`Received villages:`, villages);
      
      this.villages = villages._embedded.villages;
      this.village = this.villages[0];
      this.resourceCurrentVillage = this.villages[0]._links.self.href;
      
      this.logger.info(`Selecting village:`, this.village);
    });
  }

  setVillage(resource: string): void {
    for (let village of this.villages) {
      if (village._links.self.href === resource) {
        this.village = village;
        this.logger.info(`Selecting village:`, this.village);
        break;
      }
    }
  }

}

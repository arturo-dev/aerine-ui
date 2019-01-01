import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/provider/api/api.service';
import { Village } from './village.model';
import { LoggerService } from 'src/app/provider/logger/logger.service';
import { Build } from './build/build.model';

@Component({
  selector: 'app-village',
  templateUrl: './village.component.html',
  styleUrls: ['./village.component.scss']
})
export class VillageComponent implements OnInit {

  @Input() idPlayer: number;
  @Output() onSelect = new EventEmitter<Village>();

  static ENDPOINT_VILLAGE = '/villages';

  villages: Village[];
  village: Village;

  constructor(
    private api: ApiService,
    private logger: LoggerService
  ) { }

  ngOnInit() {
    this.queryVillage(this.idPlayer);
  }

  private queryVillage(idPlayer: number): void {
    const params: any = {
      player: idPlayer
    };

    this.logger.info(`Query villages of player ${idPlayer}`);
    this.api.get<Village[]>(VillageComponent.ENDPOINT_VILLAGE, {params: params}).subscribe(villages => {
      this.logger.info(`Received villages:`, villages);
      
      this.villages = villages;
      this.village = this.villages[0];
      
      this.logger.info(`Selecting village:`, this.village);
      this.onSelect.emit(this.village);
    });
  }

}

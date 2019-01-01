import { Component, OnInit, Input } from '@angular/core';
import { LoggerService } from 'src/app/provider/logger/logger.service';
import { ApiService } from 'src/app/provider/api/api.service';
import { VillageComponent } from '../village.component';
import { Build } from './build.model';

@Component({
  selector: 'village-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss']
})
export class BuildComponent implements OnInit {

  @Input() idVillage: number;

  builds: Build[];

  constructor(
    private logger: LoggerService,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.queryBuilds(this.idVillage);
  }

  private queryBuilds(idVillage: number): void {
    this.logger.info(`Query builds of village ${idVillage}`);
    this.api.get<Build[]>(`${VillageComponent.ENDPOINT_VILLAGE}/${idVillage}/builds`).subscribe(builds => {
      this.logger.info(`Received builds:`, builds);
      this.builds = builds;
    });
  }

}

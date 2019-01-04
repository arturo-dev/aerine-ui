import { Component, OnInit, Input } from '@angular/core';
import { LoggerService } from 'src/app/provider/logger/logger.service';
import { ApiService } from 'src/app/provider/api/api.service';
import { VillageComponent } from '../village.component';
import { Build } from './build.model';
import { Village } from '../village.model';

@Component({
  selector: 'village-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss']
})
export class BuildComponent implements OnInit {

  @Input() village: Village;

  builds: Build[];

  constructor(
    private logger: LoggerService,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.builds = this.village.builds;
    this.builds.forEach(build => {
      
    });
  }

  private queryBuilds(idVillage: number): void {
    this.logger.info(`Query builds of village ${idVillage}`);
    this.api.get<Build[]>(`${VillageComponent.ENDPOINT_VILLAGE}/${idVillage}/builds`).subscribe(builds => {
      this.logger.info(`Received builds:`, builds);
      this.builds = builds;
    });
  }

}

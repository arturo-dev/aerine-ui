import { Coordinates } from './coordinates.model';
import { Build } from './build/build.model';
import { ApiResource } from 'src/app/provider/api/api-resource.model';
import { ApiLinks } from 'src/app/provider/api/api-links.model';

export class Village extends ApiLinks<VillageResources> {
    id: number;
    name: string;
    coordinates: Coordinates;
    resources: VillageResources;
    builds: Build[];
}

export class VillageResources {
    self: ApiResource;
    village: ApiResource;
    player: ApiResource;
}

export class VillageList {
    villages: Village[];
}
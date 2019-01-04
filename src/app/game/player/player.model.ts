import { ApiLinks } from 'src/app/provider/api/api-links.model';
import { ApiResource } from 'src/app/provider/api/api-resource.model';

export class Player extends ApiLinks<PlayerResources> {
    name: string;
}

export class PlayerResources {
    guild: ApiResource;
    self: ApiResource;
    player: ApiResource;
    server: ApiResource;
    user: ApiResource;
    villages: ApiResource;
}
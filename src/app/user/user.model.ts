import { ApiResource } from 'src/app/provider/api/api-resource.model';
import { ApiLinks } from 'src/app/provider/api/api-links.model';

export class User extends ApiLinks<UserResources> {
    username: string;
}

export class UserResources {
    self: ApiResource;
    user: ApiResource;
    player: ApiResource;
}
import { ApiLinks } from './../../provider/api/api-links.model';
import { ApiResource } from 'src/app/provider/api/api-resource.model';

export class Server extends ApiLinks<ServerResources> {
    name: string;
}

export class ServerResources {
    self: ApiResource;
    server: ApiResource;
}

export class ServerList {
    servers: Server[];
}
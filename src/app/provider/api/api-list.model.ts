import { ApiLinks } from './api-links.model';
import { ApiResource } from './api-resource.model';

export class ApiList<T> extends ApiLinks<ApiListResources> {
    _embedded: T;
    page: {
        size: number;
        totalElements: number;
        totalPages: number;
        number: number;
    }
}

export class ApiListResources {
    self: ApiResource;
    profile: ApiResource;
    search: ApiResource;
}
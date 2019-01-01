import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { ApiService } from '../api/api.service';

export function authFactory(auth: AuthService): {
    tokenGetter?: () => string | Promise<string>;
    headerName?: string;
    authScheme?: string;
    whitelistedDomains?: (string | RegExp)[];
    blacklistedRoutes?: (string | RegExp)[];
    throwNoTokenError?: boolean;
    skipWhenExpired?: boolean;
} {
    return {
        tokenGetter: () => auth.token,
        whitelistedDomains: [
          environment.api.domain
        ],
        blacklistedRoutes: [
          `${ApiService.URI}${AuthService.AUTH_ENDPOINT}`
        ]
    }
}
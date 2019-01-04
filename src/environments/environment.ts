// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: {
    protocol: 'http://',
    domain: 'localhost:8080',
    context: '/aerine-api',
    auth: {
      clientId: 'clientId',
      clientSecret: 'clientSecret',
      grant: 'password'
    }
  },
  log: {
    full: {
      http: false,
      handler: true
    },
    debug: false
  },
  google: {
    clientId: {
      web: '862749637734-i55p7r6mnqmmsnjau01jjm64r9dkqdme.apps.googleusercontent.com',
      android: '862749637734-ii1n74i15m2fhn9cuc33up7b74t0nft3.apps.googleusercontent.com'
    }
  },
  default: {
    user: {
      username: 'arturo',
      password: '123456'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

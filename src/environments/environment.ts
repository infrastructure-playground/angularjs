// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  host: 'http://localhost:8000',
  landingLogin: ['inventory', 'books'],
  firebase: {
    apiKey: 'AIzaSyDbUbmZzOS1ZWCJu6djbXB0wtx84DRnQQk',
    authDomain: 'dev-chat-ba080.firebaseapp.com',
    databaseURL: 'https://dev-chat-ba080.firebaseio.com',
    projectId: 'dev-chat-ba080',
    storageBucket: 'dev-chat-ba080.appspot.com',
    messagingSenderId: '530720493330'
  },
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

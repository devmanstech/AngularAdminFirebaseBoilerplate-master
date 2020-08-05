/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {},
  firebaseKey: {
    apiKey: 'AIzaSyBzUxmn-WTBLd-vbxdVsL5Nc7PnYSebEg4',
    authDomain: 'angularfbboilerplate.firebaseapp.com',
    databaseURL: 'https://angularfbboilerplate.firebaseio.com',
    projectId: 'angularfbboilerplate',
    storageBucket: 'angularfbboilerplate.appspot.com',
    messagingSenderId: '446652788795',
    appId: '1:446652788795:web:d3fdd45c7b50106ffc6c1e',
    measurementId: 'G-R72JJGDT6L',
  },
  tosUrl: 'https://www.exanple.com/tosUrl',
  privacyPolicyUrl: 'https://www.exanple.com/privacyPolicyUrl',
  PublicDSN: 'https://17274e20da9d42d3822dc1a0faf6121e@o416312.ingest.sentry.io/5310354',
};

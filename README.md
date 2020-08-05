[![DepShield Badge](https://depshield.sonatype.org/badges/owner/repository/depshield.svg)](https://depshield.github.io)

Simple 5 pages boilerplate project with :
-angular 10 ( strict, ssr, i18n )
-firebase( firestore + rules, analytics, hosting, auth, functions )
-cypress
-sentry

Pages :
- user registration page with form containing : user name + phone number + email
- dashboard page based on ngx-admin with sample dashboard + user name on upper right corner + menu with logout and profile
- user profile page to display and update user name + phone + email
- login page ( guard access to dashboard if user not logged in ) using ngx-auth-firebaseui with only phone authentication enabled
- email validation check page ( guard access to dashboard if email not validated - after login ) allow user to change email or resend validation email (with firebase)

Validations:
- ser name validation 30 characters max / 2 min - only alphabetic
- phone number - validated by libphonenumber-js **not needed**
- validate email

Clarifications :
- sample dashboard can be copied from ngx-admin demo - not connected to any data source - use dark theme
- user data stored in firestore + user angularfire to display/update 
- setup security rules so only logged in user can access its own data
- simple cloud function that log the user name to Sentry when the user name is changed
- all api keys in one place **see angular environment file**
- i18n with langage switcher ( only english and Indi ) - change the content of the menu labels only

Tools :
- Use Angular 10 strict mode **postponed to ngx-admin updated**
- All the tools used here have a free tier / register your own instances and get your own api keys 
- Setup Sentry with angular and add script/npm command to upload source maps
- Setup angular ssr **postponed**
- add script/npm command to deploy to firebase hosting 
- Setup Cypress and test ( on firebase hosting / use prescottprue / cypress-firebase ) scenario = register + login process + change user name + clear firebase when test finished
- Setup Firebase analytics for login and logout events

any suggestion to improve quality is welcome ( lib / tool )

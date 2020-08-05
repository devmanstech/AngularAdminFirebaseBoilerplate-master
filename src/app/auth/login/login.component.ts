import { Component, OnInit } from '@angular/core';
// import { NbLoginComponent } from '@nebular/auth';
import { Router } from '@angular/router';
import {
  FirebaseuiAngularLibraryService,
  FirebaseUISignInFailure,
  FirebaseUISignInSuccessWithAuthResult,
} from 'firebaseui-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireAnalytics } from '@angular/fire/analytics';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private firebaseuiAngularLibraryService: FirebaseuiAngularLibraryService,
    analytics: AngularFireAnalytics,
  ) {
    console.log('login component');
    // this is working
    this.router.navigate(['/pages/dashboard']);
    console.log('this is working');


    firebaseuiAngularLibraryService.firebaseUiInstance.disableAutoSignIn();

    this.afAuth.authState.subscribe((response) => {
      // if needed, do a redirect in here
      if (response) {
        this.router.navigate(['/pages/dashboard']);
      }
    });

    analytics.logEvent('login');
  }

  ngOnInit(): void {
    // this.afAuth.authState.subscribe(d => console.log(d));
  }

  successCallback(signInSuccessData: FirebaseUISignInSuccessWithAuthResult) {
    console.log(signInSuccessData);
    // console.log(this.SignUp("test@gmail.com","121212"));

    this.router.navigate(['/pages/dashboard']);
  }

  errorCallback(errorData: FirebaseUISignInFailure) {
    console.log(errorData);
  }
}

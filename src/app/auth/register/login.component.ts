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
    firebaseuiAngularLibraryService.firebaseUiInstance.disableAutoSignIn();

    this.afAuth.authState.subscribe((response) => {
      if (response) {
        this.router.navigate(['/pages/dashboard']);
      }
    });
    analytics.logEvent('register');
  }

  ngOnInit(): void {
    // this.afAuth.authState.subscribe(d => console.log(d));
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  successCallback(signInSuccessData: FirebaseUISignInSuccessWithAuthResult) {
    this.router.navigate(['/pages/dashboard']);
  }

  errorCallback(errorData: FirebaseUISignInFailure) {
    console.log(errorData);
  }
}

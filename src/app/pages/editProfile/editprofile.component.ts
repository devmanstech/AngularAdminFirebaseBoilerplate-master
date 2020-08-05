import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { MENU_ITEMS } from '../pages-menu';

@Component({
  selector: 'ngx-editprofile',
  styleUrls: ['./editprofile.component.scss'],
  templateUrl: './editprofile.component.html',
})
export class EditprofileComponent implements OnInit {
  // menu = MENU_ITEMS;
  user: any;
  loginError: any;
  messageString: string;
  statusMessage: string;

  editForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    full_name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
    ]),
  });

  isEmail = false;
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  ngOnInit() {
    this.afAuth.authState.subscribe(
      (user) => {
        this.user = user;
        if (user && user.email && user.displayName) {
          this.isEmail = true;
          if (!user.emailVerified) {
            this.statusMessage = 'Please verify your email id';
          } else {
            this.router.navigate(['pages/dashboard']);
          }
          this.editForm.setValue({
            email: user.email,
            full_name: user.displayName,
          });
        } else {
          this.statusMessage = 'Please Update your email';
        }
      },
      (error) => console.log('ngOnInit editprofilr error', error),
    );
  }

  onSubmit(formValue: any): void {
    console.log(this.editForm.controls);
    if (this.editForm.valid) {
      this.afAuth.currentUser
        .then(
          (user) => {
            console.log('submit', user);
            user.updateEmail(formValue.value.email);
            user.updateProfile({
              displayName: formValue.value.full_name,
            });
            console.log('submit2', user);
            this.isEmail = true;
            setTimeout(() => {
              user.sendEmailVerification();
              this.messageString =
                'A verification email has been sent , please verify your email id';
            }, 1000);
            //this.router.navigate(['pages/dashboard']);
          },
          (err) => {
            console.log('err', err);
          },
        )
        .catch((error) => console.log('onSubmit editprofilr error', error));
    }
  }

  rensendCode() {
    this.afAuth.authState.subscribe(
      (user) => {
        user.sendEmailVerification();
        this.messageString = 'A verification email has been sent , please verify your email id';
        // user.emailVerified
      },
      (error) => console.log('ngOnInit editprofilr error', error),
    );
  }
}

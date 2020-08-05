import { Component, OnInit } from '@angular/core';

// import { NbLoginComponent } from '@nebular/auth';
import { Router, ActivatedRoute } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'ngx-emailVerify',
  templateUrl: './emailVerify.component.html',
  styleUrls: ['./emailVerify.component.scss'],
})
export class EmailVerifyComponent implements OnInit {
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    public route: ActivatedRoute,
  ) {}

  public mode: string;
  public oobCode: string;

  ngOnInit(): void {
    this.afAuth.signOut();

    // this.afAuth.authState.subscribe(d => console.log(d));

    this.mode = this.route.snapshot.queryParamMap.get('mode');
    this.oobCode = this.route.snapshot.queryParamMap.get('oobCode');
    // this.afAuth.applyActionCode
    this.afAuth.applyActionCode(this.oobCode).then(() => {
      //localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }
}

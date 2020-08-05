import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { take, switchMap } from 'rxjs/operators';

@Injectable()
export class EmailGuard implements CanActivate {
  constructor(private auth: AngularFireAuth, private router: Router) {}

  canActivate() {
    // console.log("url1", this.routerStateSnapshot.url);

    return this.auth.authState.pipe(
      take(1),
      switchMap(async (authState) => {
        if (authState) {
          // check are user is logged in
          const token = await authState.getIdTokenResult();
          console.log(token);
          if (!token.claims.email || !token.claims.email_verified) {
            this.router.navigate(['/pages/edit-profile']);
            return true;
          }
          return true;
        }
        this.router.navigate(['/login']);
        return false;
      }),
    );
  }
}

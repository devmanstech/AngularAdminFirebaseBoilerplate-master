import { NgModule } from '@angular/core';
// import { AuthGuard } from "./auth.guard";
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';
// import { canActivate } from '@angular/fire/auth-guard';

import { RouterModule, Routes } from '@angular/router';

// import { EmailGuard } from "./email.guard";

import { LoginComponent } from './auth/login/login.component';
import { LoginComponent as RegisterComponent } from './auth/register/login.component';
import { EmailVerifyComponent } from './auth/emailVerify/emailVerify.component';

//const adminOnly = () => hasCustomClaim('admin');

const redirectAuthorizedToLogin = () => redirectLoggedInTo(['pages/dashboard']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
// import { EditprofileComponent } from "./pages/editProfile/editprofile.component";

export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  // {
  //   path: 'edit-profile',
  //   component: EditprofileComponent,
  //   canActivate: [ AngularFireAuthGuard ], data: { authGuardPipe: redirectUnauthorizedToLogin }
  // },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectAuthorizedToLogin },
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectAuthorizedToLogin },
  },
  {
    path: 'emailVerify',
    component: EmailVerifyComponent,
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];

// const config: ExtraOptions = {
//   useHash: false,
// };

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

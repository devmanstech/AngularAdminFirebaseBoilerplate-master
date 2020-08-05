import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { ECommerceComponent } from './e-commerce/e-commerce.component';
// import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

import { EditprofileComponent } from './editProfile/editprofile.component';

import { EmailGuard } from '../email.guard';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [EmailGuard],
      },
      {
        path: 'edit-profile',
        component: EditprofileComponent,
        //canActivate: [ EmailVerifyGuard ],
      },
      // {
      //   path: 'edit-profile',
      //   loadChildren: () => import('./editProfile/editprofile.module')
      //     .then(m => m.EditprofileModule),
      // },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'dashboard',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}

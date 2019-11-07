import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {LoginModule} from '../views/login';
import {ShellGuard} from './shell.guard';
import {LoginGuard} from './login.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('../views/login/login.module').then(m => LoginModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'shell',
    loadChildren: () =>
      import('../views/shell/shell.module').then(m => m.ShellModule),
    canActivate: [ShellGuard],
    canLoad: [ShellGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShellGuard} from './shell.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('../views/login/login.module').then(m => m.LoginModule)
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

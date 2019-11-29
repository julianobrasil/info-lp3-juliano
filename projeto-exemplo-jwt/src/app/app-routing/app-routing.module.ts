import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShellGuard} from './shell.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('../views/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'novo-usuario',
    loadChildren: () =>
      import('../views/novo-usuario/novo-usuario.module').then((m) => m.NovoUsuarioModule),
  },
  {
    path: 'shell',
    loadChildren: () => import('../views/shell/shell.module').then((m) => m.ShellModule),
    canActivate: [ShellGuard],
    canLoad: [ShellGuard],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}

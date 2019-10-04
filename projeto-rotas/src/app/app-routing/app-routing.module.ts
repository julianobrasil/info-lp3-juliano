import {NgModule} from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import {LoginComponent} from '../views/login/login/login.component';
import {AppGuard} from './app.guard';

const routes: Route[] = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sistema',
    loadChildren: () => import('src/app/views/sistema/sistema.module')
                            .then((m) => m.SistemaModule),
    canLoad: [AppGuard],
    canActivate: [AppGuard],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

import {NgModule} from '@angular/core';
import {Router, Route, RouterModule} from '@angular/router';

import {UsuarioComponent} from '../usuario/usuario.component';
import {UsuarioRoutingComponent} from './usuario-routing.component';

const routes: Route[] = [
  {
    path: '',
    component: UsuarioRoutingComponent,
    children: [
      {
        path: '',
        component: UsuarioComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioRoutingModule {}

import {NgModule} from '@angular/core';
import {Router, Route, RouterModule} from '@angular/router';

import {UsuarioListComponent} from '../usuario-list/usuario-list.component';
import {UsuarioListRoutingComponent} from './usuario-list-routing.component';

const routes: Route[] = [
  {
    path: '',
    component: UsuarioListRoutingComponent,
    children: [
      {
        path: '',
        component: UsuarioListComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioListRoutingModule {}

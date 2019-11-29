import {NgModule} from '@angular/core';
import {Router, Route, RouterModule} from '@angular/router';

import {UsuarioListMenuComponent} from '../usuario-list-menu/usuario-list-menu.component';
import {UsuarioListMenuRoutingComponent} from './usuario-list-menu-routing.component';

const routes: Route[] = [
  {
    path: '',
    component: UsuarioListMenuRoutingComponent,
    children: [
      {
        path: '',
        component: UsuarioListMenuComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioListMenuRoutingModule {}

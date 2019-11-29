import {NgModule} from '@angular/core';
import {Router, Route, RouterModule} from '@angular/router';

import {UsuarioContainerComponent} from '../usuario-container/usuario-container.component';
import {UsuarioContainerRoutingComponent} from './usuario-container-routing.component';

const routes: Route[] = [
  {
    path: '',
    component: UsuarioContainerRoutingComponent,
    children: [
      {
        path: '',
        component: UsuarioContainerComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioContainerRoutingModule {}

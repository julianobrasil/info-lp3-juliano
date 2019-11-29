import {NgModule} from '@angular/core';
import {Router, Route, RouterModule} from '@angular/router';

import {UsuarioFormComponent} from '../usuario-form/usuario-form.component';
import {UsuarioFormRoutingComponent} from './usuario-form-routing.component';

const routes: Route[] = [
  {
    path: '',
    component: UsuarioFormRoutingComponent,
    children: [
      {
        path: '',
        component: UsuarioFormComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioFormRoutingModule {}

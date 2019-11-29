import {NgModule} from '@angular/core';
import {Router, Route, RouterModule} from '@angular/router';

import {NovoUsuarioComponent} from '../novo-usuario/novo-usuario.component';
import {NovoUsuarioRoutingComponent} from './novo-usuario-routing.component';

const routes: Route[] = [
  {
    path: '',
    component: NovoUsuarioRoutingComponent,
    children: [
      {
        path: '',
        component: NovoUsuarioComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovoUsuarioRoutingModule {}

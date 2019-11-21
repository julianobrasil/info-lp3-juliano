import {NgModule} from '@angular/core';
import {Router, Route, RouterModule} from '@angular/router';

import {MinhaAplicacaoComponent} from '../minha-aplicacao/minha-aplicacao.component';
import {MinhaAplicacaoRoutingComponent} from './minha-aplicacao-routing.component';

const routes: Route[] = [
  {
    path: '',
    component: MinhaAplicacaoRoutingComponent,
    children: [
      {
        path: '',
        component: MinhaAplicacaoComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinhaAplicacaoRoutingModule {}

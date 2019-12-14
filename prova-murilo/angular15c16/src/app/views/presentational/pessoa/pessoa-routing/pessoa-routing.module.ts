import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { PessoaComponent } from '../pessoa/pessoa.component';
import { PessoaRoutingComponent } from './pessoa-routing.component';

const routes: Route[] = [
  {
    path: '',
    component: PessoaRoutingComponent,
    children: [
      {
        path: '',
        component: PessoaComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PessoaRoutingModule {}

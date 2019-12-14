import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { PessoaContainerComponent } from '../pessoa-container/pessoa-container.component';
import { PessoaContainerRoutingComponent } from './pessoa-container-routing.component';

const routes: Route[] = [
  {
    path: '',
    component: PessoaContainerRoutingComponent,
    children: [
      {
        path: '',
        component: PessoaContainerComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PessoaContainerRoutingModule {}

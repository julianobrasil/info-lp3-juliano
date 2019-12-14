import { NgModule } from '@angular/core';
import {Route, RouterModule } from '@angular/router';

import { PessoaListComponent } from '../pessoa-list/pessoa-list.component';
import { PessoaListRoutingComponent } from './pessoa-list-routing.component';

const routes: Route[] = [
  {
    path: '',
    component: PessoaListRoutingComponent,
    children: [
      {
        path: '',
        component: PessoaListComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PessoaListRoutingModule {}

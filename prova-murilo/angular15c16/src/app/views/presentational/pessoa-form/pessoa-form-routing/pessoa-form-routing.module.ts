import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { PessoaFormComponent } from '../pessoa-form/pessoa-form.component';
import { PessoaFormRoutingComponent } from './pessoa-form-routing.component';

const routes: Route[] = [
  {
    path: '',
    component: PessoaFormRoutingComponent,
    children: [
      {
        path: '',
        component: PessoaFormComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PessoaFormRoutingModule {}

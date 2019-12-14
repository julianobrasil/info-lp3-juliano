import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ShellComponent } from '../shell/shell.component';
import { ShellRoutingComponent } from './shell-routing.component';

const routes: Route[] = [
  {
    path: '',
    component: ShellRoutingComponent,
    children: [
      {
        path: '',
        component: ShellComponent,
        children: [
          {
            path: 'pessoa',
            loadChildren: () =>
              import('~views/pessoa/pessoa-container.module').then(
                m => m.PessoaContainerModule,
              ),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShellRoutingModule {}

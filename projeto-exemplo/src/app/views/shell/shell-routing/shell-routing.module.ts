import {NgModule} from '@angular/core';
import {Router, Route, RouterModule} from '@angular/router';

import {ShellComponent} from '../shell/shell.component';
import {ShellRoutingComponent} from './shell-routing.component';

const routes: Route[] = [
  {
    path: '',
    component: ShellRoutingComponent,
    children: [
      {
        path: '',
        component: ShellComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShellRoutingModule {}

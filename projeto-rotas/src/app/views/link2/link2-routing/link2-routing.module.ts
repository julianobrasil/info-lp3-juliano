import {NgModule} from '@angular/core';
import {Router, Route, RouterModule} from '@angular/router';

import {Link2Component} from '../link2/link2.component';
import {Link2RoutingComponent} from './link2-routing.component';

const routes: Route[] = [
  {
    path: '',
    component: Link2RoutingComponent,
    children: [
      {
        path: '',
        component: Link2Component,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link2RoutingModule {}

import {NgModule} from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import {ShellComponent} from '../shell/shell.component';
import {Link1Component} from '../link1/link1.component';
import {Link2Guard} from './link-2.guard';
import {Link3Guard} from './link-3.guard';

const routes: Route[] = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'link-1',
        component: Link1Component,
      },
      {
        path: 'link-2',
        loadChildren: () => import('src/app/views/link2/link2.module')
                                .then((m) => m.Link2Module),
        canActivate: [Link2Guard],
        canLoad: [Link2Guard],
      },
      {
        path: 'link-3',
        loadChildren: () => import('@views/administracao')
                                .then((m) => m.AdministracaoModule),
        canActivate: [Link3Guard],
        canLoad: [Link3Guard],
      }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class SistemaRoutingModule {
}

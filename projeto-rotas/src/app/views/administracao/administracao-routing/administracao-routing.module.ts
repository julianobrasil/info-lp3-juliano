import {NgModule} from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import {AdministracaoComponent} from '../administracao/administracao.component';
import {AdministracaoRoutingComponent} from './administracao-routing.component';

const routes: Route[] = [
  {
    path: '',
    component: AdministracaoRoutingComponent,
    children: [
      {
        path: '',
        component: AdministracaoComponent,
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
export class AdministracaoRoutingModule {
}

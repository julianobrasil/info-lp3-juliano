import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdministracaoComponent} from './administracao/administracao.component';
import {
  AdministracaoRoutingComponent,
} from './administracao-routing/administracao-routing.component';
import {
  AdministracaoRoutingModule,
} from './administracao-routing/administracao-routing.module';

@NgModule({
  declarations: [
    AdministracaoComponent,
    AdministracaoRoutingComponent,
  ],
  imports: [CommonModule, AdministracaoRoutingModule]
})
export class AdministracaoModule {
}

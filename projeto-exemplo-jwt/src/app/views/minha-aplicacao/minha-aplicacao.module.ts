import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {MinhaAplicacaoComponent} from './minha-aplicacao/minha-aplicacao.component';
import {MinhaAplicacaoRoutingModule} from './minha-aplicacao-routing/minha-aplicacao-routing.module';
import {MinhaAplicacaoRoutingComponent} from './minha-aplicacao-routing/minha-aplicacao-routing.component';
import {CustomMaterialModule} from './custom-material.module';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaDeUsuariosComponent } from './lista-de-usuarios/lista-de-usuarios.component';

@NgModule({
  declarations: [
    MinhaAplicacaoRoutingComponent,
    MinhaAplicacaoComponent,
    FormularioComponent,
    ListaDeUsuariosComponent,
  ],
  imports: [
    /** ANGULAR IMPORTS */
    CommonModule,
    ReactiveFormsModule,

    /** MinhaAplicacaoModule IMPORTS */
    MinhaAplicacaoRoutingModule,
    CustomMaterialModule,
  ],
  exports: [MinhaAplicacaoComponent],
})
export class MinhaAplicacaoModule {}

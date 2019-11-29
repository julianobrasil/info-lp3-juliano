import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {NovoUsuarioComponent} from './novo-usuario/novo-usuario.component';
import {NovoUsuarioRoutingModule} from './novo-usuario-routing/novo-usuario-routing.module';
import {NovoUsuarioRoutingComponent} from './novo-usuario-routing/novo-usuario-routing.component';
import {CustomMaterialModule} from './custom-material.module';

@NgModule({
  declarations: [
    NovoUsuarioRoutingComponent,
    NovoUsuarioComponent
  ],
  imports: [
    /** ANGULAR IMPORTS */
    CommonModule,
    ReactiveFormsModule,

    /** NovoUsuarioModule IMPORTS */
    NovoUsuarioRoutingModule,
    CustomMaterialModule,
  ],
  exports: [NovoUsuarioComponent],
})
export class NovoUsuarioModule {}

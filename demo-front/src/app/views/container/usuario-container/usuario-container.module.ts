import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {UsuarioContainerComponent} from './usuario-container/usuario-container.component';
import {UsuarioContainerRoutingModule} from './usuario-container-routing/usuario-container-routing.module';
import {UsuarioContainerRoutingComponent} from './usuario-container-routing/usuario-container-routing.component';
import {CustomMaterialModule} from './custom-material.module';
import {UsuarioModule} from '~views/usuario/usuario.module';

@NgModule({
  declarations: [UsuarioContainerRoutingComponent, UsuarioContainerComponent],
  imports: [
    /** ANGULAR IMPORTS */
    CommonModule,
    ReactiveFormsModule,

    /** UsuarioContainerModule IMPORTS */
    UsuarioContainerRoutingModule,
    CustomMaterialModule,
    UsuarioModule,
  ],
  exports: [UsuarioContainerComponent],
})
export class UsuarioContainerModule {}

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {UsuarioComponent} from './usuario/usuario.component';
import {UsuarioRoutingComponent} from './usuario-routing/usuario-routing.component';

import {UsuarioRoutingModule} from './usuario-routing/usuario-routing.module';
import {CustomMaterialModule} from './custom-material.module';
import {UsuarioFormModule} from '~views/usuario/usuario-form.module';
import {UsuarioListModule} from '~views/usuario/usuario-list.module';

@NgModule({
  declarations: [UsuarioRoutingComponent, UsuarioComponent],
  imports: [
    /** ANGULAR IMPORTS */
    CommonModule,
    ReactiveFormsModule,

    /** UsuarioModule IMPORTS */
    UsuarioRoutingModule,
    CustomMaterialModule,

    /** OTHER IMPORTS */
    UsuarioFormModule,
    UsuarioListModule,
  ],
  exports: [UsuarioComponent],
})
export class UsuarioModule {}

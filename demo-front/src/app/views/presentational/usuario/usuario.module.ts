import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {UsuarioComponent} from './usuario/usuario.component';
import {UsuarioRoutingModule} from './usuario-routing/usuario-routing.module';
import {UsuarioRoutingComponent} from './usuario-routing/usuario-routing.component';
import {CustomMaterialModule} from './custom-material.module';
import { UsuarioListModule } from '../usuario-list';
import { UsuarioFormModule } from '../usuario-form';

@NgModule({
  declarations: [
    UsuarioRoutingComponent,
    UsuarioComponent
  ],
  imports: [
    /** ANGULAR IMPORTS */
    CommonModule,
    ReactiveFormsModule,

    /** UsuarioModule IMPORTS */
    UsuarioRoutingModule,
    CustomMaterialModule,

    /** OUTROS IMPORTS */
    UsuarioListModule,
    UsuarioFormModule,
  ],
  exports: [UsuarioComponent],
})
export class UsuarioModule {}

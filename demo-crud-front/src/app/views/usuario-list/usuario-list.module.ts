import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {UsuarioListComponent} from './usuario-list/usuario-list.component';
import {UsuarioListRoutingComponent} from './usuario-list-routing/usuario-list-routing.component';

import {UsuarioListRoutingModule} from './usuario-list-routing/usuario-list-routing.module';
import {CustomMaterialModule} from './custom-material.module';
import {UsuarioListMenuModule} from '~views/usuario/usuario-list-menu.module';

@NgModule({
  declarations: [UsuarioListRoutingComponent, UsuarioListComponent],
  imports: [
    /** ANGULAR IMPORTS */
    CommonModule,
    ReactiveFormsModule,

    /** UsuarioListModule IMPORTS */
    UsuarioListRoutingModule,
    CustomMaterialModule,

    UsuarioListMenuModule,
  ],
  exports: [UsuarioListComponent],
})
export class UsuarioListModule {}

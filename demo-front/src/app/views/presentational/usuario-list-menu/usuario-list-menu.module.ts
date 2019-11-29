import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {UsuarioListMenuComponent} from './usuario-list-menu/usuario-list-menu.component';
import {UsuarioListMenuRoutingModule} from './usuario-list-menu-routing/usuario-list-menu-routing.module';
import {UsuarioListMenuRoutingComponent} from './usuario-list-menu-routing/usuario-list-menu-routing.component';
import {CustomMaterialModule} from './custom-material.module';

@NgModule({
  declarations: [
    UsuarioListMenuRoutingComponent,
    UsuarioListMenuComponent
  ],
  imports: [
    /** ANGULAR IMPORTS */
    CommonModule,
    ReactiveFormsModule,

    /** UsuarioListMenuModule IMPORTS */
    UsuarioListMenuRoutingModule,
    CustomMaterialModule,
  ],
  exports: [UsuarioListMenuComponent],
})
export class UsuarioListMenuModule {}

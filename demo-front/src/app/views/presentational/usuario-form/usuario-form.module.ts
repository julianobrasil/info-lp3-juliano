import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {UsuarioFormComponent} from './usuario-form/usuario-form.component';
import {UsuarioFormRoutingModule} from './usuario-form-routing/usuario-form-routing.module';
import {UsuarioFormRoutingComponent} from './usuario-form-routing/usuario-form-routing.component';
import {CustomMaterialModule} from './custom-material.module';

@NgModule({
  declarations: [
    UsuarioFormRoutingComponent,
    UsuarioFormComponent
  ],
  imports: [
    /** ANGULAR IMPORTS */
    CommonModule,
    ReactiveFormsModule,

    /** UsuarioFormModule IMPORTS */
    UsuarioFormRoutingModule,
    CustomMaterialModule,
  ],
  exports: [UsuarioFormComponent],
})
export class UsuarioFormModule {}

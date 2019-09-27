import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormularioComponent} from './formulario/formulario.component';
import {
  ListaDeUsuariosComponent,
} from './lista-de-usuarios/lista-de-usuarios.component';
import {MaterialCustomModule} from './custom-material.module';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    FormularioComponent,
    ListaDeUsuariosComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialCustomModule,
  ],
  exports: [
    FormularioComponent,
    ListaDeUsuariosComponent,
  ],
})
export class MinhaAplicacaoModule {
}

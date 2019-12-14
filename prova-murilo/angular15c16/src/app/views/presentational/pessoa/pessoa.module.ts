import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PessoaComponent } from './pessoa/pessoa.component';
import { PessoaRoutingModule } from './pessoa-routing/pessoa-routing.module';
import { PessoaRoutingComponent } from './pessoa-routing/pessoa-routing.component';
import { CustomMaterialModule } from './custom-material.module';
import { PessoaListModule } from '../pessoa-list';
import { PessoaFormModule } from '../pessoa-form';

@NgModule({
  declarations: [
    PessoaRoutingComponent,
    PessoaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    PessoaRoutingModule,
    CustomMaterialModule,

    PessoaListModule,
    PessoaFormModule,
  ],
  exports: [PessoaComponent],
})
export class PessoaModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PessoaContainerComponent } from './pessoa-container/pessoa-container.component';
import { PessoaContainerRoutingModule } from './pessoa-container-routing/pessoa-container-routing.module';
import { PessoaContainerRoutingComponent } from './pessoa-container-routing/pessoa-container-routing.component';
import { CustomMaterialModule } from './custom-material.module';
import { PessoaModule } from '~views/pessoa/pessoa.module';

@NgModule({
  declarations: [PessoaContainerRoutingComponent, PessoaContainerComponent],
  imports: [
    /** ANGULAR IMPORTS */
    CommonModule,
    ReactiveFormsModule,

    /** PessoaContainerModule IMPORTS */
    PessoaContainerRoutingModule,
    CustomMaterialModule,
    PessoaModule,
  ],
  exports: [PessoaContainerComponent],
})
export class PessoaContainerModule {}

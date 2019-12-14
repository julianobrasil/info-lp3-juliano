import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { PessoaListRoutingModule } from './pessoa-list-routing/pessoa-list-routing.module';
import { PessoaListRoutingComponent } from './pessoa-list-routing/pessoa-list-routing.component';
import { CustomMaterialModule } from './custom-material.module';

@NgModule({
  declarations: [PessoaListRoutingComponent, PessoaListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    PessoaListRoutingModule,
    CustomMaterialModule,
  ],
  exports: [PessoaListComponent],
})
export class PessoaListModule {}

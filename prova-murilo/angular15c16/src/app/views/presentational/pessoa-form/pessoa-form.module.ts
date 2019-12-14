import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { PessoaFormRoutingModule } from './pessoa-form-routing/pessoa-form-routing.module';
import { PessoaFormRoutingComponent } from './pessoa-form-routing/pessoa-form-routing.component';
import { CustomMaterialModule } from './custom-material.module';

@NgModule({
  declarations: [
    PessoaFormRoutingComponent,
    PessoaFormComponent
  ],
  imports: [
    /** ANGULAR IMPORTS */
    CommonModule,
    ReactiveFormsModule,

    /** PessoaFormModule IMPORTS */
    PessoaFormRoutingModule,
    CustomMaterialModule,
  ],
  exports: [PessoaFormComponent],
})
export class PessoaFormModule {}

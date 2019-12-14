import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaContainerComponent } from './pessoa-container/pessoa-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PessoaModule } from '../pessoa/pessoa.module';



@NgModule({
  declarations: [PessoaContainerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    PessoaModule,
  ],
  exports: [PessoaContainerComponent],
})
export class PessoaContainerModule { }

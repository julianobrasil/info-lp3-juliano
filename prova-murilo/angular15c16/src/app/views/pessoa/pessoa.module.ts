import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaFormModule } from '../pessoa-form/pessoa-form.module';
import { PessoaListModule } from '../pessoa-list/pessoa-list.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    PessoaFormModule,
    PessoaListModule,
  ]
})
export class PessoaModule { }

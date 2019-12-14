import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PessoaListComponent } from './../pessoa-list/pessoa-list/pessoa-list.component';



@NgModule({
  declarations: [PessoaListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [PessoaListComponent],
})
export class PessoaListModule { }

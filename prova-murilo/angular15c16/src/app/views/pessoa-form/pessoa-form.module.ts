import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PessoaFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [PessoaFormComponent],
})
export class PessoaFormModule { }

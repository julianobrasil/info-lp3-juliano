import { Injectable } from '@angular/core';

export interface PessoaFormComponentData {
  id?: string;
  nome: string;
  animal: string;
}

@Injectable({providedIn: 'root'})
export class PessoaFormComponentService {}

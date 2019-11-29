import {Injectable} from '@angular/core';

export interface UsuarioFormComponentData {
    id?: string;
    nome: string;
    email: string;
    ativo: boolean;
}

@Injectable({providedIn: 'root'})
export class UsuarioFormComponentService {}

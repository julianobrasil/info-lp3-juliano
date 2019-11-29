import {Injectable} from '@angular/core';

export interface UsuarioFormComponentData {
  id?: string;
  name: string;
  username: string;
  password?: string;
  active: boolean;
}

@Injectable({providedIn: 'root'})
export class UsuarioFormComponentService {}

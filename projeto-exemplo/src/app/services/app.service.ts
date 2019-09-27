import {Injectable} from '@angular/core';

export interface Usuario {
  id: number;
  nome: string;
  idade: number;
}

@Injectable({providedIn: 'root'})
export class AppService {
  usuarios: Usuario[] = [];
}

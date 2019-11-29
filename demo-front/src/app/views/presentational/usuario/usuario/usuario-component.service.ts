import {Injectable} from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UsuarioComponentService {
  operacaoDeBancoFinalizada$: Subject<void> = new Subject<void>();
}

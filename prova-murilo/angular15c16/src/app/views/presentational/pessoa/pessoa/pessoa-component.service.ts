import {Injectable} from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PessoaComponentService {
  operacaoDeBancoFinalizada$: Subject<void> = new Subject<void>();
}

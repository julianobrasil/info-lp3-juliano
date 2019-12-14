import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';

import { BehaviorSubject, Subject } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';

import { PessoaContainerComponentService } from './pessoa-container-component.service';
import { Pessoa } from './../../../data-access/domain/pessoa';
import { PessoaComponentService } from './../../pessoa/pessoa/pessoa-component.service';

@Component({
  selector: 'app-pessoa-container',
  templateUrl: './pessoa-container.component.html',
  styleUrls: ['./pessoa-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PessoaContainerComponent implements OnDestroy {
  _pessoas$: BehaviorSubject<Pessoa[]> = new BehaviorSubject<Pessoa[]>([]);

  /** Teardown observables subscriptions */
  private _destroy$: Subject<void> = new Subject<void>();

  constructor(
    private _componentService: PessoaContainerComponentService,
    private _pessoaService: PessoaComponentService,
  ) {
    console.log("constructor-container");
    this._componentService.findAllPessoas().subscribe((ps: Pessoa[]) => {
      this._pessoas$.next(ps);
    });
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
    if (this._destroy$ && !this._destroy$.closed) {
      this._destroy$.next();
      this._destroy$.complete();
    }

    if (this._pessoas$ && !this._pessoas$.closed) {
      this._pessoas$.complete();
    }
  }

  _gravaPessoa(pessoa: Pessoa) {
    this._componentService
      .savePessoa({...pessoa})
      .pipe(withLatestFrom(this._pessoas$))
      .subscribe(([ps, pessoas]) => {
        const index = pessoas.findIndex((p: Pessoa) => p.id === ps.id);

        if (index < 0) {
          pessoas.push(ps);
        } else {
          pessoas.splice(index, 1, ps);
        }

        this._pessoas$.next([...pessoas]);

        this._pessoaService.operacaoDeBancoFinalizada$.next();
      });
  }
}

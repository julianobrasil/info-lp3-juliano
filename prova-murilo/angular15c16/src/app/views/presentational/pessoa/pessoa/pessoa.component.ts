import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter, OnDestroy,
} from '@angular/core';

import {PessoaComponentService} from './pessoa-component.service';
import {Pessoa} from '~data-access/domain/pessoa';
import {FormControl, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PessoaComponent implements OnDestroy {
  @Input()
  pessoas: Pessoa[] = [];

  @Output()
  saved: EventEmitter<Pessoa> = new EventEmitter<Pessoa>();

  @Output()
  removed: EventEmitter<Pessoa> = new EventEmitter<Pessoa>();

  _pessoaCtrl: FormControl = new FormControl(null, Validators.required);

  /** Teardown observables subscriptions */
  private _destroy$: Subject<void> = new Subject<void>();

  constructor(private _componentService: PessoaComponentService) {
    this._componentService.operacaoDeBancoFinalizada$
      .pipe(takeUntil(this._destroy$))
      .subscribe(() => {
        this._pessoaCtrl.reset();
      });
  }

  ngOnDestroy(): void {
    if (this._destroy$ && !this._destroy$.closed) {
      this._destroy$.next();
      this._destroy$.complete();
    }
  }

  _gravaPessoa() {
    this.saved.emit({...this._pessoaCtrl.value});
  }
}

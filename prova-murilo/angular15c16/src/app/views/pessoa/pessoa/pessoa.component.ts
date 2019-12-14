import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

import { Pessoa } from './../../../data-access/domain/pessoa';
import { FormControl, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { PessoaComponentService } from './pessoa-component.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})

export class PessoaComponent implements OnDestroy {

  @Input()
  pessoas: Pessoa[] = [];

  @Output()
  saved: EventEmitter<Pessoa> = new EventEmitter<Pessoa>();

  _pessoaFCtrl: FormControl = new FormControl(null, Validators.required);

  private _destroy$: Subject<void> = new Subject<void>();

  constructor(private _componentService: PessoaComponentService) {
    this._componentService.operacaoDeBancoFinalizada$
      .pipe(takeUntil(this._destroy$))
      .subscribe(() => {
        this._pessoaFCtrl.reset();
      });
  }

  ngOnDestroy(): void {
    if (this._destroy$ && !this._destroy$.closed) {
      this._destroy$.next();
      this._destroy$.complete();
    }
  }

  _gravaPessoa() {
    this.saved.emit({...this._pessoaFCtrl.value});
  }

}

import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';

import {UsuarioComponentService} from './usuario-component.service';
import {Usuario} from '~data-access/domain/usuario';
import {FormControl, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsuarioComponent implements OnDestroy {
  @Input()
  usuarios: Usuario[] = [];

  @Output()
  saved: EventEmitter<Usuario> = new EventEmitter<Usuario>();

  @Output()
  removed: EventEmitter<Usuario> = new EventEmitter<Usuario>();

  _usuarioCtrl: FormControl = new FormControl(null, Validators.required);

  /** Teardown observables subscriptions */
  private _destroy$: Subject<void> = new Subject<void>();

  constructor(private _componentService: UsuarioComponentService) {
    this._componentService.operacaoDeBancoFinalizada$
      .pipe(takeUntil(this._destroy$))
      .subscribe(() => {
        this._usuarioCtrl.reset();
      });
  }

  ngOnDestroy(): void {
    if (this._destroy$ && !this._destroy$.closed) {
      this._destroy$.next();
      this._destroy$.complete();
    }
  }

  _editaUsuario(usuario: Usuario) {
    this._usuarioCtrl.setValue({...usuario});
  }

  _gravaUsuario() {
    this.saved.emit({...this._usuarioCtrl.value});
  }

  _removeUsuario(usuario: Usuario) {
    this.removed.emit(usuario);
  }
}

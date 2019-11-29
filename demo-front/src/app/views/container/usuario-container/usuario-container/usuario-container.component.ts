import {ChangeDetectionStrategy, Component, OnDestroy} from '@angular/core';

import {BehaviorSubject, Subject} from 'rxjs';
import {withLatestFrom} from 'rxjs/operators';

import {UsuarioContainerComponentService} from './usuario-container-component.service';
import {Usuario} from '~data-access/domain/usuario';
import {UsuarioComponentService} from '~views/usuario/usuario/usuario-component.service';

@Component({
  selector: 'app-usuario-container',
  templateUrl: './usuario-container.component.html',
  styleUrls: ['./usuario-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsuarioContainerComponent implements OnDestroy {
  _usuarios$: BehaviorSubject<Usuario[]> = new BehaviorSubject<Usuario[]>([]);

  /** Teardown observables subscriptions */
  private _destroy$: Subject<void> = new Subject<void>();

  constructor(
    private _componentService: UsuarioContainerComponentService,
    private _usuarioPresentational: UsuarioComponentService,
  ) {
    this._componentService.findAllUsuarios().subscribe((us: Usuario[]) => {
      this._usuarios$.next(us);
    });
  }

  ngOnDestroy(): void {
    if (this._destroy$ && !this._destroy$.closed) {
      this._destroy$.next();
      this._destroy$.complete();
    }

    if (this._usuarios$ && !this._usuarios$.closed) {
      this._usuarios$.complete();
    }
  }

  _gravaUsuario(user: Usuario) {
    this._componentService
      .saveUsuario({...user})
      .pipe(withLatestFrom(this._usuarios$))
      .subscribe(([usuario, usuarios]) => {
        const index = usuarios.findIndex((u: Usuario) => u.id === usuario.id);

        if (index < 0) {
          usuarios.push(usuario);
        } else {
          usuarios.splice(index, 1, usuario);
        }

        this._usuarios$.next([...usuarios]);

        this._usuarioPresentational.operacaoDeBancoFinalizada$.next();
      });
  }

  _removeUsuario(usuario: Usuario) {
    this._componentService
      .removeUsuario(usuario)
      .pipe(withLatestFrom(this._usuarios$))
      .subscribe(([_, usuarios]) => {
        const index = usuarios.findIndex((u: Usuario) => u.id === usuario.id);

        if (index >= 0) {
          usuarios.splice(index, 1);
        }

        this._usuarios$.next([...usuarios]);

        this._usuarioPresentational.operacaoDeBancoFinalizada$.next();
      });
  }
}

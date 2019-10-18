import {Component, OnDestroy} from '@angular/core';
import {FormGroup, FormBuilder, FormControl} from '@angular/forms';
import {AppService} from './services/app.service';
import {FormularioComponentData} from './minha-aplicacao/formulario/formulario.component';
import {Usuario} from './data-access/model';
import {UsuarioRestService} from './data-access/rest/usuario-rest.service';

import {debounceTime, switchMap, filter, takeUntil} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  _form: FormGroup;

  _usuarios: Usuario[];

  _disabled = false;

  _readonly = false;

  _nomeVisivel = true;

  _autocompleteInputCtrl: FormControl = new FormControl();

  _options$: Observable<Usuario[]>;

  /** Teardown observables subscriptions */
  private _destroy$: Subject<void> = new Subject<void>();

  constructor(
    public _appService: AppService,
    private _usuarioRest: UsuarioRestService,
    _fb: FormBuilder
  ) {
    this._setupAutocomplete();
    this._carregaUsuarios();
    this._form = _fb.group({
      dadosDeUsuario: null,
    });

    this._form.get('dadosDeUsuario').setValue({nome: '', email: '@email.com'});
  }

  ngOnDestroy() {
    if (this._destroy$ && !this._destroy$.closed) {
      this._destroy$.next();
      this._destroy$.complete();
    }
  }

  /** Mostra os valores emitidos do componente */
  _carregaUsuarios() {
    this._usuarioRest.findAllUsuarios().subscribe((usuarios: Usuario[]) => {
      this._usuarios = usuarios;
    });
  }

  _gravarDados(user?: Usuario) {
    this._usuarioRest
      .gravaUsuario(user ? user : this._form.value.dadosDeUsuario)
      .subscribe((usuario: Usuario) => {
        this._usuarios.push(usuario);
        this._usuarios.sort((a, b) => a.nome.localeCompare(b.nome, 'pt-br', {sensitivity: 'base'}));
        this._usuarios = [...this._usuarios];
      });
  }

  _removeUsuario(id: number) {}

  _alteraEstadoDoFormulario() {
    if (this._disabled) {
      this._form.enable();
    } else {
      this._form.disable();
    }

    this._disabled = !this._disabled;
  }

  displayFn(user?: Usuario): string | undefined {
    return user ? user.nome : undefined;
  }

  _setupAutocomplete() {
    this._options$ = this._autocompleteInputCtrl.valueChanges.pipe(
      debounceTime(400),
      filter(Boolean),
      switchMap((valor: string) => this._usuarioRest.findAllUsuarios(valor)),
      takeUntil(this._destroy$)
    );
  }
}

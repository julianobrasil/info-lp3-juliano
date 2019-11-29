import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';

import {NovoUsuarioComponentService} from './novo-usuario-component.service';
import {FormGroup, FormGroupDirective, FormBuilder, Validators} from '@angular/forms';
import {Usuario} from 'src/app/data-access/model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NovoUsuarioComponent {
  /** Formulário container */
  _form: FormGroup;

  /** Diretiva de formulário */
  @ViewChild(FormGroupDirective, {static: false}) _formGroupDirective: FormGroupDirective;

  constructor(
    private _fb: FormBuilder,
    private _componentService: NovoUsuarioComponentService,
    private _router: Router
  ) {
    this._form = this._fb.group({
      nome: [null, Validators.required],
      email: [null, Validators.required],
      senha: [null, Validators.required],
    });
  }

  registra() {
    console.log('aqui ok');
    if (!this._form.valid) {
      return;
    }

    console.log('aqui ok tb');

    this._componentService.gravaUsuario({...this._form.value}).subscribe((usuario: Usuario) => {
      // this.cancela();
      this._router.navigate(['login']);
    });
  }

  cancela() {
    if (this._formGroupDirective) {
      this._formGroupDirective.resetForm();
    }
  }
}

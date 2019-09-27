import {Component} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Usuario, AppService} from './services/app.service';
import {
  FormularioComponentData,
} from './minha-aplicacao/formulario/formulario.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  _form: FormGroup;

  _usuarios: Usuario[];

  _disabled = false;

  _readonly = false;

  _nomeVisivel = true;

  constructor(public _appService: AppService, _fb: FormBuilder) {
    this._form = _fb.group({
      dadosDeUsuario: null,
    });

    this._form.get('dadosDeUsuario').setValue({nome: 'Juliano', idade: 47});
  }
  /** Mostra os valores emitidos do componente */
  _mostraValores(dados: FormularioComponentData) {
    console.log(dados);

    const usuario: Usuario = {id: new Date().getTime(), ...dados};

    this._appService.usuarios.push(usuario);
    this._usuarios = [...this._appService.usuarios];
  }

  _gravarDados() {
    this._mostraValores(this._form.value.dadosDeUsuario);
  }

  _removeUsuario(id: number) {
    const users = this._appService.usuarios;

    const index = users.findIndex((u: Usuario) => u.id === id);

    console.log({index});

    users.splice(index, 1);

    this._usuarios = [...users];
  }

  _alteraEstadoDoFormulario() {
    if (this._disabled) {
      this._form.enable();
    } else {
      this._form.disable();
    }

    this._disabled = !this._disabled;
  }
}

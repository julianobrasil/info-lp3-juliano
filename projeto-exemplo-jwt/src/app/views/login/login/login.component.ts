import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import {
  LoginComponentService,
} from './login-component.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {

  /** Formulário do componente */
  _loginForm: FormGroup = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required],
  });

  constructor(private fb: FormBuilder,
              private _componentService: LoginComponentService) {}

  /** Submete o formulário de login */
  onSubmit() {
    if (this._loginForm.invalid) {
      return;
    }
    this._componentService.login({...this._loginForm.value});
  }
}

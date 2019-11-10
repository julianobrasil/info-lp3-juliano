import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from 'src/app/services/app.service';

export interface LoginComponentData {
  username: string;
  password: string;
}

@Injectable({providedIn: 'root'})
export class LoginComponentService {
  constructor(private _router: Router, private _appService: AppService) {}

  /** Valida o usuário logado e redireciona-o se for o caso */
  login(data: LoginComponentData) {

    this._appService.authenticate(data.username, data.password).subscribe(
      (obj: {token: string}) => {
        this._appService.isLoggedIn = true;
        this._appService.token = obj.token;
        this._router.navigate(['shell']);
      },
      error => {
        this._appService.token = null;
        this._appService.isLoggedIn = false;
        this._router.navigate(['login']);
      }
    );
  }
}

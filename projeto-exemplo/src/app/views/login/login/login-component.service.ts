import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from 'src/app/services/app.service';
import {HttpErrorResponse} from '@angular/common/http';

export interface LoginComponentData {
  username: string;
  password: string;
}

@Injectable({providedIn: 'root'})
export class LoginComponentService {
  constructor(private _router: Router, private _appService: AppService) {}

  /** Valida o usuário logado e redireciona-o se for o caso */
  login(data: LoginComponentData) {
    this._appService.username = data.username;
    this._appService.password = data.password;
    this._appService.authenticate().subscribe(
      () => {
        this._appService.isLoggedIn = true;
        this._router.navigate(['shell']);
      },
      (error: any) => {
        if (error instanceof HttpErrorResponse) {
          this._appService.username = null;
          this._appService.password = null;
          this._appService.isLoggedIn = false;
          this._router.navigate(['login']);
        }
      }
    );
  }
}

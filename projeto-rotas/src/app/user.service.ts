import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class UserService {
  isLoggedIn = false;
  private _permissions = ',ROLE_USUARIO_COMUM,ROLE_ADMINISTRACAO,';

  constructor() {}

  hasPermission(permission: string) {
    return this._permissions.includes(`,${permission},`);
  }
}

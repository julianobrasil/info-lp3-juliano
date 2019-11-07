import {Injectable} from '@angular/core';
import {
  CanLoad,
  Route,
  UrlSegment,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import {Observable} from 'rxjs';
import {AppService} from '../services/app.service';

@Injectable({providedIn: 'root'})
export class LoginGuard implements CanActivate {
  constructor(private _appService: AppService, private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    console.log(this._appService.isLoggedIn);
    return this._appService.isLoggedIn ? this._router.parseUrl('shell') : true;
  }
}

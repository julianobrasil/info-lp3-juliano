import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  CanLoad,
  UrlTree,
  Route,
  UrlSegment,
  Router
} from '@angular/router';
import {Observable} from 'rxjs';
import {AppService} from '../services/app.service';

@Injectable({providedIn: 'root'})
export class ShellGuard implements CanActivate, CanLoad {
  constructor(private _appService: AppService, private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this._appService.isLoggedIn ? true : this._router.parseUrl('login');
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (!this._appService.isLoggedIn) {
      this._router.navigate(['login']);
    }
    return this._appService.isLoggedIn;
  }
}

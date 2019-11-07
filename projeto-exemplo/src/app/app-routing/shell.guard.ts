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
export class ShellGuard implements CanLoad, CanActivate {
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
    return this._appService.isLoggedIn
      ? true
      : this._router.navigate(['login']);
  }
}

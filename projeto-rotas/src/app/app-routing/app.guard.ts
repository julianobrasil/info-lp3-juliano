import {Injectable} from '@angular/core';
import {
  CanActivate,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from '../user.service';

@Injectable({providedIn: 'root'})
export class AppGuard implements CanLoad, CanActivate {
  constructor(private _userService: UserService) {}

  canLoad(route: Route, segments: UrlSegment[]): boolean
      | Observable<boolean>| Promise<boolean> {
    return this._userService.isLoggedIn;
  }
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean
      | UrlTree | Observable<boolean | UrlTree>| Promise<boolean | UrlTree> {
    return this._userService.isLoggedIn;
  }
}

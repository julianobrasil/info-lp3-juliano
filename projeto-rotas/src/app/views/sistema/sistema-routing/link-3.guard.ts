import {Injectable} from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanLoad,
  Route,
  UrlSegment,
} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from 'src/app/user.service';

@Injectable({providedIn: 'root'})
export class Link3Guard implements CanActivate, CanLoad {
  constructor(private _userService: UserService) {}

  canLoad(route: Route, segments: UrlSegment[]): boolean
      | Observable<boolean>| Promise<boolean> {
    return this._userService.hasPermission('ROLE_ADMINISTRACAO');
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean
      | UrlTree | Observable<boolean | UrlTree>| Promise<boolean | UrlTree> {
    return this._userService.hasPermission('ROLE_ADMINISTRACAO');
  }
}

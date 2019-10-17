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

@Injectable({providedIn: 'root'})
export class Link2Guard implements CanActivate, CanLoad {
  canLoad(route: Route, segments: UrlSegment[]): boolean
      | Observable<boolean>| Promise<boolean> {
        return true;
  }
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean
      | UrlTree | Observable<boolean | UrlTree>| Promise<boolean | UrlTree> {
    return true;
  }
}

import {Injectable} from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class Link2Guard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean
      | UrlTree | Observable<boolean | UrlTree>| Promise<boolean | UrlTree> {
    return false;
  }
}

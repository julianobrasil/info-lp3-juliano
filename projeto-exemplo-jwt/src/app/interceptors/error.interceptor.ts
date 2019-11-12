import {Injectable} from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import {Observable, of, EMPTY} from 'rxjs';
import {AppService} from '../services/app.service';
import {tap, catchError, switchMap, map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private _appService: AppService, private _router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = req.url;
    return next.handle(req).pipe(
      map((evt: HttpEvent<any>) => {
        if (
          evt instanceof HttpErrorResponse &&
          evt.status === 401 &&
          this._appService.refreshToken &&
          this._appService.token &&
          evt.error.message.includes('expired')
        ) {
          return this._appService
            .refresh()
            .pipe(
              switchMap((_) => next.handle(req)),
              catchError((e: any) => {
                console.error({'token refresh error': e});
                this._appService.refreshToken = null;
                this._appService.token = null;
                this._appService.isLoggedIn = false;
                this._router.navigate(['login']);
                return of(e);
              })
            );
        }

        return evt;
      }),
      catchError((evt) => {
        if (
          evt instanceof HttpErrorResponse &&
          evt.status === 401 &&
          this._appService.refreshToken &&
          this._appService.token &&
          evt.error.message.includes('expired')
        ) {
          return this._appService
            .refresh()
            .pipe(
              switchMap((_) => next.handle(req)),
              catchError((e: any) => {
                console.error({'token refresh error': e});
                this._appService.refreshToken = null;
                this._appService.token = null;
                this._appService.isLoggedIn = false;
                this._router.navigate(['login']);
                return of(e);
              })
            );
        }

        return of(evt);
      })
    );
  }
}

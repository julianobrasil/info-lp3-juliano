import {Injectable} from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppService} from '../services/app.service';
import {tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class SecurityInterceptor implements HttpInterceptor {
  constructor(private _appService: AppService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: req.headers.set(
        'Authorization',
        'Basic ' +
          btoa(`${this._appService.username}:${this._appService.password}`)
      )
    });

    return next.handle(authReq);
  }
}

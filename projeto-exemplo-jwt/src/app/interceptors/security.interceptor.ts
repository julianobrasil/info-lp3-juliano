import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppService} from '../services/app.service';
import {tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class SecurityInterceptor implements HttpInterceptor {
  constructor(private _appService: AppService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.url.includes('/authenticate')
      ? req
      : req.clone({
          headers: req.headers.set('Authorization', 'Bearer ' + this._appService.token),
        });

    return next.handle(authReq);
  }
}

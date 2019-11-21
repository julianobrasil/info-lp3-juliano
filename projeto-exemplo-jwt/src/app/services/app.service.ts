import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AppService {
  private readonly _baseUrl = 'http://localhost:8080';

  token: string;
  refreshToken: string;
  isLoggedIn = false;

  constructor(private _http: HttpClient, private _router: Router) {}

  authenticate(
    username: string,
    password: string
  ): Observable<{token: string; refreshToken: string}> {
    const url = `${this._baseUrl}/authenticate`;

    return this._http.post<{token: string; refreshToken: string}>(url, {
      username,
      password,
    });
  }

  refresh() {
    const url = `${this._baseUrl}/refresh`;

    const headers: HttpHeaders = new HttpHeaders().set('Refresh-token', this.refreshToken);

    return this._http
      .get<{token: string; refreshToken: string}>(url, {headers})
      .pipe(
        tap((tokens: {token: string; refreshToken: string}) => {
          this.token = tokens.token;
          this.refreshToken = tokens.refreshToken;
        })
      );
  }

  logout() {
    this.token = null;
    this.isLoggedIn = null;

    this._router.navigate(['login']);
  }
}

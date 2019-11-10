import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class AppService {
  private readonly _baseUrl = 'http://localhost:8080';

  token: string;
  isLoggedIn = false;

  constructor(private _http: HttpClient, private _router: Router) {}

  authenticate(username: string, password: string): Observable<{token: string}> {
    const url = `${this._baseUrl}/authenticate`;

    return this._http.post<{token: string}>(url, {username, password});
  }

  logout() {
    this.token = null;
    this.isLoggedIn = null;

    this._router.navigate(['login']);
  }
}

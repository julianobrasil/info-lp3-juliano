import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class AppService {
  private readonly _baseUrl = 'http://localhost:8080/api/usuario';

  username: string;
  password: string;
  isLoggedIn = false;

  constructor(private _http: HttpClient, private _router: Router) {}

  authenticate(): Observable<void> {
    const url = `${this._baseUrl}/authenticate`;

    return this._http.get<void>(url);
  }

  logout() {
    this.username = null;
    this.password = null;
    this.isLoggedIn = null;

    this._router.navigate(['login']);
  }
}

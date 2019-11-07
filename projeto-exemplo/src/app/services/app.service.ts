import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AppService {
  private _url = 'http://localhost:8080/api/usuario';

  username: string;
  password: string;
  isLoggedIn = false;

  constructor(private _http: HttpClient) {}

  authenticate(): Observable<void> {
    return this._http.get<void>(`${this._url}/authenticate`);
  }
}

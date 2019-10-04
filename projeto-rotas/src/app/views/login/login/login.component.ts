import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _router: Router, private _userService: UserService) {}

  _direcionaParaSistema() {
    this._userService.isLoggedIn = true;
    this._router.navigate(['sistema']);
  }
}

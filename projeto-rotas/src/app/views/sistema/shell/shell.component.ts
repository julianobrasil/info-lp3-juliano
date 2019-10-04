import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {UserService} from 'src/app/user.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent {
  isHandset$: Observable<boolean> =
      this.breakpointObserver.observe(Breakpoints.Handset)
          .pipe(map(result => result.matches), shareReplay());

  _isAdministrador = false;

  constructor(private breakpointObserver: BreakpointObserver,
              private _userService: UserService) {
    this._isAdministrador =
        this._userService.hasPermission('ROLE_ADMINISTRACAO');
  }
}

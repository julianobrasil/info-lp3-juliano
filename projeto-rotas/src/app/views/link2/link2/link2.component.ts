import {ChangeDetectionStrategy, Component} from '@angular/core';

import {Link2ComponentService} from './link2-component.service';

@Component({
  selector: 'app-link2',
  templateUrl: './link2.component.html',
  styleUrls: ['./link2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Link2Component {
  constructor(private _componentService: Link2ComponentService) {}
}

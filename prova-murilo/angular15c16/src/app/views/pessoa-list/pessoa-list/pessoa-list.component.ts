import { Component, OnInit, Input } from '@angular/core';
import { Pessoa } from 'src/app/data-access/domain/pessoa';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.scss']
})
export class PessoaListComponent implements OnInit {
  @Input()
  pessoas: Pessoa[] = [];
  
  constructor() { }

  ngOnInit() {
  }

}

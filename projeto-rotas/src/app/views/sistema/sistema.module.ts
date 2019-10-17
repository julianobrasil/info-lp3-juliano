import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomMaterialModule} from './custom-material.module';
import {ShellComponent} from './shell/shell.component';
import {SistemaRoutingModule} from './sistema-routing/sistema-routing.module';
import {Link1Component} from './link1/link1.component';

@NgModule({
  declarations: [
    ShellComponent,
    Link1Component,
  ],
  imports: [
    CommonModule,
    SistemaRoutingModule,
    CustomMaterialModule,
  ]
})
export class SistemaModule {
}

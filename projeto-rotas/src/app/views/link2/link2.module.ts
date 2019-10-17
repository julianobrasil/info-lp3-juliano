import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {Link2Component} from './link2/link2.component';
import {Link2RoutingModule} from './link2-routing/link2-routing.module';
import {Link2RoutingComponent} from './link2-routing/link2-routing.component';
import {CustomMaterialModule} from './custom-material.module';

@NgModule({
  declarations: [
    Link2RoutingComponent,
    Link2Component
  ],
  imports: [
    /** ANGULAR IMPORTS */
    CommonModule,
    ReactiveFormsModule,

    /** Link2Module IMPORTS */
    Link2RoutingModule,
    CustomMaterialModule,
  ],
  exports: [Link2Component],
})
export class Link2Module {}

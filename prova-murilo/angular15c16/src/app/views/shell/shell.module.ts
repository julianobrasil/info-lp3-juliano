import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ShellComponent } from './shell/shell.component';
import { ShellRoutingModule } from './shell-routing/shell-routing.module';
import { ShellRoutingComponent } from './shell-routing/shell-routing.component';
import { CustomMaterialModule } from './custom-material.module';

@NgModule({
  declarations: [
    ShellRoutingComponent,
    ShellComponent
  ],
  imports: [
    /** ANGULAR IMPORTS */
    CommonModule,
    ReactiveFormsModule,

    /** ShellModule IMPORTS */
    ShellRoutingModule,
    CustomMaterialModule,
  ],
  exports: [ShellComponent],
})
export class ShellModule {}

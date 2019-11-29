import {NgModule} from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  exports: [MatButtonModule, MatMenuModule, MatIconModule],
})
export class CustomMaterialModule {}

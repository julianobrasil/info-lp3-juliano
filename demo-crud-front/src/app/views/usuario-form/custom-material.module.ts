import {NgModule} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  exports: [MatCheckboxModule, MatFormFieldModule, MatInputModule],
})
export class CustomMaterialModule {}

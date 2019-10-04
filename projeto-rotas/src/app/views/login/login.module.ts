import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {CustomMaterialModule} from './custom-material.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
  ],
  exports: [LoginComponent],
})
export class LoginModule {
}

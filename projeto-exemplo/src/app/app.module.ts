import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {MinhaAplicacaoModule} from './minha-aplicacao/minha-aplicacao.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    /** MEUS MÓDULOS */
    MinhaAplicacaoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

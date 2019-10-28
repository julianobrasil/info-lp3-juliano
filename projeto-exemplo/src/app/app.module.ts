import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient
} from '@angular/common/http';

import {AppComponent} from './app.component';
import {MinhaAplicacaoModule} from './minha-aplicacao/minha-aplicacao.module';
import {CustomMaterialModule} from './custom-material.module';
import {HeaderInterceptor} from './interceptor-test';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,

    /** MEUS MÓDULOS */
    MinhaAplicacaoModule,
    CustomMaterialModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: HeaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private http: HttpClient) {
    this.http
      .get('http://authservice.unialfa.com.br/uaa/login', {responseType: 'text'})
      .subscribe(console.log);
  }
}

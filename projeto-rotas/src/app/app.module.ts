import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginModule} from './views/login/login.module';
import {AppRoutingModule} from './app-routing/app-routing.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,

    LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

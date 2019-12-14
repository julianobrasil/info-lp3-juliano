import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module'
import { MaterialComponentModule } from './material-component.module';
import { PessoaComponent } from './views/pessoa/pessoa/pessoa.component';
import { PessoaContainerComponent } from "./views/pessoa-container/pessoa-container/pessoa-container.component";
import { PessoaFormComponent } from './views/pessoa-form/pessoa-form/pessoa-form.component';
import { PessoaListComponent } from './views/pessoa-list/pessoa-list/pessoa-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent,
    PessoaContainerComponent,
    PessoaFormComponent,
    PessoaListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

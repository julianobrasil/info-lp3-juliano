import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaComponent } from './views/pessoa/pessoa/pessoa.component';


const routes: Routes = [{
  path: '', component: PessoaComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

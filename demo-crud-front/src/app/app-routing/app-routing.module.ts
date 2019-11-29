import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'shell',
    loadChildren: () =>
      import('~views/shell/shell.module').then(m => m.ShellModule),
  },
  {
    path: '',
    redirectTo: 'shell',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'shell',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule],
})
export class AppRoutingModule {}

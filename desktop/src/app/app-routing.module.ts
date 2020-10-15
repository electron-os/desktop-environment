import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesktopComponent } from './desktop/desktop.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  { path: '' , component: LoadingPageComponent } ,
  { path: 'login' , component: LoginPageComponent } ,
  { path: 'desktop' , component: DesktopComponent } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

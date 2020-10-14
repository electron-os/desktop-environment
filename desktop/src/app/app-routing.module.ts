import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesktopComponent } from './desktop/desktop.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  { path: 'desktop' , component: DesktopComponent } ,
  { path: 'welcome' , component: WelcomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchPageComponent} from './search-page/search-page.component'
import { from } from 'rxjs';

const routes: Routes = [
 { path:  '', pathMatch: 'full', redirectTo:  'find'},
 {path:'find',component: SearchPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

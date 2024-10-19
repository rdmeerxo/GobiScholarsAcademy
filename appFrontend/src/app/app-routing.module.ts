
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component'; 
import { ProgramsComponent } from './programs/programs.component'; 
import { GetInvolvedComponent } from './get-involved/get-involved.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'programs', component: ProgramsComponent },
  { path: 'get-involved', component: GetInvolvedComponent },
  { path: 'news', component: NewsComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

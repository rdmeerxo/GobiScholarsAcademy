import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProgramsComponent } from './programs/programs.component';
import { GetInvolvedComponent } from './get-involved/get-involved.component';
import { ResearchComponent } from './research/research.component';
import { summerinternshipComponent } from './programs/summerfellow/summerinternship';
import { scholarsprogramComponent } from './programs/scholarsprogram/scholarsprogram';
import { app } from '../../server';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/index.html', pathMatch: 'full' },  // Default route
  { path: ' ', component:AppComponent},
  { path: 'about-us', component: AboutComponent },
  { path: 'programs', component: ProgramsComponent},
  { path: 'research-and-publications', component: ResearchComponent},
  { path: 'get-involved', component: GetInvolvedComponent},
  { path: 'summer-internship-2025', component: summerinternshipComponent },
  { path: 'scholars-program', component: scholarsprogramComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


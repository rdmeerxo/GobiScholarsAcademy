import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { ProgramsComponent } from './programs/programs.component';
import { AppComponent } from './app.component'; // Import the AppComponent
import { GetInvolvedComponent } from './get-involved/get-involved.component';

@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule,  // Import the routing module
  ],
  providers: [],
  
})
export class AppModule { }

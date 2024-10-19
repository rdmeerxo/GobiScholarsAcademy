import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Import your standalone AppComponent
import { AppRoutingModule } from './app/app-routing.module'; // Import the routing module

bootstrapApplication(AppComponent, {
  providers: [
    AppRoutingModule // Add your routing module here
  ]
})
.catch(err => console.error(err));

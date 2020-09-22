import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RequestComponent } from './request/request.component';
import { ReviewComponent } from './review/review.component';
import { WelcomeComponent } from './welcome/welcome.component';

// configured routes | To create new component use ng generate component <--component name--> and add route here
const routes: Routes = [
  { path: 'app', component: AppComponent },
  { path: '', component: WelcomeComponent },
  { path: 'request', component: RequestComponent},
  { path: 'review', component: ReviewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [RequestComponent, ReviewComponent] //optional, will create an array of routes to export instead
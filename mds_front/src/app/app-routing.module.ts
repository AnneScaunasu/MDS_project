import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestsComponent } from './requests/requests.component';
import { ProfileComponent } from './profile/profile.component';
import { JobsComponent } from './jobs/jobs.component';


//path-ul dintre pagini
const routes: Routes = [
  {
    path: 'jobs',
    component: JobsComponent
  },
  {
    path:'requests',
    component: RequestsComponent
  },
  {
    path:'profile',
    component: ProfileComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

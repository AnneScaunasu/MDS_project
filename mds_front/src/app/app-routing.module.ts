import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestsComponent } from './requests/requests.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { JobsComponent } from './jobs/jobs.component';
import { HomePageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';


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
  },
  {
    path:'home',
    component: HomePageComponent
  },
  {
    path:'sign-in',
    component: SignUpComponent
  },
  {
    path:'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

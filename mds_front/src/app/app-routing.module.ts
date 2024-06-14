import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchFormComponent } from './main/main.component';
import { RequestsComponent } from './requests/requests.component';
import { SignUpComponent } from './sign-up/sign-up.component';


//path-ul dintre pagini
const routes: Routes = [
  {
    path: 'jobs',
    component: SearchFormComponent
  },
  {
    path:'requests',
    component: RequestsComponent
  },
  {
    path:'sign-in',
    component: SignUpComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

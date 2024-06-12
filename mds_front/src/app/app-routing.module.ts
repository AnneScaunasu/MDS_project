import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchFormComponent } from './main/main.component';
import { RequestsComponent } from './requests/requests.component';


//path-ul dintre pagini
const routes: Routes = [
  {
    path: 'jobs',
    component: SearchFormComponent
  },
  {
    path:'requests',
    component: RequestsComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

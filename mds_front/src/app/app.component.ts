import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet/>
    <!--in viitor footer-->
    `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'ProiectPetSitters';

  onSignOut(event: boolean) {
    if(event) {
      environment.username = '';
      environment.password = '';
    }
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  username = '';
  password = '';

  onSignOut(event: boolean) {
    if(event) {
      this.username = '';
      this.password = '';
    }
  }

}

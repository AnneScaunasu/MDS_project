import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <!--in viitor footer-->
    `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProiectPetSitters';
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) {}

  email: string = '';
  password: string = '';

  onSubmit(form: NgForm) {
    if (this.validForm()) {
      environment.username = 'admin';
      environment.password = 'admin;'
      this.router.navigate(['/home']);
    } else {
      alert("Credentialele nu sunt valide");
    }
  }

  validForm() {

    return true;
  }

}

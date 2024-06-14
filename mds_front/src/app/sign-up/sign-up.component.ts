// src/app/sign-up/sign-up.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private router: Router) {}

  job: boolean = false;
  request: boolean = false;
  name: string = '';
  email: string = '';
  password: string ='';
  confirmPassword: string = '';
  showFormError: boolean = false;

  onSubmit(form: NgForm) {
    if (this.validForm()) {
      environment.username = this.name;
      environment.password = this.password;
      this.router.navigate(['/home']);
    } else {
      this.showFormError = true;
    }
  }

  validateEmail() {
    var email = document.getElementById("email")?.outerHTML;
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email) {
      if (regex.test(email)) {
        return true;
      } else {
        // alert("Invalid email address!");
        return false;
      }
    }
    return false;
  }

  validForm(): boolean {
    console.log(this.name, this.email, this.password, this.job, this.request);
    return (this.job !== this.request) && this.name !== '' && this.email !== '' && this.password.length >= 5 && this.password === this.confirmPassword;
  }

  closeFormErrorPopup() {
    this.showFormError = false;
  }

}

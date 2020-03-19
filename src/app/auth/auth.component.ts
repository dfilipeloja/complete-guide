import { AuthService } from './auth.service';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  isLoginMode = true;

  constructor(private authService: AuthService) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) return;
    const { email, password } = form.value;
    if (this.isLoginMode) {
    } else {
      this.authService.signup(email, password).subscribe(
        resp => {
          console.log(resp);
        },
        error => {
          console.log(error);
        }
      );
    }

    form.reset();
  }
}

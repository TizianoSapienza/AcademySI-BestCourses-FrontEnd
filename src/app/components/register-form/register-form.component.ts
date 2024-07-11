import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SignUpRequest } from '../../../interfaces/signUp-request';
import { UtenteService } from '../../../services/utente/utente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {

  signUpRequest: SignUpRequest = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  }

  passwordsMatch: boolean = true;
  passwordStrength: string = '';

  constructor(private utenteService: UtenteService, private router: Router) {}

  onRegister(form: NgForm): void {

    if (form.valid) {
      this.utenteService.SignUpUtente(this.signUpRequest).subscribe({
        next: response => {
          console.log('User registered successfully:', response);
          form.resetForm();
          this.router.navigate(['/login']);
        },
        error: error => {
          console.error('Registration failed:', error);
        }
      });
    }
  }

  assessPasswordStrength(password: string): void {
    const strength = this.calculatePasswordStrength(password);
    this.passwordStrength = strength;
  }

  private calculatePasswordStrength(password: string): string {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[\W]/.test(password)) strength += 1;

    switch (strength) {
      case 0:
      case 1:
      case 2:
        return 'Debole';
      case 3:
        return 'Moderata';
      case 4:
      case 5:
        return 'Forte';
      default:
        return '';
    }
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SignInRequest } from '../../interfaces/signIn-request';
import { UtenteService } from '../../services/utente/utente.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'] // Changed to styleUrls
})
export class LoginFormComponent {

  signInRequest: SignInRequest = { // Fixed initialization
    email: '',
    password: ''
  };
  loginError: string = '';
  loading: boolean = false;

  @Output() loginEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(private utenteService: UtenteService) {}

  onLogin(form: NgForm): void {
    if (form.valid) {
      this.loading = true;
      this.utenteService.SignInUtente(this.signInRequest).subscribe({
        next: response => {
          console.log('User logged in successfully:', response);

          this.loading = false;

          this.utenteService.setUserEmail(this.signInRequest.email); // Salvo l'email nel service per la navbar
          this.loginEvent.emit('Bentornato!');
          form.resetForm();
        },
        error: error => {
          console.error('Login failed:', error);
          this.loading = false;
          this.loginError = 'Email o Password non validi.';
        }
      });
    } else {
      this.loginError = 'Email e Password sono richiesti.';
    }
  }
}

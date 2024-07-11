import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SignInRequest } from '../../../interfaces/signIn-request';
import { UtenteService } from '../../../services/utente/utente.service';
import { LocalStorageService } from '../../../services/localStorage/local-storage-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  signInRequest: SignInRequest = { 
    email: '',
    password: ''
  };

  loginError: string = ''; 
  loading: boolean = false;

  // This is the declaration of the loginEvent event emitter. It is used to emit an event when the login is successful.
  @Output() loginEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(private utenteService: UtenteService, private localStorageService: LocalStorageService, private router: Router) {}

  onLogin(form: NgForm): void {

    if (form.valid) {
      this.loading = true;
      this.utenteService.SignInUtente(this.signInRequest).subscribe({
        next: response => {
          console.log('Accesso riuscito:', response);
          alert('Bentornato, ' + this.signInRequest.email + '!');

          this.localStorageService.setItem('authToken', response.token);

          this.loading = false;

          this.utenteService.setUserEmail(this.signInRequest.email); // Salvo l'email dell'utente nella classe UtenteService per la navbar
          this.loginEvent.emit('Bentornato!'); // Emetto l'evento 'Bentornato!' per notificare altri componenti che l'accesso è riuscito
          
          form.resetForm();
          this.router.navigate(['']);
        },
        error: error => {
          console.error('Accesso fallito:', error);
          this.loading = false;
          this.loginError = 'Email o Password non validi.';
        }
      });
    } else {
      this.loginError = 'Email e Password sono richiesti.';
    }
  }
}


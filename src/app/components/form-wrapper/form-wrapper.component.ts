import { Component } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';
import { RegisterFormComponent } from '../register-form/register-form.component';

@Component({
  selector: 'app-form-wrapper',
  standalone: true,
  imports: [LoginFormComponent, RegisterFormComponent],
  templateUrl: './form-wrapper.component.html',
  styleUrl: './form-wrapper.component.css'
})
export class FormWrapperComponent {
  title : string = 'Inizia il tuo percorso di apprendimento';
  loggedInMessage: string | null = null;

  getTitle() : string {
    return this.title;
  }

  handleLoginEvent(message: string): void {
    this.loggedInMessage = message;
  }

  logout(): void {
    this.loggedInMessage = null;
  }

}

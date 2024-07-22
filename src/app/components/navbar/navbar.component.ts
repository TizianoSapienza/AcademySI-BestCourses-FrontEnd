import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { CommonModule } from '@angular/common';
import { UtenteService } from '../../../services/utente/utente.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [LoginService]
})
export class NavbarComponent implements OnInit {

  email: string | null = null;

  constructor(private utenteService: UtenteService) {}

  ngOnInit(): void {
    // Sottoscrive la funzione getUserEmail() del UtenteService
    // e aggiorna la proprietà email del componente con l'email
    // dell'utente, se presente.
    this.utenteService.getUserEmail().subscribe(email => {
      this.email = email;
    });
  }

  logout(): void {
    this.utenteService.setUserEmail(null);
    // Clear the token from local storage
    localStorage.removeItem('authToken');
  }
}

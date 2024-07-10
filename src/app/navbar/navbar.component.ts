import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';
import { UtenteService } from '../../services/utente/utente.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [LoginService]
})
export class NavbarComponent implements OnInit {

  email: string | null = null;

  constructor(private utenteService: UtenteService) {}

  ngOnInit(): void {
    this.utenteService.getUserEmail().subscribe(email => {
      this.email = email;
    });
  }

  logout(): void {
    this.utenteService.setUserEmail(null);
  }
}

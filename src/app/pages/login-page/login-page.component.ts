import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { LoginFormComponent } from "../../components/login-form/login-form.component";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [NavbarComponent, LoginFormComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}

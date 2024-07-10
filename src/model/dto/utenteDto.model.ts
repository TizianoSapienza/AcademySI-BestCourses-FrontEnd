import { Tipologia } from "../tipologia.model";

export class UtenteDto {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  roles: Tipologia[]

  constructor(firstname: string, lastname: string, email: string, password: string, roles:Tipologia[]) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.roles = roles;
  }
}

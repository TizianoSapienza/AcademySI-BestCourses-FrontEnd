export class Utente {
  private firstname: string;
  private lastname: string;
  private email: string;
  private password: string;
  private roles: Set<string>;
  private courses: Set<string>;

  constructor(firstname: string, lastname: string, email: string, password: string, roles: Set<string>, courses: Set<string>) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.roles = roles;
    this.courses = courses;
  }
}

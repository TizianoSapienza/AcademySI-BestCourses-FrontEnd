export class Utente {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  roles: Set<string>;
  courses: Set<string>;

  constructor(firstname: string, lastname: string, email: string, password: string, roles: Set<string>, courses: Set<string>) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.roles = roles;
    this.courses = courses;
  }
}

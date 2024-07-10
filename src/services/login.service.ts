import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private emailSubject = new BehaviorSubject<string | null>(null);
  email$ = this.emailSubject.asObservable();

  setEmail(email: string): void {
    this.emailSubject.next(email);
  }

  clearEmail(): void {
    this.emailSubject.next(null);
  }
}

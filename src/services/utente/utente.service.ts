import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, retry, throwError } from 'rxjs';
import { SignInRequest } from '../../interfaces/signIn-request';
import { SignUpRequest } from '../../interfaces/signUp-request';
import { UtenteDto } from '../../model/dto/utenteDto.model';
import { environment } from '../../environments/environment';
import { SignInResponse } from '../../interfaces/signIn-response';
import { LocalStorageService } from '../localStorage/local-storage-service.service';


@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  private userEmailSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  userEmail$: Observable<string | null> = this.userEmailSubject.asObservable();

  private apiUrl = environment.apiUrl;
  

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {
    this.userEmailSubject.next(this.localStorageService.getItem('userEmail'));
  }
  
  SignUpUtente(utente: SignUpRequest): Observable<SignUpRequest> {
    const headers = { 'content-type': 'application/json' };
    return this.http.post<SignUpRequest>(`${this.apiUrl}/utenti/registrazione`, utente, { headers }).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  SignInUtente(utente: SignInRequest): Observable<SignInResponse> {
    const headers = { 'content-type': 'application/json' };
    return this.http.post<SignInResponse>(`${this.apiUrl}/utenti/login`, utente, { headers }).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getUtenti(): Observable<UtenteDto[]> {
    return this.http.get<UtenteDto[]>(`${this.apiUrl}/utenti`).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getUtenteById(id: number): Observable<UtenteDto> {
    return this.http.get<UtenteDto>(`${this.apiUrl}/utenti/${id}`).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getUtenteByEmail(email: string): Observable<UtenteDto> {
    return this.http.get<UtenteDto>(`${this.apiUrl}/utenti/search/?email=${email}`).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  updateUtenteByEmail(email: string, utente: UtenteDto): Observable<UtenteDto> {
    return this.http.put<UtenteDto>(`${this.apiUrl}/utenti/update?email=${email}`, utente).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  deleteUtenteById(id: number): Observable<UtenteDto> {
    return this.http.delete<UtenteDto>(`${this.apiUrl}/utenti/${id}`).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  deleteUtenteByEmail(email: string): Observable<UtenteDto> {
    return this.http.delete<UtenteDto>(`${this.apiUrl}/utenti/email/${email}`).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  setUserEmail(email: string | null): void {
    this.userEmailSubject.next(email);
  }

  getUserEmail(): Observable<string | null> {
    return this.userEmailSubject.asObservable();
  }
}

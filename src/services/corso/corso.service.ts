import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { CorsoDto } from '../../model/dto/corsoDto.model';

@Injectable({
  providedIn: 'root'
})
export class CorsoService {

  private token: string = 'eyJhbGciOiJIUzM4NCJ9.eyJydW9saSI6WyJBZG1pbiJdLCJjb2dub21lIjoiUm9uYWxkbyIsIm5vbWUiOiJDcmlzdGlhbm8iLCJlbWFpbCI6ImNyN0BleGFtcGxlLmNvbSIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MCIsImlhdCI6MTcyMDUzMzgzNCwiZXhwIjoxNzIwNTM0NzM0fQ.AHpEVI2bmu_32aXm1rrhIpWbg1iDo2y3-vjHDqikQ8GOV6LhJgJcD8vTcao12gBN';

  constructor(private http: HttpClient) {
  }

  getCorsi(): Observable<CorsoDto[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    
    return this.http.get<CorsoDto[]>('http://localhost:8080/api/corsi', { headers }).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  getCorsoById(id : number): Observable<CorsoDto> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

    return this.http.get<CorsoDto>('http://localhost:8080/api/corsi/' + id, { headers }).pipe(
      retry(3),
      catchError(this.handleError)
    )
  }

  getCorsoByNome(nome : string): Observable<CorsoDto> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

    return this.http.get<CorsoDto>('http://localhost:8080/api/corsi/searchName?nome=' + nome, { headers }).pipe(
      retry(3),
      catchError(this.handleError)
    )
  }

  getCorsoByHours(length : number): Observable<CorsoDto> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

    return this.http.get<CorsoDto>('http://localhost:8080/api/corsi/searchLength?durata=' + length, { headers }).pipe(
      retry(3),
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { CorsoDto } from '../../model/dto/corsoDto.model';
import { environment } from '../../environments/environment';
import { CorsoRegistrazioneDto } from '../../model/dto/corsoRegistrazioneDto.model';

@Injectable({
  providedIn: 'root'
})
export class CorsoService {

  private apiUrl = environment.apiUrl;
  //private token: string = 'eyJhbGciOiJIUzM4NCJ9.eyJydW9saSI6WyJBZG1pbiJdLCJjb2dub21lIjoiUm9uYWxkbyIsIm5vbWUiOiJDcmlzdGlhbm8iLCJlbWFpbCI6ImNyN0BleGFtcGxlLmNvbSIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MCIsImlhdCI6MTcyMDY4MzAzOSwiZXhwIjoxNzIwNjgzOTM5fQ.K7xKn40s5KfqpuSti0dEWdnVbba_qiF5_FnWbu2XY9WmjVkGlMc91f-u6HN010hN';

  constructor(private http: HttpClient) {
  }

  registerCorso(corso: CorsoRegistrazioneDto): Observable<CorsoRegistrazioneDto> {
    //const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

    return this.http.post<CorsoRegistrazioneDto>(`${this.apiUrl}/corsi/registrazione`, corso, /*{ headers }*/).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  getCorsi(): Observable<CorsoDto[]> {
    //const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    
    return this.http.get<CorsoDto[]>(`${this.apiUrl}/corsi`, /*{ headers }*/).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getCorsoById(id : number): Observable<CorsoDto> {
    //const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

    return this.http.get<CorsoDto>(`${this.apiUrl}/corsi/` + id, /*{ headers }*/).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  getCorsoByNome(nome : string): Observable<CorsoDto> {
    //const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

    return this.http.get<CorsoDto>(`${this.apiUrl}/corsi/searchName?nome=` + nome, /*{ headers }*/).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  getCorsoByHours(length : number): Observable<CorsoDto> {
    //const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
                                    
    return this.http.get<CorsoDto>(`${this.apiUrl}/corsi/searchLength?durata=` + length, /*{ headers }*/).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  getCorsoByCategoryId(id : number): Observable<CorsoDto[]> {
    //const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
                                    
    return this.http.get<CorsoDto[]>(`${this.apiUrl}/corsi/searchCategory?categoryId=` + id, /*{ headers }*/).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  deleteCorsoById(id : number): Observable<CorsoDto> {
    //const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
                               
    return this.http.delete<CorsoDto>(`${this.apiUrl}/corsi/` + id, /*{ headers }*/).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  updateCorsoById(id : number, corso: CorsoDto): Observable<CorsoDto> {
    //const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
                               
    return this.http.put<CorsoDto>(`${this.apiUrl}/corsi/update/` + id, corso, /*{ headers }*/).pipe(
      retry(2),
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

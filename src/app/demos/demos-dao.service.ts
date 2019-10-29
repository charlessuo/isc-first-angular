import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Person } from '../shared/banking-types';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class DemosDaoService {
  baseUrl = 'http://localhost:8000/api/v1/banking';
  people: Person[] = [];

  constructor(private http: HttpClient) {}

  // This is "cold" until .subscribe() is called
  getPeople() {
    return this.http
      .get<Person[]>(`${this.baseUrl}/people`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`,
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}

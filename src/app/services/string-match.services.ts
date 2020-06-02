import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MatchResponse } from '../models/match.model';

@Injectable()
export class StringMatchService {
    private baseUrl = 'http://localhost:7071/api/StringMatch';

    constructor(private http: HttpClient) { }

    getMatches(text: string, subtext: string): Observable<MatchResponse> {
        return this.http.get<MatchResponse>(`${this.baseUrl}?text=${text}&subtext=${subtext}`)
            .pipe(
                catchError(this.handleError<MatchResponse>('getMatches'))
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
          console.error(error);
          return of(result as T);
        };
      }
}

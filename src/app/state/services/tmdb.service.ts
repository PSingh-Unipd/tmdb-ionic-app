import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
class TMDBService {
  constructor(private http: HttpClient) {}

  search(queryString: string, type: string): Observable<any> {
    return this.http.get<any>(queryString);
  }
}

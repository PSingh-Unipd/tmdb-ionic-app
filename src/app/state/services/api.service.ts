import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

type EntityType = 'movie' | 'show' | 'person';
type ContentType = 'movie' | 'show' | 'person' | 'episode' | 'season' | 'list';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  /**
   * Search for entities by query string
   * @param query
   */
  search(query: string): Observable<any> {
    return this.http.get<any>('movie', { params: { query } });
  }

  /**
   * Get details for a specific entity [@EntityType]
   * @param id
   * @param contentType
   * @param entityType
   */
  details(id: string, contentType: ContentType, entityType: EntityType): Observable<any> {
    return this.http.get<any>(contentType + '/' + id + entityType);
  }

  /**
   * Get a list of custom(created by other users) entities [@EntityType]
   * @param id
   */
  list(id: string): Observable<any> {
    return this.http.get<any>(id);
  }
}

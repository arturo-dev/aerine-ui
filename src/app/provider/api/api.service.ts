import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public static URI = `${environment.api.protocol}${environment.api.domain}${environment.api.context}`;

  constructor(
    private http: HttpClient
  ) { }

  get<T>(path: string, options?: 
    { 
      headers?: HttpHeaders | { [header: string]: string | string[]; }; 
      observe?: 'body'; 
      params?: HttpParams | { [param: string]: string | string[]; }; 
      reportProgress?: boolean; 
      responseType?: 'json'; 
      withCredentials?: boolean; 
    }
      ): Observable<T> {
    return this.http.get<T>(`${ApiService.URI}${path}`, options);
  }

  post<T>(path: string, body?: any, options?: 
    {
      headers?: HttpHeaders | {
          [header: string]: string | string[];
      };
      observe?: 'body';
      params?: HttpParams | {
          [param: string]: string | string[];
      };
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean
    }
      ): Observable<T> {
    return this.http.post<T>(`${ApiService.URI}${path}`, body, options);
  }

}

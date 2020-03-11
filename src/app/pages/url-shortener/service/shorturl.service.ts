import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class ShorturlService {

  constructor(private http: HttpClient) { }

  public CreateUrl(fullUrl: string): Observable<any> {
    return this.http.get('http://localhost:61356/shorturl/Create?url=' + fullUrl);
  }

  GetUrl(url: string) {
    return this.http.get('http://localhost:61356/shorturl/Resolve?url=' + url);
  }
}

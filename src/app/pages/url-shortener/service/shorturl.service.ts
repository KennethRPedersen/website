import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/internal/operators/map';
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ShorturlService {

  backendUrl = environment.backendurl;

  constructor(private http: HttpClient) {
  }

  public CreateUrl(fullUrl: string): Observable<any> {
    return this.http.get(this.backendUrl + '/shorturl/Create?url=' + fullUrl);
  }

  GetUrl(url: string) {
    return this.http.get(this.backendUrl + '/shorturl/Resolve?url=' + url);
  }
}

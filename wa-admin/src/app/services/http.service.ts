import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const apiUrl = environment.apiUrl;

export type APISegmentType = 'invitations';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url: any;

  post<T>(segment: APISegmentType, params = {}) {
    return this.http.post<T>(`${this.url}${segment}`, params);
  }

  get<T>(segment: APISegmentType, params = {}) {
    return this.http.get<T>(`${this.url}${segment}`, {});
  }

  constructor(private http: HttpClient) {
    this.url = apiUrl;
  }
}

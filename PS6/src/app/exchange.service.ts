import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { model } from './model/model';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  Endpoint = 'http://localhost:3000/ps4';

  getRate(): Observable<model[]> {
    return this.httpClient.get<model[]>(this.Endpoint);
  }



  constructor(private httpClient: HttpClient) { }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBrand } from '../models/Ibrand.interface';
import { Idata } from '../models/Idata.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string = "https://arcordiezb2c.myvtex.com/api/catalog_system/pub/facets/search/_all?map=b";

  constructor(private http: HttpClient) { }

  getData(): Observable<Idata>{
    return this.http.get<Idata>(this.url);
  }
}

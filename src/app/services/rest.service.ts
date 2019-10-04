import { Injectable } from '@angular/core';
import {  HttpClient} from '@angular/common/http';
import {  Observable} from 'rxjs';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class RestService {


  constructor(private http: HttpClient) {
    
  }
  getJSON(): Observable < any > {   
    
     return this.http.get('assets/data.json');
  }
}

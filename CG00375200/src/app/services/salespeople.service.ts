import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SalespeopleService {

  constructor(private http: HttpClient) { }
  getSalesPeople() {
    return this.http.get('http://localhost:8080/api/salespeople')
  }

  getOneSalesPeople(spid) {
    return this.http.get('http://localhost:8080/api/salespeople/' + spid)

  }
}

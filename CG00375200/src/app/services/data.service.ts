import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  spid: String;
  constructor() { }
  setSalesSpid(spid: String) {
    this.spid = spid;
  }

  getSpid() {
    return this.spid;
  }
}

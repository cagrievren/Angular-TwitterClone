import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = [];
  constructor() { }

  getData(id) {
    return this.data[id];
  }
  
  setData(id, [...data]) {
    this.data[id] = [...data];
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DietService {

  items = ["Please Select A Diet Plan"];

  constructor() {
    console.log('Hello Diet Service');
  }

  getItems() {
    return this.items;
  }

  removeItem(index) {
    this.items.splice(index, 1);
  }

  addItem(item) {
    this.items = (item);
  }

}


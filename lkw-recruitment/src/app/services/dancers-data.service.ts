import { Injectable } from '@angular/core';
import { Dancer } from "app/class/dancer";

@Injectable()
export class DancersDataService {
  dancers: Dancer[] = [];
  
  constructor() {

   }

  addDancer(dancer: Dancer): DancersDataService {
    this.dancers.push(dancer);
    return this;
  }

  deleteDancerById(id: number): DancersDataService {
    this.dancers = this.dancers.filter(dancer => dancer.id !== id);
    return this;
  }

  updateDancerById(id: number, values: Object = {}): Dancer  {
    let dancer = this.getDancerById(id);
    if(!dancer) {
      return null;
    }
    Object.assign(dancer, values);
    return dancer;
  }

  getAllDancers(): Dancer[] {
    return this.dancers;
  }

  getDancerById(id: number): Dancer {
    return this.dancers.filter(dancer => dancer.id === id).pop();
  }

  getDancerByName(_lastName: string): Dancer {
    return this.dancers.filter(dancer => dancer.lastName === _lastName).pop();
  }
}

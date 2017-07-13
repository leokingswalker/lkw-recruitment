import { Injectable } from '@angular/core';
import { Dancer } from "app/class/dancer";

@Injectable()
export class DancersDataService {
  dancers: Dancer[] = [];
  
  constructor() {

   }

  addTodo(dancer: Dancer): DancersDataService {
    this.dancers.push(dancer);
    return this;
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

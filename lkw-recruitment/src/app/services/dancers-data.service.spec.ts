import { TestBed, inject } from '@angular/core/testing';

import { DancersDataService } from './dancers-data.service';
import { Dancer } from "app/class/dancer";

describe('DancersDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DancersDataService]
    });
  });

  it('should be created', inject([DancersDataService], (service: DancersDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllDancers()', () => {
    it('should return an empty array by default', inject([DancersDataService], (service: DancersDataService) => {
      expect(service.getAllDancers()).toEqual([]);
    }));

    it('should return all dancers', inject([DancersDataService], (service: DancersDataService) => {
      let dancer1 = new Dancer({
        fisrtName: "Maxime"
      }),
      dancer2 = new Dancer({
        fisrtName: "Marc"
      });
      service.addDancer(dancer1);
      service.addDancer(dancer2);
      expect(service.getAllDancers()).toEqual([dancer1, dancer2]);
    }));
  });

  describe('#deleteDancerById(id)', () => {
    it('should remove dancer with the corresponding id', inject([DancersDataService], (service: DancersDataService) => {
      let dancer1 = new Dancer({ id: 4}),
          dancer2 = new Dancer({id: 2});
      
      service.addDancer(dancer1);
      service.addDancer(dancer2);

      expect(service.getAllDancers()).toEqual([dancer1, dancer2]);
      service.deleteDancerById(4);
      expect(service.getAllDancers()).toEqual([dancer2]);
      service.deleteDancerById(2);
      expect(service.getAllDancers()).toEqual([]);
    }));
  })
});

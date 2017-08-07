import {Dancer} from './dancer';

describe('Dancer', () => {
  it('should create an instance', () => {
    expect(new Dancer()).toBeTruthy();
  });
  it('should accept values in the constructor', () => {
    let dancer = new Dancer({
      firstName: 'Maxime',
      lastName: 'Gasnier',
      age: 22,
      danceStyles: ["Hip Hop", "BreakDance", "Zougoulou"],
      points: 4
    });
    expect(dancer.firstName).toEqual('Maxime');
    expect(dancer.lastName).toEqual('Gasnier');
    expect(dancer.age).toEqual(22);
    expect(dancer.danceStyles).toContain("Hip Hop");
    expect(dancer.points).toEqual(4);
  });
});

import { Component, OnInit, trigger, state, transition, animate, keyframes, style } from '@angular/core';
import { Dancer } from "app/class/dancer";


@Component({
  selector: 'app-homedancers',
  templateUrl: './homedancers.component.html',
  styleUrls: ['./homedancers.component.scss'],
  animations: [
  trigger('flyInOut', [
    state('in', style({transform: 'translateY(0)'})),
    transition('void => *', [
      animate(210, keyframes([
        style({opacity: 0, transform: 'translateY(20%)', offset: 0}),
        style({opacity: 0.5, transform: 'translateY(10%)',  offset: 0.3}),
        style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
      ]))
    ])
  ])
]
})
export class HomedancersComponent implements OnInit {
  esilv: boolean = true;
  iim: boolean = false;
  emlv: boolean = false;
  private next: number = 0;

  public dataDancers: Array<Dancer> = this.pushDancerData(); // To remove when refacto is done with http get.
  public dancers: Array<any> = [];

  constructor() {
    this.doNext();
   }

  ngOnInit() {
  }

  /**
   * METHOD TO BE REMOVED BY A HTTP GET.
   */
  pushDancerData() {
    let arr : Array<Dancer> = [];

    for(let i= 0; i < 20; i++) {
      if(Math.random()*10 > 6) {
        arr.push(new Dancer({firstName: "Christophe", lastName: "Coquin", age: 22, schoolName: "iim"}))
      } else if(Math.random()*10 > 3){
        arr.push(new Dancer({firstName: "Maxime", lastName: "Gasnier", age: 22, schoolName: "esilv"}));
      } else if(Math.random()*10 > 5 ){
        arr.push(new Dancer({firstName: "Majdo", lastName: "Shnouney", age: 22, schoolName: "emlv"}));
      }
    }
    console.log(Math.random())
    return arr;
  }
  /**
   * [Animation] method that push inside the new array the data. 
   */
  doNext() {
    if(this.next < this.dataDancers.length) {
      this.dancers.push(this.dataDancers[this.next++]);
    }
  }

}

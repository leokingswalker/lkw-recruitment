import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homedancers',
  templateUrl: './homedancers.component.html',
  styleUrls: ['./homedancers.component.scss']
})
export class HomedancersComponent implements OnInit {
  esilv: boolean = true;
  iim: boolean = false;
  emlv: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}

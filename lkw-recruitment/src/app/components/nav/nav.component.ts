import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  menuActive: number = 2;

  constructor() { }

  ngOnInit() {
  
  }

  changeLayout(view) {
    switch (view) {
      case "home":
        this.menuActive = 2;
        break;
        case "user":
        this.menuActive = 3;
        break;
        case "menu":
        this.menuActive = 1;
        break;
    
      default:
        break;
    }
  }
}

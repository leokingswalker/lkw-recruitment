import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  lkwUser = '';
  lkwAccess: string = '';
  accept: boolean = false;
  unvalid: boolean = false;
  buttonEnabled: boolean = false;

  constructor(private router: Router) {

  }

  ngOnInit() {

  }
  
  public checkIfValid() {
    if(this.lkwAccess == "lafinale4" && this.lkwUser != "") {
      this.unvalid = false;
      this.accept = true;
      this.buttonEnabled = true;
      setTimeout( () => this.router.navigate(['/dancers']), 1000 );
      
    } else {
      this.buttonEnabled = false;
      this.unvalid = true;
    }
  }

  public onSubmit() {
    this.checkIfValid();
  }
}

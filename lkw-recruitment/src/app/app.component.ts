import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lkwUser = '';
  lkwAccess: string = '';
  accept: boolean = false;
  unvalid: boolean = false;
  buttonEnabled: boolean = false;

  public checkIfValid() {
    if(this.lkwAccess == "lafinale4" && this.lkwUser != "") {
      this.unvalid = false;
      this.accept = true;
      this.buttonEnabled = true;
    } else {
      this.buttonEnabled = false;
      this.unvalid = true;
    }
  }

  public onSubmit() {
    this.checkIfValid();
  }
}

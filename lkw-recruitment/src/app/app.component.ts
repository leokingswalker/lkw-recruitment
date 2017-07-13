import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lkwAccess: string = '';

  public checkIfValid() {
    if(this.lkwAccess == "lafinale4"){
      alert('Yeah');
    } 
    console.log('ok');
  }

  public onSubmit() {
    this.checkIfValid();
  }
}

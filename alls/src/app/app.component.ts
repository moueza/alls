import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.scss']
      })
export class AppComponent {
  title = 'alls';
  value='';

  updateValue(){
    this.value='value of string';
  }


  nothing(){
   
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-moi',
  templateUrl: './index-moi.component.html',
  styleUrls: ['./index-moi.component.scss']
})
export class IndexMoiComponent implements OnInit {
 title = 'index';
 value='';


 
  updateValue(){
    this.value='value of string';
    //peinture-murale-moueza-peter-image
  }


  nothing(){
   
  }
  constructor() { }

  ngOnInit(): void {
  }

}

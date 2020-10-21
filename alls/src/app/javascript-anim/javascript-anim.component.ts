import { Component, OnInit } from '@angular/core';

//import * as JavAnim from './../pages/FriendCard';
import * as JavAnim from  './javascript-anim';

@Component({
  selector: 'app-javascript-anim',
  templateUrl: './javascript-anim.component.html',
  styleUrls: ['./javascript-anim.component.scss'],
})
export class JavascriptAnimComponent implements OnInit {
  constructor() {
    //window.canvas

    //https://www.w3schools.com/html/html5_canvas.asp
    //https://stackoverflow.com/questions/58218597/property-getcontext-does-not-exist-on-type-htmlelement/58218739
    var c =  <HTMLCanvasElement>  document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

  }

  ngOnInit(): void {}

  //javascriptAnim(){ to  file javascript-anim
}

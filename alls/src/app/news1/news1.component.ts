import { Component, OnInit } from '@angular/core';

import { NewsComponent } from '../news/news.component';

@Component({
  selector: 'app-news1',
  templateUrl: './news1.component.html',
  styleUrls: ['./news1.component.scss']
})
export class News1Component extends NewsComponent implements OnInit {
  /*  src/app/news1/news1.component.ts:12:3 - error TS2377: Constructors for derived classes must contain a 'super' call.
    
    12   constructor() { }
  */
  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';
import { PeintureMuraleMouezaPeterImageComponent } from './peinture-murale-moueza-peter-image/peinture-murale-moueza-peter-image.component';

import{Router, NavigationEnd} from '@angular/router';
declare let gtag: Function;


@Component({
  selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.scss']
      })
export class AppComponent {
  title = 'alls';
 

 constructor(public router: Router){   
      this.router.events.subscribe(event => {
         if(event instanceof NavigationEnd){
             gtag('config', 'UA-177419492-1', 
                   {
                     'page_path': event.urlAfterRedirects
                   }
                  );
          }
       }
    )}
}

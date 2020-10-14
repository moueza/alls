import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeintureMuraleMouezaPeterImageComponent } from './peinture-murale-moueza-peter-image/peinture-murale-moueza-peter-image.component';
import { MailleBrezeNantesMouezaComponent } from './maille-breze-nantes-moueza/maille-breze-nantes-moueza.component';
import { MailleBrezeBateauNantesMouezaComponent } from './maille-breze-bateau-nantes-moueza/maille-breze-bateau-nantes-moueza.component';
import { BelemBateauNantesMouezaComponent } from './belem-bateau-nantes-moueza/belem-bateau-nantes-moueza.component';
import { PitchDEntretienPoleEmploiVSIMouezaComponent } from './pitch-d-entretien-pole-emploi-vsi-moueza/pitch-d-entretien-pole-emploi-vsi-moueza.component';
import { MethodeStarPdfPoleEmploiVSIMouezaPeterComponent } from './methode-star-pdf-pole-emploi-vsi-moueza-peter/methode-star-pdf-pole-emploi-vsi-moueza-peter.component';
import { TennisTournoiLe20200816dtcTmurComponent } from './tennis-tournoi-le20200816dtc-tmur/tennis-tournoi-le20200816dtc-tmur.component';
import { ArbitrageComponent } from './arbitrage/arbitrage.component';
import { ChampionnatTennis2020a2021tmurComponent } from './championnat-tennis2020a2021tmur/championnat-tennis2020a2021tmur.component';

import { TennisTournoiLe20200920dtcTmurDTCnantesMOUEZAComponent } from './tennis-tournoi-le20200920dtc-tmur-dtcnantes-moueza/tennis-tournoi-le20200920dtc-tmur-dtcnantes-moueza.component';
import { JournalPublicComponent } from './journal-public/journal-public.component';
import { IndexMoiComponent } from './index-moi/index-moi.component';
import { DiversComponent } from './divers/divers.component';
import { SamsungComponent } from './samsung/samsung.component';
import { KizombaNantesDanseMouezaPeterComponent } from './kizomba-nantes-danse-moueza-peter/kizomba-nantes-danse-moueza-peter.component';
import { NetworkAlarmComponent } from './network-alarm/network-alarm.component';
import { NewsComponent } from './news/news.component';
import { News1Component } from './news1/news1.component';
import { News2Component } from './news2/news2.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuLeftComponent } from './menu-left/menu-left.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NewsFormComponent } from './news-form/news-form.component';
import { CobolComponent } from './cobol/cobol.component';
import { AngularComponent } from './angular/angular.component';


//import {GoogleAnalyticsService} from '../google-analytics.service';

@NgModule({
  declarations: [
    AppComponent,
    PeintureMuraleMouezaPeterImageComponent,
    MailleBrezeNantesMouezaComponent,
    MailleBrezeBateauNantesMouezaComponent,
    BelemBateauNantesMouezaComponent,
    PitchDEntretienPoleEmploiVSIMouezaComponent,
    MethodeStarPdfPoleEmploiVSIMouezaPeterComponent,
    TennisTournoiLe20200816dtcTmurComponent,
    ArbitrageComponent,
    ChampionnatTennis2020a2021tmurComponent,
    
   
    TennisTournoiLe20200920dtcTmurDTCnantesMOUEZAComponent,
    
   
    JournalPublicComponent,
    
   
    IndexMoiComponent,
    
   
    DiversComponent,
    
   
    SamsungComponent,
    
   
    KizombaNantesDanseMouezaPeterComponent,
    
   
    NetworkAlarmComponent,
    
   
    NewsComponent,
    
   
    News1Component,
    
   
    News2Component,
    
   
    HeaderComponent,
    
   
    FooterComponent,
    
   
    MenuLeftComponent,
    
   
    BreadcrumbComponent,
    
   
    NewsFormComponent,
    
   
    CobolComponent,
    
   
    AngularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
  ],
 //https://medium.com/madhash/how-to-properly-add-google-analytics-tracking-to-your-angular-web-app-bc7750713c9e
 //providers: [GoogleAnalyticsService],
  providers: [],

bootstrap: [AppComponent]
})
export class AppModule { }

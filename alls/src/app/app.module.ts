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
    
   
    TennisTournoiLe20200920dtcTmurDTCnantesMOUEZAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

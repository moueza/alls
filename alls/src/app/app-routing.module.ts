import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeintureMuraleMouezaPeterImageComponent } from './peinture-murale-moueza-peter-image/peinture-murale-moueza-peter-image.component';

import { PitchDEntretienPoleEmploiVSIMouezaComponent  } from  './pitch-d-entretien-pole-emploi-vsi-moueza/pitch-d-entretien-pole-emploi-vsi-moueza.component';


import { MethodeStarPdfPoleEmploiVSIMouezaPeterComponent } from './methode-star-pdf-pole-emploi-vsi-moueza-peter/methode-star-pdf-pole-emploi-vsi-moueza-peter.component';


import { TennisTournoiLe20200816dtcTmurComponent } from './tennis-tournoi-le20200816dtc-tmur/tennis-tournoi-le20200816dtc-tmur.component';

import { ArbitrageComponent } from './arbitrage/arbitrage.component';

import { ChampionnatTennis2020a2021tmurComponent } from './championnat-tennis2020a2021tmur/championnat-tennis2020a2021tmur.component';

import { TennisTournoiLe20200920dtcTmurDTCnantesMOUEZAComponent } from './tennis-tournoi-le20200920dtc-tmur-dtcnantes-moueza/tennis-tournoi-le20200920dtc-tmur-dtcnantes-moueza.component';



import { JournalPublicComponent } from './journal-public/journal-public.component';


const routes: Routes = [
			{ path: 'peinturemurale', component: PeintureMuraleMouezaPeterImageComponent },

			{ path: 'pitchDentretien', component: PitchDEntretienPoleEmploiVSIMouezaComponent },

			{ path: 'star', component: MethodeStarPdfPoleEmploiVSIMouezaPeterComponent },

			{ path: 'tennisLe20200816', component: TennisTournoiLe20200816dtcTmurComponent },


			{ path: 'arbitrage', component: ArbitrageComponent },
			
				{ path: 'journal', component: JournalPublicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

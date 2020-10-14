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

import { IndexMoiComponent } from './index-moi/index-moi.component';
import { DiversComponent } from './divers/divers.component';

import { SamsungComponent } from './samsung/samsung.component';

import { NetworkAlarmComponent } from './network-alarm/network-alarm.component';

import { NewsComponent } from './news/news.component';
import { News1Component } from './news1/news1.component';
import { News2Component } from './news2/news2.component';


import { AngularComponent } from './angular/angular.component';
import { CobolComponent } from './cobol/cobol.component';



const routes: Routes = [	{ path: '', component: IndexMoiComponent },
				
				{ path: 'peinturemurale', component: PeintureMuraleMouezaPeterImageComponent },

				{ path: 'pitchDentretien', component: PitchDEntretienPoleEmploiVSIMouezaComponent },

				{ path: 'star', component: MethodeStarPdfPoleEmploiVSIMouezaPeterComponent },

				{ path: 'tennisLe20200816', component: TennisTournoiLe20200816dtcTmurComponent },
				{ path: 'tennisLe20200920', component: TennisTournoiLe20200920dtcTmurDTCnantesMOUEZAComponent },

				{ path: 'arbitrage', component: ArbitrageComponent },
			
				{ path: 'journal', component: JournalPublicComponent },
				{ path: 'misc', component: DiversComponent },

				{ path: 'samsung', component: SamsungComponent },

				{ path: 'championnat-2020-2021-tennis-Nantes-OVS-Peter-MOUEZA', component: ChampionnatTennis2020a2021tmurComponent },

				{ path: 'network-alarm', component: NetworkAlarmComponent },


				{ path: 'news', component: NewsComponent },
				{ path: 'news1', component: News1Component },
				{ path: 'news2', component: News2Component },




				{ path: 'angular', component: AngularComponent },
				{ path: 'cobol', component: CobolComponent },

				];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
      })
export class AppRoutingModule { }

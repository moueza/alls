import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeintureMuraleMouezaPeterImageComponent } from './peinture-murale-moueza-peter-image/peinture-murale-moueza-peter-image.component';
const routes: Routes = [
  { path: 'peinturemurale', component: PeintureMuraleMouezaPeterImageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

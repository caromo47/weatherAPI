import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { WashingtonComponent } from './washington/washington.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
	{path: '', pathMatch: 'full', component: LandingComponent},
	{path: 'burbank', component: BurbankComponent},
	{path: 'seattle', component: SeattleComponent},
	{path: 'sanjose', component: SanjoseComponent},
	{path: 'washington', component: WashingtonComponent},
	{path: 'chicago', component: ChicagoComponent},
	{path: 'dallas', component: DallasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

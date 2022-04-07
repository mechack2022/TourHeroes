import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ {path: '', redirectTo:'/dashboard', pathMatch: 'full'}, 
{path: 'dashboard', component:DashboardComponent,} 
,{path:'heroes', component:HeroesComponent}, 
{path:'detail/:id', component:HeroDetailsComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

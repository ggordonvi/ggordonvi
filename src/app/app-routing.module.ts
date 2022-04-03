import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FourohfourComponent } from './pages/fourohfour/fourohfour.component';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

const routes: Routes = [
  { path: 'portfolio',   component: PortfolioComponent },
  { path: 'about',   component: AboutComponent },
  { path: 'home',   component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '',   component: HomeComponent },

  // Wildcard route for 404 request
  { path: '**', pathMatch: 'full', redirectTo: '/404' },
  { path: '404',   component: FourohfourComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

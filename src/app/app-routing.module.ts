import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FourohfourComponent } from './pages/fourohfour/fourohfour.component';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DashboardComponent } from './components/portfolio/dashboard/dashboard.component';
import { DetailComponent } from './components/portfolio/detail/detail.component';

const routes: Routes = [

  // { path: 'contact',   component: ContactComponent },
  { 
    path: 'portfolio',
    component: PortfolioComponent,
    children: [
      {
        path: "",
        outlet: "portfolio",
        component: DashboardComponent
      },
      {
        path: "detail",
        outlet: "portfolio",
        component: DetailComponent
      }
    ]
  },
  { path: 'skills', component: ExperienceComponent },
  { path: 'about', component: AboutComponent },
  { 
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: "",
        outlet: "portfolio",
        component: DashboardComponent
      },
      {
        path: "detail",
        outlet: "portfolio",
        component: DetailComponent
      }
    ]
  },
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FourohfourComponent } from './pages/fourohfour/fourohfour.component';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { DashboardComponent } from './pages/projects/dashboard/dashboard.component';
import { DetailComponent } from './pages/projects/detail/detail.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [

  // { path: 'contact',   component: ContactComponent },
  { 
    path: 'projects',
    component: ProjectsComponent,
    children: [
      {
        path: "",
        outlet: "projects",
        component: DashboardComponent
      },
      {
        path: ":id",
        outlet: "projects",
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
        outlet: "projects",
        component: DashboardComponent
      },
      {
        path: ":id",
        outlet: "projects",
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
  // imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourohfourComponent } from './pages/fourohfour/fourohfour.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  // { path: 'home',   component: HomeComponent },
  // { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '',   component: HomeComponent },

  // Wildcard route for 404 request
  // { path: '**', pathMatch: 'full', component: FourohfourComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

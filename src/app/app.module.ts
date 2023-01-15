import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FourohfourComponent } from './pages/fourohfour/fourohfour.component';

import { HeaderComponent } from './components/header/header.component';
import { MobilenavComponent } from './components/mobilenav/mobilenav.component';
import { FooterComponent } from './components/footer/footer.component';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { DashboardComponent } from './pages/projects/dashboard/dashboard.component';
import { ItemComponent } from './pages/projects/item/item.component';
import { DetailComponent } from './pages/projects/detail/detail.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    FourohfourComponent,

    HeaderComponent,
    MobilenavComponent,
    FooterComponent,

    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    DashboardComponent,
    ItemComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

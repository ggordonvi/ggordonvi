import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ThreejsComponent } from './features/threejs/threejs.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FourohfourComponent } from './pages/fourohfour/fourohfour.component';
import { MobilenavComponent } from './components/mobilenav/mobilenav.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ExperienceComponent } from './pages/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    FourohfourComponent,
    MobilenavComponent,
    SidenavComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

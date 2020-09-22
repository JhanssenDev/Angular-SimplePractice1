import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
//!COMPONENTS
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { HeroesComponent } from './Components/heroes/heroes.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

//!SERVICES 
import { HeroeService } from './services/heroes.service';
//!ROUTER
import { APP_ROUTING } from "./app.router";
import { HeroeComponent } from './Components/heroe/heroe.component';
import { HeroeFindComponent } from './Components/heroe-find/heroe-find.component';
import { HeroeTarjetaComponent } from './Components/heroe-tarjeta/heroe-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    PageNotFoundComponent,
    HeroeComponent,
    HeroeFindComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [HeroeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

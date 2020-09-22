import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./Components/home/home.component";
import { HeroesComponent } from "./Components/heroes/heroes.component";
import { AboutComponent } from "./Components/about/about.component";
import { PageNotFoundComponent } from "./Components/page-not-found/page-not-found.component";
import { HeroeComponent } from './Components/heroe/heroe.component';
import { HeroeFindComponent } from './Components/heroe-find/heroe-find.component';

const APP_ROUTER: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'heroeFind/:texto', component: HeroeFindComponent },
    { path: 'about', component: AboutComponent },
    // !Defaults page 
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: '**', component: PageNotFoundComponent }
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTER);
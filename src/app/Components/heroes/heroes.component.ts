import { Component, OnInit } from '@angular/core';
import { HeroeService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(
    private _heroeService: HeroeService,
    private router: Router) {

  }

  ngOnInit() {
    this.heroes = this._heroeService.getHeroes();
  }

  getHeroes() {
    return this.heroes;
  }

  // verHeroeParend(idx: string) {

  //   this.router.navigate(['/heroe', idx]);
  // }

}

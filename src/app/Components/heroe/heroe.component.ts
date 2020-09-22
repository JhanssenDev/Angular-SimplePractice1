import { Component, OnInit } from '@angular/core';
import { HeroeService, Heroe } from "../../services/heroes.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  heroe: any = {};

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroeService: HeroeService) {

    this._activatedRoute.params.subscribe(param => {

      this.heroe = this._heroeService.getHeroe(param.id);

    });

  }


}

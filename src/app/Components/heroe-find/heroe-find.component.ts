import { Component, OnInit } from '@angular/core';
import { HeroeService, Heroe } from "../../services/heroes.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-heroe-find',
  templateUrl: './heroe-find.component.html',
  styleUrls: ['./heroe-find.component.css']
})
export class HeroeFindComponent implements OnInit {
  heroeArr: any = [];
  inputText: string;
  idx: number;
  constructor(private _activatedRoute: ActivatedRoute, private _heroeService: HeroeService) {

  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(param => {

      this.heroeArr = this._heroeService.finHeroByText(param['texto']);
      this.inputText = param['texto'];
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  // ?Funcion que se activa cuando se hace click o se presiona enter en el buscado 
  buscarHeroe(texto: string) {

    let ruta = this._router.navigate(['/heroeFind', texto]);


  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
  // *input 
  @Input() heroeChild: any = {};
  @Input() indexChild: string;
  // *Output 
  // @Output() heroeSeleccionado = new EventEmitter<number>(); //?1era Forma
  //TODO: @Output() heroeSeleccionado: EventEmitter<number>; //?2da Forma que consta en declarar y el otro de instanciar;

  constructor(private router: Router) {

    //TODO:  this.heroeSeleccionado = new EventEmitter();//?2da Forma que consta en declarar y el otro de instanciar;

  }

  ngOnInit(): void {
  }
  //*Con Output
  // verHeroeChild(idx: number) {
  //   //TODO:  this.heroeSeleccionado.emit(MyId);
  // }

  verHeroe(idx: string) {
    this.router.navigate(['/heroe', idx]);
  }


}

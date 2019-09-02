import { Component, OnInit, Input, Output,  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input() leyenda = 'Leyenda';
  @Input() progreso = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  cambiarValor(valor: number) {

    if (this.progreso + valor > 100) {
      this.progreso = 100;
      return;
    } else if (this.progreso + valor < 0) {
      this.progreso = 0;
      return;
    } else {
      this.progreso = this.progreso + valor;

      this.cambioValor.emit(this.progreso);
    }
  }

}

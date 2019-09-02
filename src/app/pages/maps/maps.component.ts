import { Component, OnInit } from '@angular/core';
import { Marcador } from './marcador.class';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  lat = 39.4697500;
  lon = -0.3773900;
  marcadores: Marcador[] = [];


  constructor() {

    const m1 = new Marcador (39.6697500, -0.3773900 );
    m1.titulo = 'Estación1';
    m1.descripcion = 'Estación1';
    this.marcadores.push( m1);

    const m2 = new Marcador (39.7697500, -0.7773900 );
    m2.titulo = 'Estación2';
    m2.descripcion = 'Estación2';
    this.marcadores.push( m2);
   }


  ngOnInit() {
  }

}

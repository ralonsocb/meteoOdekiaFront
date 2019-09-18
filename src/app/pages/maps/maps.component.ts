import { Component, OnInit } from '@angular/core';
import { Marcador } from './marcador.class';
import { Estacion } from 'src/app/models/estacion.model';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { EstacionService } from '../../services/estacion/estacion.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  lat = 39.4697500;
  lon = -0.3773900;
  marcadores: Marcador[] = [];
  usuario: Usuario;


  constructor( public _usuarioService: UsuarioService, public _estacionService: EstacionService) {

    this.usuario = this._usuarioService.usuario;

    for(let estacion of this.usuario.estaciones){
      let id = String(estacion);
      this._estacionService.getEstacion(id).
      subscribe( (resp:Estacion) => {
        let marcador = new Marcador(resp.estacion.latitud, resp.estacion.longitud);
        marcador.titulo = resp.estacion.nombre;
        this.marcadores.push(marcador);
      });
    }

  }


  ngOnInit() {
  }

}

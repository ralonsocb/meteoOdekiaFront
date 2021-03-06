import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/shared/sidebar.service';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { EstacionService } from '../../services/estacion/estacion.service';
import { Usuario } from 'src/app/models/usuario.model';
import { Estacion } from 'src/app/models/estacion.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  usuario: Usuario;
  estaciones: Estacion[] = [];

  constructor( public _sidebar: SidebarService,
               public _usuarioService: UsuarioService,
               public _estacionService: EstacionService) {

                this.usuario = this._usuarioService.usuario;

                for(let estacion of this.usuario.estaciones){
                  let id = String(estacion);
                  this._estacionService.getEstacion(id).
                  subscribe( (resp:Estacion) => {
                    this.estaciones.push(resp.estacion);
                    console.log(resp.estacion);
                  });
                }


                }

  ngOnInit() {
     

  }

}

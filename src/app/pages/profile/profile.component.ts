import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Estacion } from 'src/app/models/estacion.model';
import { EstacionService } from '../../services/estacion/estacion.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  usuario: Usuario;
  estaciones: Estacion[] = [];

  constructor( public _usuarioService: UsuarioService, public _estacionService: EstacionService) {
    this.usuario = this._usuarioService.usuario;
    for ( let id of this._usuarioService.usuario.estaciones){
      this._estacionService.getEstacion(String(id)).
      subscribe( (resp:Estacion) => {
        console.log(resp.estacion);
        this.estaciones.push(resp.estacion);
    });
    }
    
   }

  ngOnInit() {
  }

  actualizarUsuario ( usuario: Usuario) {

    this.usuario.nombre = usuario.nombre;
    this.usuario.email = usuario.email;


    this._usuarioService.actualizarUsuario(this.usuario)
        .subscribe();
  }

  


}

import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  usuario: Usuario;

  constructor( public _usuarioService: UsuarioService) {
    this.usuario = this._usuarioService.usuario;
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

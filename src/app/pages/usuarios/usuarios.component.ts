import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario/usuario.service';
//import swal from 'sweetalert';

declare var swal: any;

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

usuarios: Usuario[] = [];
desde: number = 0;
cargando: boolean = true;



totalRegistros: number = 0;

  constructor( public _usuariosService:UsuarioService) { }

  ngOnInit() {

    this.getUsuarios();
  }

  getUsuarios(){
    this.cargando = true;

    this._usuariosService.getUsuarios(this.desde)
        .subscribe( (resp: any) => {
          console.log(resp);
          this.totalRegistros = resp.total;
          this.usuarios = resp.usuarios;
          this.cargando = false;
        });

  }

  cambiarDesde ( valor: number){

    let desde = this.desde + valor;

    if (desde >= this.totalRegistros){
      return;
    }
    if ( desde < 0){
      return;
    }
    this.desde += valor;
    this.getUsuarios();
  }

  buscarUsuario( termino: string){
    
    if (termino.length <= 0){
      this.getUsuarios();
      return;
    }


    this._usuariosService.buscarUsuarios(termino)
        .subscribe( (resp:any) =>{
         this.usuarios = resp.usuarios;
        });

  }

  eliminarUsuario ( usuario: Usuario) {

    if ( usuario._id === this._usuariosService.usuario._id){
      swal('No se pudo eliminar al usuario', 'Un usuario no puede eliminarse a sí mismo', 'error');
      return;
    }

    swal({
      title:'¿Estás seguro?',
      text: 'Va a eliminar al usuario '+ usuario.nombre,
      icon: 'warning',
      buttons: true,
      dangerMode: true
    })
    .then( borrar => {
      if (borrar){
      this._usuariosService.eliminarUsuario( usuario._id)
        .subscribe( eliminado =>{
          console.log(eliminado);
          this.getUsuarios();
        });
      }

 
    });
  }

  actualizarUsuario ( usuario:Usuario) {

    this._usuariosService.actualizarUsuario( usuario )
      .subscribe();
  }

}

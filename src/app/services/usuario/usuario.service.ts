import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import {map, catchError} from 'rxjs/operators';
import sweetalert from 'sweetalert';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor(
    public http: HttpClient,
    public router: Router
  ) {
    this.cargarStorage();
  }

  estaLogueado() {
    return ( this.token.length > 5 ) ? true : false;
  }

  cargarStorage() {

    if ( localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse( localStorage.getItem('usuario') );

    } else {
      this.token = '';
      this.usuario = null;
    }

  }

  guardarStorage( id: string, token: string, usuario: Usuario ) {

    localStorage.setItem('id', id );
    localStorage.setItem('token', token );
    localStorage.setItem('usuario', JSON.stringify(usuario) );

    this.usuario = usuario;
    this.token = token;
  }

  logout() {
    this.usuario = null;
    this.token = '';

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    this.router.navigate(['/login']);
  }


  login( usuario: Usuario, recordar: boolean = false ) {

    if ( recordar ) {
      localStorage.setItem('email', usuario.email );
    }else {
      localStorage.removeItem('email');
    }

    let url = URL_SERVICIOS + '/login';
    return this.http.post( url, usuario )
                .pipe(map( (resp: any) => {
                  this.guardarStorage( resp.id, resp.token, resp.usuario );

                  return true;
                })
                , catchError ( err =>{
                  sweetAlert ('Error al acceder', err.error.mensaje,'error');
                  return throwError (err);
                }));

  }


  crearUsuario( usuario: Usuario ) {

    let url = URL_SERVICIOS + '/usuario';

    return this.http.post( url, usuario )
              .pipe(map( (resp: any) => {

                sweetAlert('Usuario creado', usuario.email, 'success' );
                return resp.usuario;
              }));
  }

  actualizarUsuario (usuario: Usuario ) {

    console.log("AQUI SE LLEGA");
 


    let url = URL_SERVICIOS + '/usuario/' + usuario._id;
    url += '?token='+ this.token;

    console.log (url);
    return this.http.put(url, usuario)
        .pipe(map ( (resp:any) => {

          if (usuario._id === this.usuario._id){

            this.guardarStorage( resp.usuario._id, this.token, resp.usuario);
          }


          sweetAlert('Usuario actualizado', usuario.nombre, 'success');

          return true;
        }));
  }

  getUsuarios( desde: number = 0) {
    let url = URL_SERVICIOS + '/usuario?desde=' + desde;

    return this.http.get(url);

  }

  buscarUsuarios (termino: string) {

    let url = URL_SERVICIOS+ '/busqueda/coleccion/usuarios/' + termino;
    return this.http.get(url);

  }

  eliminarUsuario ( id: string) {

    let url = URL_SERVICIOS + '/usuario/' +id;
    url += '?token='+ this.token;

    return this.http.delete(url)
                .pipe(map( resp => {
                  sweetAlert('Usuario eliminado', ' El usuario ha sido eliminado correctamente', 'success');
                  return true;
                }));
  }

}

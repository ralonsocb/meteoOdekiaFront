import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';

import swal from 'sweetalert';
import { UsuarioService } from '../usuario/usuario.service';
import { Estacion } from 'src/app/models/estacion.model';

@Injectable({
  providedIn: 'root'
})
export class EstacionService {
  [x: string]: any;

  totalEstaciones: number = 0;


  constructor( public http: HttpClient, public _usuarioService: UsuarioService) { }


getEstaciones (){

  let url = URL_SERVICIOS + '/estacion';

  return this.http.get( url)
        .pipe(map((resp:any) => {
          this.totalEstaciones = resp.total;
          return resp.estaciones;
        }));
}

getEstacion ( id: string){

  let url = URL_SERVICIOS+'/estacion/'+id;

  return this.http.get(url);
    
}

buscarEstaciones( termino: string) {

    let url = URL_SERVICIOS+ '/busqueda/coleccion/estaciones/' + termino;
    return this.http.get(url);

}

crearEstacion(estacion:Estacion) {

  let url = URL_SERVICIOS+'/estacion';

  if ( estacion._id){
    url += '/'+estacion._id;
    url += '?token='+ this._usuarioService.token;

    return this.http.put(url, estacion)
      .pipe(map( (resp:any) =>{
        swal('Estación actualizada',estacion.nombre, 'success');
        return resp.estacion;
      }));
  }else{
    url += '?token='+ this._usuarioService.token;
    return this.http.post(url, estacion)
      .pipe(map( (resp:any) => {
        swal('Estación creada',estacion.nombre, 'success');
        return resp.estacion;
      }));
  }
  
}


eliminarEstacion ( id: string) {

  let url = URL_SERVICIOS + '/estacion/' +id;
  url += '?token='+ this._usuarioService.token;

  return this.http.delete(url)
              .pipe(map( resp => {
                swal('Estación eliminada', ' La estación ha sido eliminada correctamente', 'success');
                return true;
              }));
}


}

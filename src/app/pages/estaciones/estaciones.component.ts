import { Component, OnInit } from '@angular/core';
import { Estacion } from '../../models/estacion.model';
import { EstacionService } from '../../services/estacion/estacion.service';

declare var swal: any;

@Component({
  selector: 'app-estaciones',
  templateUrl: './estaciones.component.html',
  styles: []
})
export class EstacionesComponent implements OnInit {

  estaciones: Estacion[] = [];
  desde: number = 0;

  constructor( public _estacionService: EstacionService) { }

  ngOnInit() {
    this.getEstaciones();
  }

  getEstaciones(){
    this._estacionService.getEstaciones()
        .subscribe( estaciones => this.estaciones = estaciones)
  }


  buscarEstacion (termino:string){
    if (termino.length <= 0){
      this.getEstaciones();
      return;
    }


    this._estacionService.buscarEstaciones(termino)
        .subscribe( (resp:any) =>{
         this.estaciones = resp.estaciones;
        });

  }

  eliminarEstacion(estacion:Estacion){

    swal({
      title:'¿Estás seguro?',
      text: 'Va a eliminar la estación '+ estacion.nombre,
      icon: 'warning',
      buttons: true,
      dangerMode: true
    })
    .then( borrar => {
      if (borrar){
      this._estacionService.eliminarEstacion( estacion._id)
        .subscribe( eliminado =>{
          console.log(eliminado);
          this.getEstaciones();
        });
      }
    });
  }

  cambiarDesde ( valor: number){

    let desde = this.desde + valor;

    if (desde >= this._estacionService.totalEstaciones){
      return;
    }
    if ( desde < 0){
      return;
    }
    this.desde += valor;
    this.getEstaciones();
  }



}

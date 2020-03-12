import { Component, OnInit } from '@angular/core';
import { EstacionService } from 'src/app/services/estacion/estacion.service';
import { Estacion } from 'src/app/models/estacion.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  
  estaciones: Estacion[] = [];

  constructor(public _estacionService: EstacionService) { }

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
}




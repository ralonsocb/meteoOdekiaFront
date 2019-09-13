import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Estacion } from '../../models/estacion.model';
import { EstacionService } from '../../services/estacion/estacion.service';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estacion',
  templateUrl: './estacion.component.html',
  styles: []
})
export class EstacionComponent implements OnInit {

  
  usuarios: Usuario[] = [];
  estacion: Estacion = new Estacion('','');

  constructor( public _estacionService: EstacionService, 
               public _usuarioService: UsuarioService,
               public router: Router,
               public activatedRoute: ActivatedRoute  ) {

                activatedRoute.params.subscribe(params => {
                  let id = params['id'];

                  if (id !== 'nuevo'){
                    this.getEstacion(id);
                  }
                })
                }

  ngOnInit() {

    this._usuarioService.getUsuarios().
      subscribe( (usuarios: any) => this.usuarios = usuarios.usuarios );
  }

  getEstacion ( id: string ){
    this._estacionService.getEstacion(id)
      .subscribe((estacion:any) => this.estacion = estacion.estacion
      );
  }

  guardarEstacion( f: NgForm){

    if (f.invalid){
      return;
    }
    this._estacionService.crearEstacion( this.estacion)
          .subscribe( estacion => { console.log(estacion)});
  }

}

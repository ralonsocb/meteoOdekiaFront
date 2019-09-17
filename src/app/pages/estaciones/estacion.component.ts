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
  usuario: Usuario;
  usuariosEstacion: Usuario[] = [];
  estacion: Estacion = new Estacion('','');

  desde: number = 0;

  constructor( public _estacionService: EstacionService,
               public _usuarioService: UsuarioService,
               public router: Router,
               public activatedRoute: ActivatedRoute  ) {

                activatedRoute.params.subscribe(params => {
                  let id = params['id'];

                  if (id !== 'nuevo'){
                    this.getEstacion(id);
                  }
                });
                }

  ngOnInit() {
    this._usuarioService.getUsuarios().
      subscribe( (usuarios: any) => {
        this.usuarios = usuarios.usuarios;
        for(let usuario of this.usuarios){
          if(usuario.estaciones.includes(this.estacion._id)){
            this.usuariosEstacion.push(usuario);
          }
        }
      });
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


  cambiarDesde ( valor: number){

    let desde = this.desde + valor;

    if (desde >= 18){
      return;
    }
    if ( desde < 0){
      return;
    }
    this.desde += valor;
    this._usuarioService.getUsuarios(desde).
    subscribe( (usuarios: any) => this.usuarios = usuarios.usuarios );
  }


  addUsuario (usuario:Usuario){
    usuario.estaciones.push(this.estacion);
    this._usuarioService.actualizarUsuario(usuario).subscribe();
  }

  eliminarUsuario (usuario:Usuario){
    let indexEstacion= usuario.estaciones.indexOf(this.estacion._id);
    let indexUsuario = this.usuariosEstacion.indexOf(usuario);
    usuario.estaciones.splice(indexEstacion, 1);
    this.usuariosEstacion.splice(indexUsuario, 1);
    this._usuarioService.actualizarUsuario(usuario).subscribe();
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert';
import { UsuarioService } from '../services/usuario/usuario.service';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';

declare function init_plugins();



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;

  constructor( public usuarioService: UsuarioService,
               public router: Router) { }





  ngOnInit() {

    init_plugins();

    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      condiciones: new FormControl( false)
    });
  }



  registrarUsuario(){

    if (this.forma.invalid) {
      return;
    }

    if (!this.forma.value.condiciones) {
  
      swal('Importante','Debe aceptar las condiciones', 'warning');
      return;
    }

    if (this.forma.value.password !== this.forma.value.password2) {
      swal('Importante', 'Las contraseñas no coinciden', 'warning');
      return;
    }
    let usuario = new Usuario(
    this.forma.value.nombre,
    this.forma.value.email,
    this.forma.value.password);

    this.usuarioService.crearUsuario( usuario )
        .subscribe( resp => {this.router.navigate(['/login']);
        });
  }


}


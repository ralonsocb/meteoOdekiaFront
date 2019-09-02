import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {



   
    this.contarSegundos(3).then(
      () => console.log("'Termino")
    )
    .catch( error => console.error ( 'error en la promesa', error));

   }

  ngOnInit() {
  }

  contarSegundos( segundos: number): Promise<boolean>{

    return new Promise(  (resolve, reject) => {

      let contador = 0;

      let intervalo = setInterval( ()=>{

        contador +=1;

        if ( contador === 3) {
          resolve( true);
          clearInterval(intervalo);
        }

      }, segundos * 1000);
    });
  }

}

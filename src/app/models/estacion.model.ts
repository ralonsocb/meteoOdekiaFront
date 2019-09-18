
export class Estacion {
  [x: string]: any;
  
      constructor (
          public nombre: string,
          public latitud: number,
          public longitud: number,
          public id?: string
      ) {
  
      }
  }
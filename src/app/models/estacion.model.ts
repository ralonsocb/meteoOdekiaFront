
export class Estacion {
  [x: string]: any;
  
      constructor (
          public nombre: string,
          public latitud: number,
          public longitud: number,
          public id?: string,
          public temperatura?: number,
          public precipitaciones?: number,
          public humedad?: number,
          public velViento?: number,
          public dirViento?: number,
          public brillo?: number,
          public uv?: number,
      ) {
  
      }
  }
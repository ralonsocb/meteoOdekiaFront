import { Estacion } from './estacion.model';

export class Usuario {
  [x: string]: any;

    constructor (
        public nombre: string,
        public email: string,
        public password: string,
        public role?: string,
        public id?: string,
        public estaciones?: Estacion[],
    ) {

    }
}
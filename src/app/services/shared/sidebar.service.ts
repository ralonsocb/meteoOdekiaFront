import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Estaciones',
      icono:'mdi mdi-gauge',
      submenu: [
        {titulo: 'Estacion1', url: '/graficas1'},
        {titulo: 'Estacion2', url: '/graficas1'},
      ]
    },
    {
      titulo: 'Mapa',
      icono: 'mdi mdi-map',
      url: '/map'
    },
  ];

  constructor() { }
}

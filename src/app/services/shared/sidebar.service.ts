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
        {titulo: 'Promesas', url: '/promesas'},
        {titulo: 'Rxjs', url: '/rxjs'},
      ]
    },
    {
      titulo: 'Mapa',
      icono: 'mdi mdi-map',
      url: '/map'
    },
    {
      titulo: 'Administración',
      icono: 'mdi mdi-folder-lock-open',
      submenu: [
        {titulo: 'Usuarios', url: '/usuarios'},
        {titulo: 'Estaciones', url: '/estaciones'}
      ]
    },
  ];

  constructor() { }
}

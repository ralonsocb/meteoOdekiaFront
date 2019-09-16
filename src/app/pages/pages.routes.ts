import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { MapsComponent } from './maps/maps.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import {RxjsComponent} from './rxjs/rxjs.component';

import { LoginGuardGuard } from '../services/guards/login-guard.guard';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EstacionesComponent } from './estaciones/estaciones.component';
import { EstacionComponent } from './estaciones/estacion.component';
import { AdminGuard } from '../services/guards/admin.guard';


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [ LoginGuardGuard ],
        children: [
            {path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' }},
            {path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' }},
            {path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas' }},
            {path: 'map', component: MapsComponent, data: { titulo: 'Mapa' }},
            {path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes' }},
            {path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' }},
            {path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' }},
            
            //Mantenimientos
            {path: 'perfil', component: ProfileComponent, data: {titulo: 'Perfil del usuario'}},
            {path: 'usuarios', component: UsuariosComponent, data: { titulo: 'Mantenimiento de usuarios'}, canActivate: [AdminGuard]},
            {path: 'estaciones', component: EstacionesComponent, data: {titulo: 'Mantenimiento de estaciones'}, canActivate: [AdminGuard]},
            {path: 'estacion/:id', component: EstacionComponent, data: {titulo: 'Actualizar estacion'}, canActivate: [AdminGuard]},

            
            {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]},
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );

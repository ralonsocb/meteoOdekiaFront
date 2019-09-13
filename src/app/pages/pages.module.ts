import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

import { FormsModule} from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
// import { } from 'highcharts';
// import { HighchartsChartComponent } from 'highcharts-angular';
import { MapsComponent } from './maps/maps.component';
import { AgmCoreModule } from '@agm/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EstacionesComponent } from './estaciones/estaciones.component';
import { EstacionComponent } from './estaciones/estacion.component';

//Temporal




@NgModule({
    declarations: [
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        PagesComponent,
        // HighchartsChartComponent,
        MapsComponent,
        IncrementadorComponent,
        AccountSettingsComponent,
        PromesasComponent,
        RxjsComponent,
        ProfileComponent,
        UsuariosComponent,
        EstacionesComponent,
        EstacionComponent
    ],
    exports: [
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        PagesComponent,
        MapsComponent,

    ],
    imports: [
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAS6OA2KbEX2AwlJf2ACkPSmEtp3hSkZJ0'
          }),
          BrowserAnimationsModule,
        ChartsModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        

    ]
})

export class PagesModule {}

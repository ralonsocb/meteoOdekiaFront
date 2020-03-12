import { Component, OnInit, ViewChild } from '@angular/core';
import { MultiDataSet, Label, SingleDataSet, BaseChartDirective, Color } from 'ng2-charts';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import * as Highcharts from 'highcharts';
import { Estacion } from 'src/app/models/estacion.model';
import { EstacionService } from 'src/app/services/estacion/estacion.service';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {
  

  estaciones: Estacion[] = [];
  estacion1: Estacion = new Estacion('12/03/2020',null,null,"1",25,0,15,10,3,12,3,1020,45,12);
  estacion2: Estacion = new Estacion('11/03/2020',null,null,"2",23,0.5,12,11,4,15,1,1030,43,11);
  estacion3: Estacion = new Estacion('10/03/2020',null,null,"3",24,0,11,14,3,15,2,1025,40,10);
  estacion4: Estacion = new Estacion('09/03/2020',null,null,"4",21,0.6,14,13,3,11,1,1027,40,11);
  estacion5: Estacion = new Estacion('08/03/2020',null,null,"5",22,0.3,15,10,3,11,3,1022,45,12);
  estacion6: Estacion = new Estacion('07/03/2020',null,null,"6",20,0,15,11,4,12,3,1010,38,10);
  estacion7: Estacion = new Estacion('06/03/2020',null,null,"7",26,0,11,13,4,11,2,1015,45,12);

  constructor(public _estacionService: EstacionService) { }

  ngOnInit() {
    //this.getEstaciones();
    this.estaciones.push(this.estacion1);
    this.estaciones.push(this.estacion2);
    this.estaciones.push(this.estacion3);
    this.estaciones.push(this.estacion4);
    this.estaciones.push(this.estacion5);
    this.estaciones.push(this.estacion6);
    this.estaciones.push(this.estacion7);

  }

  getEstaciones(){
    this._estacionService.getEstaciones()
        .subscribe( estaciones => this.estaciones = estaciones)
  }


  public lineChartData: ChartDataSets[] = [

    { data: [this.estacion7.temperatura,this.estacion6.temperatura,this.estacion5.temperatura,this.estacion4.temperatura,this.estacion3.temperatura,this.estacion2.temperatura,this.estacion1.temperatura], label: 'Temperatura ºC', yAxisID: 'y-axis-1' }
  ];
  public lineChartLabels: Label[] = [this.estacion7.nombre,this.estacion6.nombre,this.estacion5.nombre,this.estacion4.nombre,this.estacion3.nombre,this.estacion2.nombre,this.estacion1.nombre];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
  
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
 //  public lineChartPlugins = [pluginAnnotations];
  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;




  public lineChartData2: ChartDataSets[] = [

    { data: [this.estacion7.humedad,this.estacion6.humedad,this.estacion5.humedad,this.estacion4.humedad,this.estacion3.humedad,this.estacion2.humedad,this.estacion1.humedad], label: 'Humedad %', yAxisID: 'y-axis-1' }
  ];
  public lineChartLabels2: Label[] = [this.estacion7.nombre,this.estacion6.nombre,this.estacion5.nombre,this.estacion4.nombre,this.estacion3.nombre,this.estacion2.nombre,this.estacion1.nombre];
  public lineChartOptions2: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(44, 130, 201, 1)',
          },
          ticks: {
            fontColor: 'blue',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors2: Color[] = [
  
    { // red
      backgroundColor: 'rgba(137, 196, 244, 1)',
      borderColor: 'blue',
      pointBackgroundColor: 'rgba(75, 119, 190, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(65, 131, 215, 1)'
    }
  ];
  public lineChartLegend2 = true;
  public lineChartType2 = 'line';
 //  public lineChartPlugins = [pluginAnnotations];
  @ViewChild(BaseChartDirective, { static: true }) chart2: BaseChartDirective;

}

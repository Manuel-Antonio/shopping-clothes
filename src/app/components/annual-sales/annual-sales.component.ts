import { Component, OnInit } from '@angular/core';
import { createChart, IChartApi } from 'lightweight-charts';

@Component({
  selector: 'app-annual-sales',
  templateUrl: './annual-sales.component.html',
  styleUrls: ['./annual-sales.component.css']
})
export class AnnualSalesComponent implements OnInit {

  private chart: IChartApi | undefined;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.initializeChart();
  }

  initializeChart(): void {
    // Crear el gráfico en el elemento con id 'ventasAnualesChart'
    const chartElement = document.getElementById('ventasAnualesChart') as HTMLElement;
    this.chart = createChart(chartElement, {
      width: chartElement.clientWidth,
      height: 400,
      layout: {
        textColor: '#333'
      },
      grid: {
        vertLines: {
          color: '#e1e1e1'
        },
        horzLines: {
          color: '#e1e1e1'
        }
      }
    });

    // Crear una serie de líneas de datos
    const lineSeries = this.chart.addLineSeries();
    lineSeries.setData([
      { time: '2023-01', value: 12000 },
      { time: '2023-02', value: 15000 },
      { time: '2023-03', value: 13000 },
      { time: '2023-04', value: 17000 },
      { time: '2023-05', value: 19000 },
      { time: '2023-06', value: 22000 },
      { time: '2023-07', value: 25000 },
      { time: '2023-08', value: 24000 },
      { time: '2023-09', value: 20000 },
      { time: '2023-10', value: 27000 },
      { time: '2023-11', value: 30000 },
      { time: '2023-12', value: 32000 },
    ]);
  }

}

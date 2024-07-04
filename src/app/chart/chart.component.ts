import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  Highcharts = Highcharts
  chartOptions = {}
  constructor(){
    this.chartOptions = {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Project Completion'
      },
      tooltip: {
        valueSuffix: '%'
      },
      credit:{
        enable:false
      },
      subtitle: {
        text:
          'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>'
        },
        plotOptions: {
            series: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: [{
                    enabled: true,
                    distance: 20
                }, {
                    enabled: true,
                    distance: -40,
                    format: '{point.percentage:.1f}%',
                    style: {
                        fontSize: '1.2em',
                        textOutline: 'none',
                    opacity: 0.7
                },
                filter: {
                    operator: '>',
                    property: 'percentage',
                    value: 10
                }
            }]
        }
    },
    series: [
        {
            name: 'Percentage',
            colorByPoint: true,
            data: [{
              name: 'Water',
              y: 55.02
          },
          {
              name: 'Fat',
              sliced: true,
              selected: true,
              y: 26.71
          },
          {
              name: 'Carbohydrates',
              y: 1.09
          },
          {
              name: 'Protein',y: 15.5
            },
            {
                name: 'Ash',
                y: 1.68
            }
        ]
    }
    ]
  }
  HC_exporting(Highcharts)
  }

  
}

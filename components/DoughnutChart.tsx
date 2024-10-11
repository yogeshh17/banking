'use client';
import React from 'react';
import {Chart, ArcElement} from 'chart.js'
import { Doughnut } from 'react-chartjs-2';

Chart.register(ArcElement);  

const DoughnutChart = ({accounts}: DoughnutChartProps) => {
     const data = {
        datasets: [
            {
                label:'Banks',
                data :[2555,5485,5555],
                backgroundColor:['#0747b5','#2265d8','#2f91fa']
            }
        ],
        labels: ['Bank 1', 'Bank 2', 'Bank 3']
    }
  return <Doughnut
   data={data}
   options ={{
    cutout:'60%',
    plugins:{
        legend:{
            display:false
        }
    }
   }} />
}

export default DoughnutChart
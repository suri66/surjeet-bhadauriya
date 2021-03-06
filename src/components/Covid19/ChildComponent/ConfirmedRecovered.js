import React from 'react';
import { Bar } from 'react-chartjs-2';

const ConfirmedRecovered = ({ mixedData = [] }) => {
  const modifiedData = mixedData.slice(Math.max(mixedData.length - 15, 0));

  const labels = [],
    confirmedCases = [],
    recoveredCases = [];

  (modifiedData || []).forEach(item => {
    labels.push(item.date);
    confirmedCases.push(item.dailyconfirmed);
    recoveredCases.push(item.dailyrecovered);
  });

  const data = {
    datasets: [
      {
        label: 'Recovered',
        type: 'line',
        data: recoveredCases,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#EC932F',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-2'
      },
      {
        type: 'bar',
        label: 'Confirmed',
        data: confirmedCases,
        fill: false,
        backgroundColor: '#71B37C',
        borderColor: '#71B37C',
        hoverBackgroundColor: '#71B37C',
        hoverBorderColor: '#71B37C',
        yAxisID: 'y-axis-1'
      }
    ]
  };

  const options = {
    responsive: true,
    tooltips: {
      mode: 'label'
    },
    elements: {
      line: {
        fill: false
      }
    },
    scales: {
      xAxes: [
        {
          labels: labels,

          display: true,
          gridLines: {
            display: false
          }
        }
      ],
      yAxes: [
        {
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',
          gridLines: {
            display: false
          },
          labels: {
            show: true
          }
        },
        {
          type: 'linear',
          display: true,
          position: 'right',
          id: 'y-axis-2',
          gridLines: {
            display: false
          },
          labels: {
            show: true
          }
        }
      ]
    }
  };

  const plugins = [
    {
      afterDraw: (chartInstance, easing) => {
        const ctx = chartInstance.chart.ctx;
        ctx.fillText('Confirmed vs Recovered', 100, 100);
      }
    }
  ];

  return (
    <>
      {modifiedData.length && (
        <Bar data={data} options={options} plugins={plugins} />
      )}
    </>
  );
};

export default ConfirmedRecovered;

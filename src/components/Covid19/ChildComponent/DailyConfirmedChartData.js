import React from 'react';
import { Line } from 'react-chartjs-2';

const DailyConfirmedChartData = ({ dailyConfirmedCases = [] }) => {
  const modifiedData = dailyConfirmedCases.slice(
    Math.max(dailyConfirmedCases.length - 15, 0)
  );

  const labels = [],
    values = [];

  (modifiedData || []).forEach(item => {
    labels.push(item.date);
    values.push(item.dailyconfirmed);
  });

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Confirmed Cases',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: values
      }
    ]
  };

  return <>{modifiedData.length && <Line data={data} />}</>;
};

export default DailyConfirmedChartData;

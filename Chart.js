import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ data }) => {
  if (!data) return <div className="no-data">لا توجد بيانات متاحة</div>;

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'السعر',
        data: data.prices,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      {
        label: 'EMA 9',
        data: data.ema9,
        borderColor: 'rgb(54, 162, 235)',
        borderDash: [5, 5],
      },
      {
        label: 'EMA 21',
        data: data.ema21,
        borderColor: 'rgb(255, 159, 64)',
        borderDash: [5, 5],
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        rtl: true,
      },
      tooltip: {
        rtl: true,
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.raw.toFixed(2)}`;
          }
        }
      }
    },
  };

  return (
    <div className="chart-container">
      <Line options={options} data={chartData} />
    </div>
  );
};

export default Chart;

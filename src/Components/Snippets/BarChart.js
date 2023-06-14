import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['Empty', 'Jan 2023', 'Feb 2023', 'Mar 2023', 'Apr 2023', 'May 2023'];

export function BarChart({theme}) {
  
  const getChartBackgroundColor1 = () => {
    if (theme === 'dark') {
      return '#fff';
    } else {
      return '#333333';
    }
  };

  const getChartBackgroundColor2 = () => {
    if (theme === 'dark') {
      return 'rgba(255,255,255,0.33)';
    } else {
      return '#808080';
    }
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Documents',
        data: [180, 320, 210, 75, 140, 245],
        backgroundColor: getChartBackgroundColor1(),
      },
      {
        label: 'NFTs',
        data: [50, 150, 80, 30, 50, 92],
        backgroundColor: getChartBackgroundColor2(),
      },
    ],
  };

  const [chartData, setChartData] = useState(data);
  const [labelColor, setlabelColor] = useState('#333');

  // Generate random data for the chart
  const generateChartData = () => {
    return data;
  };

  useEffect(() => {
    // Generate chart data on component mount
    setChartData(generateChartData());
    setlabelColor(theme === 'dark' ? 'rgba(255,255,255,0.9)' : '#333')
  }, [theme]);

  return <Bar options={{
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: labelColor, // Set label color based on the theme
        },
      },
      scales: {
        x: {
            ticks: {
                color: '#000'
            }
        }
      },
      title: false
    },
  }} data={chartData} />
}

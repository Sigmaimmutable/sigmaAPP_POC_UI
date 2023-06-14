import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChart({theme}) {

  const getChartBackgroundColor = () => {
    if (theme === 'dark') {
      return ['#fff','rgba(255,255,255,0.33)'];
    } else {
      return ['#333333','#808080'];
    }
  };

  const getChartBorderColor = () => {
    if (theme === 'dark') {
      return ['#414141','rgba(255,255,255,0.33)'];
    } else {
      return ['#808080', '#fff'];
    }
  };
  
  const data = {
    labels: ['301681', '5935'],
    datasets: [
      {
        label: '# of Votes',
        data: [301681, 5935],
        backgroundColor: getChartBackgroundColor(),
        borderColor: getChartBorderColor(),
        borderWidth: 4
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

  return <Pie 
      data={chartData} 
      height="260"
      options={{
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: labelColor, // Set label color based on the theme
            },
          },
          title: false
        },
      }}
    />;
}

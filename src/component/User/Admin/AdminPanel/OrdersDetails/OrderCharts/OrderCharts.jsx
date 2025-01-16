import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import './OrderCharts.css';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const OrderCharts = ({ orders }) => {
  // Process orders data for charts
  const processOrderData = () => {
    const statusCount = {};
    const monthlyRevenue = {};

    orders.forEach(order => {
      // Count by status
      statusCount[order.status] = (statusCount[order.status] || 0) + 1;

      // Monthly revenue
      const date = new Date(order.orderDate);
      const monthYear = `${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
      monthlyRevenue[monthYear] = (monthlyRevenue[monthYear] || 0) + order.total;
    });

    return { statusCount, monthlyRevenue };
  };

  const { statusCount, monthlyRevenue } = processOrderData();

  // Bar chart data
  const barData = {
    labels: Object.keys(monthlyRevenue),
    datasets: [
      {
        label: 'Monthly Revenue (RM)',
        data: Object.values(monthlyRevenue),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderColor: 'rgb(53, 162, 235)',
        borderWidth: 1,
      },
    ],
  };

  // Pie chart data
  const pieData = {
    labels: Object.keys(statusCount),
    datasets: [
      {
        data: Object.values(statusCount),
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Revenue',
      },
    },
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Orders by Status',
      },
    },
  };

  return (
    <div className="order-charts">
      <div className="chart-container">
        <Bar data={barData} options={barOptions} />
      </div>
      <div className="chart-container">
        <Pie data={pieData} options={pieOptions} />
      </div>
    </div>
  );
};

export default OrderCharts; 
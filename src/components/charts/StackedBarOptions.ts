const StackedBarOptions = {
  plugins: {
    legend: {
      labels: {
        usePointStyle: true,
        boxWidth: 8,
        font: {
          size: 10,
        },
      },
      display: true,
      position: "bottom" as const,
    },
    tooltip: {
      usePointStyle: true,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
      ticks: {
        font: {
          size: 9,
          color: "#707070",
          family: "Open Sans",
        },
      },
      grid: {
        display: false,
        offsetGridLines: true,
      },
    },
    y: {
      stacked: true,
      title: {
        display: true,
        text: "MAU",
      },
      ticks: {
        beginAtZero: true,
        position: "left" as const,
        font: {
          size: 9,
          color: "#707070",
          family: "Open Sans",
        },
      },
    },
  },
};

export default StackedBarOptions;

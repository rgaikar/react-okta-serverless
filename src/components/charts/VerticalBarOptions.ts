const VerticalBarOptions = {
  plugins: {
    title: {
      display: false,
      text: "Allocation By Site",
    },

    legend: {
      labels: {
        usePointStyle: true,
        boxWidth: 8,
        font: {
          size: 10,
        },
        pointStyleWidth: 14,
      },
      display: true,
      position: "bottom" as const,
    },
  },
  responsive: true,
  scales: {
    x: {
      ticks: {
        font: {
          size: 9,
          color: "#707070",
          family: "Open Sans",
        },
      },
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        precision: 0,
        beginAtZero: true,
        labelString: "Y text" as const,
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

export default VerticalBarOptions;

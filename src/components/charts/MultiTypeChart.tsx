import { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  LineController,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Chart } from "react-chartjs-2";
import { Link } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

// Register Chart Components
ChartJS.register(
  LineController,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

import NoDataArea from "../Display";
import CanvasBackgroundPlugin from "./Plugins";

const options = {
  plugins: {
    title: {
      display: false,
      text: "Capacity Utilization",
    },
    filler: {
      propagate: true,
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
    tooltip: {
      usePointStyle: true,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
      ticks: {
        font: {
          size: 9,
          color: "#707070",
          family: "Open Sans",
        },
      },
    },
    y: {
      stacked: false,
      title: {
        display: true,
        text: "Utilization %",
      },
      min: 0,
      suggestedMax: 100,
      ticks: {
        precision: 0,
        stepSize: 20,
        beginAtZero: true,
        position: "left" as const,
        callback: (value: any) => {
          return `${value}%`;
        },
        font: {
          size: 9,
          color: "#707070",
          family: "Open Sans",
        },
      },
    },
    y2: {
      stacked: true,
      title: {
        display: true,
        text: "Days",
      },
      grid: {
        display: false,
      },
      precision: 0,
      beginAtZero: true,
      position: "right" as const,
      ticks: {
        font: {
          size: 9,
          color: "#707070",
          family: "Open Sans",
        },
      },
    },
  },
};

const chartData = {
  labels: [
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
    "2031",
    "2032",
  ],
  datasets: [
    {
      type: "line" as const,
      label: "Manufacturing Utilization",
      yAxisID: "y",
      backgroundColor: "#E89287",
      borderColor: "#E89287",
      borderWidth: 1.2,
      fill: false,
      pointStyle: "line",
      radius: 1,
      uom: "%",
      order: 3,
      gridOrder: 5,
      hidden: false,
      data: {
        "2022": 55,
        "2023": 56,
        "2024": 64,
        "2025": 19,
        "2026": 27,
        "2027": 24,
        "2028": 31,
        "2029": 25,
        "2030": 32,
        "2031": 25,
        "2032": 32,
      },
      key: "Manufacturing Utilisation",
    },
    {
      type: "bar" as const,
      label: "Production",
      yAxisID: "y2",
      backgroundColor: "#5C80BC",
      pointStyle: "circle",
      borderColor: "white",
      borderWidth: 2,
      borderRadius: 6,
      barThickness: 10,
      order: 4,
      gridOrder: 4,
      uom: "",
      data: {
        "2022": 62,
        "2023": 70.8,
        "2024": 73.6,
        "2025": 66.10410958904109,
        "2026": 75.91246575342467,
        "2027": 83.38410958904109,
        "2028": 94.35479452054796,
        "2029": 96.79698630136986,
        "2030": 106.09287671232877,
        "2031": 101.47972602739725,
        "2032": 106.76945205479453,
      },
      key: "Total Production",
    },
    {
      type: "bar" as const,
      label: "Required Non-Production Time",
      yAxisID: "y2",
      backgroundColor: "#801F18",
      pointStyle: "circle",
      borderColor: "white",
      borderWidth: 2,
      borderRadius: 6,
      barThickness: 10,
      order: 5,
      gridOrder: 2,
      uom: "",
      data: {
        "2022": 0,
        "2023": 5,
        "2024": 0,
        "2025": 16,
        "2026": 0,
        "2027": 16,
        "2028": 0,
        "2029": 18,
        "2030": 0,
        "2031": 18,
        "2032": 0,
      },
      key: "Total Required Non-Production Time",
    },
    {
      type: "bar" as const,
      label: "Shutdown & Changeover",
      yAxisID: "y2",
      backgroundColor: "#E89287",
      pointStyle: "circle",
      borderColor: "white",
      borderWidth: 2,
      borderRadius: 6,
      barThickness: 10,
      order: 6,
      gridOrder: 3,
      uom: "",
      data: {
        "2022": 13,
        "2023": 0,
        "2024": 13,
        "2025": 0,
        "2026": 43,
        "2027": 0,
        "2028": 42,
        "2029": 0,
        "2030": 46,
        "2031": 0,
        "2032": 46,
      },
      key: "Total Shutdown & Changeover",
    },
    {
      type: "bar" as const,
      label: "Other",
      yAxisID: "y2",
      backgroundColor: "#A4A4AB",
      pointStyle: "circle",
      borderColor: "white",
      borderWidth: 2,
      borderRadius: 6,
      barThickness: 10,
      order: 6,
      gridOrder: 3,
      uom: "",
      data: {
        "2022": 0,
        "2023": 0,
        "2024": 0,
        "2025": 0,
        "2026": 0,
        "2027": 0,
        "2028": 0,
        "2029": 0,
        "2030": 0,
        "2031": 0,
        "2032": 0,
      },
      key: "Total Other",
    },
    {
      type: "line" as const,
      label: "Max Capacity",
      fill: true,
      yAxisID: "y2",
      borderWidth: 1,
      backgroundColor: "#F8F8F8",
      borderColor: "#F8F8F8",
      pointStyle: "circle",
      pointRadius: 0,
      order: 7,
      gridOrder: 1,
      uom: "Tons",
      data: {
        "2022": 135,
        "2023": 135,
        "2024": 136,
        "2025": 428,
        "2026": 444,
        "2027": 410,
        "2028": 443,
        "2029": 464,
        "2030": 481,
        "2031": 481,
        "2032": 481,
      },
      key: "Max Capacity",
    },
  ],
};

const MultiTypeChart = () => {
  const chartRef = useRef<any>();
  const [href, setHref] = useState<any>();

  useEffect(() => {
    setHref(chartRef.current?.toBase64Image());
  }, [href]);

  return (
    <>
      {chartData?.datasets.length === 0 ? (
        <NoDataArea />
      ) : (
        <>
          <Link
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              color: "#707070",
              fontSize: 12,
              borderRadius: 21,
              background: "#FFFFFF",
              fontFamily: "Open Sans",
              border: "1px solid #707070",
              padding: "5px 15px",
              display: "flex",
              alignItems: "center",
              height: "42px",
            }}
            variant="button"
            href={href}
            underline="none"
            download
          >
            <FileDownloadOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
            Download Chart
          </Link>
          <Chart
            ref={chartRef}
            options={options}
            data={chartData}
            height="500px"
            type={"line"}
            plugins={[CanvasBackgroundPlugin]}
          />
        </>
      )}
    </>
  );
};

export default MultiTypeChart;

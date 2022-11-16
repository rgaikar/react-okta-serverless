import { memo, useRef, useState } from "react";
import { Chart } from "react-chartjs-2";
import { Link } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
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
} from "chart.js";

// Register Chart Elements
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
  Legend
);

// Background Color Plugin
import CanvasBackgroundPlugin from "./Plugins";
import NoDataArea from "../Display";

// Options
import StackedBarOptions from "./StackedBarOptions";

// Type Definition
type StackedBarChartProps = {
  barChartData: any;
};

// UI
const StackedBarChart = memo((props: StackedBarChartProps) => {
  const chartRef = useRef<ChartJS>(null);
  const [href, setHref] = useState<any>();

  const {
    barChartData,
    barChartData: { uom },
  } = props;

  const chartOptions = {
    ...StackedBarOptions,
    animation: {
      onComplete: function () {
        setHref(chartRef.current?.toBase64Image());
      },
    },
    scales: {
      ...StackedBarOptions.scales,
      y: {
        ...StackedBarOptions.scales.y,
        title: { ...StackedBarOptions.scales.y.title, text: `${uom}` },
      },
    },
  };

  return (
    <>
      {barChartData?.datasets.length === 0 ? (
        <NoDataArea />
      ) : (
        <>
          <Link
            sx={{
              position: "absolute",
              top: "15px",
              right: "15px",
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
            options={chartOptions}
            data={barChartData}
            type={"bar"}
            plugins={[CanvasBackgroundPlugin]}
          />
        </>
      )}
    </>
  );
});

export default StackedBarChart;

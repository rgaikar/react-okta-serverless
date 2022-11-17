import { Box, Typography, Grid } from "@mui/material";
import MultiTypeChart from "../../components/Charts/MultiTypeChart";
import StackedBarChart from "../../components/Charts/StackedBarChart";

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
      type: "bar",
      stacked: true,
      stack: "Stack 0",
      yAxisID: "y",
      borderWidth: 2,
      order: 5,
      borderRadius: 5,
      barThickness: 10,
      pointStyle: "circle",
      label: "A",
      backgroundColor: "#79D2D2",
      borderColor: "#ffffff",
      data: {
        "2022": 130.88209497716895,
        "2023": 123.86469178082194,
        "2024": 76.96760273972602,
        "2025": 0,
        "2026": 0,
        "2027": 0,
        "2028": 0,
        "2029": 0,
        "2030": 0,
        "2031": 0,
        "2032": 0,
      },
    },
    {
      type: "bar",
      stacked: true,
      stack: "Stack 0",
      yAxisID: "y",
      borderWidth: 2,
      order: 5,
      borderRadius: 5,
      barThickness: 10,
      pointStyle: "circle",
      label: "B",
      backgroundColor: "88412E",
      borderColor: "#ffffff",
      data: {
        "2022": 20.29662155951598,
        "2023": 19.053948387232836,
        "2024": 18.588075185861626,
        "2025": 18.95266325434422,
        "2026": 20.19824093635279,
        "2027": 21.55765112215844,
        "2028": 23.188124855985535,
        "2029": 25.123003968691968,
        "2030": 25.702876082111437,
        "2031": 25.98915773504721,
        "2032": 25.98915773504721,
      },
    },
    {
      type: "bar",
      stacked: true,
      stack: "Stack 0",
      yAxisID: "y",
      borderWidth: 2,
      order: 5,
      borderRadius: 5,
      barThickness: 10,
      pointStyle: "circle",
      label: "C",
      backgroundColor: "#9AB0D6",
      borderColor: "#ffffff",
      data: {
        "2022": 23.592552511415526,
        "2023": 21.78819880481735,
        "2024": 30.805466623184927,
        "2025": 51.11325842085616,
        "2026": 62.38428698223744,
        "2027": 76.83772147083332,
        "2028": 96.04077772986301,
        "2029": 115.92751451916666,
        "2030": 130.00884218149542,
        "2031": 134.26307686500002,
        "2032": 134.26307686500002,
      },
    },
    {
      type: "bar",
      stacked: true,
      stack: "Stack 0",
      yAxisID: "y",
      borderWidth: 2,
      order: 5,
      borderRadius: 5,
      barThickness: 10,
      pointStyle: "circle",
      label: "D",
      backgroundColor: "#625750",
      borderColor: "#ffffff",
      data: {
        "2022": 20.769952968036527,
        "2023": 19.640257077625574,
        "2024": 10.975463470319635,
        "2025": 0,
        "2026": 0,
        "2027": 0,
        "2028": 0,
        "2029": 0,
        "2030": 0,
        "2031": 0,
        "2032": 0,
      },
    },
    {
      type: "bar",
      stacked: true,
      stack: "Stack 0",
      yAxisID: "y",
      borderWidth: 2,
      order: 5,
      borderRadius: 5,
      barThickness: 10,
      pointStyle: "circle",
      label: "E",
      backgroundColor: "#40C9A2",
      borderColor: "#ffffff",
      data: {
        "2022": 373.88043147631737,
        "2023": 339.0511357768633,
        "2024": 280.8678481081279,
        "2025": 214.55412819866316,
        "2026": 204.85605788353018,
        "2027": 196.66667063047024,
        "2028": 190.51322596490874,
        "2029": 186.55017714537482,
        "2030": 184.34390567459727,
        "2031": 184.70420626867,
        "2032": 184.70420626867,
      },
    },
    {
      type: "bar",
      stacked: true,
      stack: "Stack 0",
      yAxisID: "y",
      borderWidth: 2,
      order: 5,
      borderRadius: 5,
      barThickness: 10,
      pointStyle: "circle",
      label: "F",
      backgroundColor: "#074A35",
      borderColor: "#ffffff",
      data: {
        "2022": 901.9192916666666,
        "2023": 821.9786979426078,
        "2024": 774.3304247886967,
        "2025": 734.4295338641167,
        "2026": 723.9353257776233,
        "2027": 710.611733962585,
        "2028": 685.5823060946864,
        "2029": 668.001762166361,
        "2030": 653.7712339132466,
        "2031": 646.2450376215999,
        "2032": 646.2450376215999,
      },
    },
    {
      type: "bar",
      stacked: true,
      stack: "Stack 0",
      yAxisID: "y",
      borderWidth: 2,
      order: 5,
      borderRadius: 5,
      barThickness: 10,
      pointStyle: "circle",
      label: "G",
      backgroundColor: "#61A866",
      borderColor: "#ffffff",
      data: {
        "2022": 389.5580828310502,
        "2023": 377.24497899543377,
        "2024": 240.2357808219178,
        "2025": 0,
        "2026": 0,
        "2027": 0,
        "2028": 0,
        "2029": 0,
        "2030": 0,
        "2031": 0,
        "2032": 0,
      },
    },
    {
      type: "bar",
      stacked: true,
      stack: "Stack 0",
      yAxisID: "y",
      borderWidth: 2,
      order: 5,
      borderRadius: 5,
      barThickness: 10,
      pointStyle: "circle",
      label: "H",
      backgroundColor: "#B18406",
      borderColor: "#ffffff",
      data: {
        "2022": 131.09713242009133,
        "2023": 133.28254070970485,
        "2024": 163.53396794626906,
        "2025": 229.9252308608589,
        "2026": 273.1549035037383,
        "2027": 321.2303089675495,
        "2028": 383.2221129113015,
        "2029": 450.98700855511464,
        "2030": 475.5841973332758,
        "2031": 487.9673358328299,
        "2032": 487.9673358328299,
      },
    },
    {
      type: "bar",
      stacked: true,
      stack: "Stack 0",
      yAxisID: "y",
      borderWidth: 2,
      order: 5,
      borderRadius: 5,
      barThickness: 10,
      pointStyle: "circle",
      label: "I",
      backgroundColor: "#A9D8B8",
      borderColor: "#ffffff",
      data: {
        "2022": 43.49916529680365,
        "2023": 40.74134292237443,
        "2024": 19.521246575342467,
        "2025": 0,
        "2026": 0,
        "2027": 0,
        "2028": 0,
        "2029": 0,
        "2030": 0,
        "2031": 0,
        "2032": 0,
      },
    },
  ],
  uom: "Test",
};

// Layout
const Welcome = () => {
  return (
    <Box p={4}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: 1,
          width: "100%",
          alignContent: "center",
        }}
      >
        <Box gridColumn="span 12" sx={{ justifySelf: "center" }}>
          {/* Header */}
          <Typography variant="h1" component="div" gutterBottom>
            <div data-testid="heading-text">Welcome to Serverless</div>
          </Typography>
          <Typography variant="h2" component="div" gutterBottom>
            <div>React + Okta + S3 Bucket + Cloudfront</div>
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={2}>
        <Typography variant="h2" component="div" gutterBottom>
          <div>Charts</div>
        </Typography>
        <Grid
          item
          xs={12}
          sx={{ height: "480px", position: "relative" }}
          mt={4}
        >
          <Typography variant="h3" component="div" gutterBottom>
            <div>Multi Type Chart</div>
          </Typography>
          <MultiTypeChart />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ height: "480px", position: "relative" }}
          mt={8}
        >
          <Typography variant="h3" component="div" gutterBottom>
            <div>Stacked Bar Chart</div>
          </Typography>
          <StackedBarChart barChartData={chartData} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Welcome;

import { Box, Typography } from "@mui/material";

// Layout
const Welcome = () => {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: 1,
          height: "100vh",
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
    </>
  );
};

export default Welcome;

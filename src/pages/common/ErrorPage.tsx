import { Link } from "react-router-dom";
import { Container, Grid, Typography } from "@mui/material";
import { useEffect } from "react";

// Page not Found
const ErrorPage = () => {
  // LRCP-688 Delete unitop object from localstorage while getting error page
  useEffect(() => {
    localStorage.removeItem("unitOp");
    localStorage.removeItem("product");
    localStorage.removeItem("productionStep");
    localStorage.removeItem("refScenario");
  });
  return (
    <Container
      sx={{ p: "25px", height: "100vh" }}
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        textAlign: "center",
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h1" gutterBottom>
            <span data-testid="error-page">500</span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            <span data-testid="error-page-text">
              Oops, Internal Server Error, That is, something went terribly
              wrong!
            </span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          Dont Worry, In the meantime, You can go back to{" "}
          <Link to="/">Home Page</Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ErrorPage;

import { Link, useLocation } from "react-router-dom";
import { Container, Grid, Typography } from "@mui/material";

// Page not Found
const NoMatch = () => {
  const location = useLocation();

  return (
    <Container
      sx={{
        p: "25px",
        height: "100vh",
        width: "100%",
      }}
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
            <span data-testid="no-match-text">404</span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Oops, No match for <code>{location.pathname}</code>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Link to="/">Go To Home</Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NoMatch;

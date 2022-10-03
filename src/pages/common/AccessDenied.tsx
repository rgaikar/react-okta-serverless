import { Link } from "react-router-dom";

import { Container, Grid, Typography } from "@mui/material";

// Access Denied Page
const AccessDenied = () => {
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
            <div data-testid="access-denied">Access Denied</div>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            <div data-testid="access-denied-text">
              Sorry, but you dont have permission to access this page
            </div>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Link to="/">Go To Home</Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AccessDenied;

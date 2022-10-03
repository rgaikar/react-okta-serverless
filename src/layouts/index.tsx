import { useState } from "react";
import { useOktaAuth } from "@okta/okta-react";
import { Box, Backdrop } from "@mui/material";
import { Outlet } from "react-router-dom";

// Scenario Layout
const ScenarioLayout = () => {
  // State
  const { authState } = useOktaAuth();
  const [isLoading] = useState(false);
  const [userInfo] = useState<null | any>(null);

  // UI
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      sx={{
        height: "100vh",
        mx: "auto",
        my: 0,
      }}
    >
      {(!authState?.isAuthenticated || isLoading) && <Backdrop open={true} />}

      <Box
        gridColumn="span 12"
        sx={{
          backgroundColor: "#F5F7F8",
          maxWidth: "100%",
        }}
      >
        <Outlet context={{ userInfo }} />
      </Box>
    </Box>
  );
};

export default ScenarioLayout;

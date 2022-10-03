import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Backdrop } from "@mui/material";

import "./index.scss";
import App from "./App";

const container = document.getElementById("root");

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div>
          <Backdrop open={true} />
        </div>
      }
    >
      <Router>
        <App />
      </Router>
    </Suspense>
  </React.StrictMode>
);

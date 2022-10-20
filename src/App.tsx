import { lazy, useCallback } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { toRelativeUrl } from "@okta/okta-auth-js";
import { Security, LoginCallback } from "@okta/okta-react";
import { Backdrop } from "@mui/material";

// Okta
import oktaAuth from "./okta";

// Theme
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

// Layout
import Layout from "./layouts";

// Components
import { RequiredAuth } from "./components/Auth/SecureRoute";

// Pages
const Welcome = lazy(() => import("./pages/common/Welcome"));
const NoMatch = lazy(() => import("./pages/common/NoMatch"));
const AccessDenied = lazy(() => import("./pages/common/AccessDenied"));
const ErrorPage = lazy(() => import("./pages/common/ErrorPage"));

// App Component
const App = () => {
  const navigate = useNavigate();

  // History Hooks
  const restoreOriginalUri = useCallback(
    async (_oktaAuth: any, originalUri: string) => {
      navigate(toRelativeUrl(originalUri, window.location.origin));
    },
    [navigate]
  );

  // UI
  return (
    <ThemeProvider theme={theme}>
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
        <Routes>
          {/* Login Callback */}
          <Route
            path="/login/callback"
            element={
              <LoginCallback loadingElement={<Backdrop open={true} />} />
            }
          />

          {/* Welcome Page*/}
          <Route element={<RequiredAuth />}>
            <Route element={<Layout />}>
              <Route path="/" element={<Welcome />}></Route>
            </Route>
          </Route>

          {/* 403 Page */}
          <Route path="/access-denied" element={<AccessDenied />}></Route>

          {/* 500 Page */}
          <Route path="/error" element={<ErrorPage />}></Route>

          {/* 404 Route */}
          <Route path="/notfound" element={<NoMatch />}></Route>
          <Route path="*" element={<Navigate to="/notfound" replace />} />
        </Routes>
      </Security>
    </ThemeProvider>
  );
};

export default App;

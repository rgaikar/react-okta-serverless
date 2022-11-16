import { memo } from "react";
import { Backdrop, CircularProgress } from "@mui/material";

// Type Definitions
type BackdropProps = {
  isOpen: boolean;
  onClick?: () => void;
};

// Backdrop component
const MUIBackdrop = memo((props: BackdropProps) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={props.isOpen}
      onClick={props.onClick}
      data-testid="backdrop-ui"
    >
      <CircularProgress color="inherit" data-testid="circular-ui"/>
    </Backdrop>
  );
});

export default MUIBackdrop;

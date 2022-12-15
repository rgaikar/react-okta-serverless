import { Button } from "@mui/material";

const PercentageRenderer = (params: any) => {
  return (
    <Button
      onClick={(ev: any) => {
        params.onclick(ev, params);
      }}
      sx={{
        minWidth: "40px",
        height: "22px",
        fontSize: "11px",
        background: "#FFFFFF",
        borderRadius: "20px",
        border: "1px solid #c3c4c5d4",
        color: "#707070",
        fontWeight: "bold",
      }}
    >
      %
    </Button>
  );
};

export default PercentageRenderer;

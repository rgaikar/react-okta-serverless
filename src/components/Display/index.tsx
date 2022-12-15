// No data display Component
export default function NoDataArea() {
  return (
    <>
      {
        <div
          data-testid="nodata-display-ui"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100",
            fontSize: "13px",
            color: "#181d1f",
          }}
        >
          No Data To Display
        </div>
      }
    </>
  );
}

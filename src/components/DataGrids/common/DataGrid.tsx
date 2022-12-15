import { useCallback, useRef } from "react";
import { Button, Grid, Typography } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

// Ag Grid
import { AgGridReact } from "@ag-grid-community/react";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { ExcelExportModule } from "@ag-grid-enterprise/excel-export";

import "@ag-grid-community/core/dist/styles/ag-grid.css";
import "@ag-grid-community/core/dist/styles/ag-theme-alpine.css";
import "./DataGrid.scss";

const DataGrid = (props: any) => {
  const { defaultColDef, rowData, columnDefs, tableHeading } = props;

  // Refs
  const gridRef = useRef<any>(null);

  // Grid Hooks
  const onFirstDataRendered = useCallback(() => {
    const allColumnIds: any = [];
    gridRef.current.columnApi.getColumns().forEach((column: any) => {
      allColumnIds.push(column.getId());
    });
    gridRef.current.columnApi.autoSizeColumns(allColumnIds, false);
  }, []);

  return (
    <>
      <Grid sx={{ mt: 3 }}>
        <Grid container justifyContent="flex-end" sx={{ mt: 1.5 }}>
          <Grid item xs={6} flexDirection="row">
            {tableHeading && (
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: "info.main",
                  fontSize: "15px",
                  lineHeight: "34px",
                  pb: 2,
                }}
              >
                {tableHeading}
              </Typography>
            )}
          </Grid>
          <Grid item xs={6}>
            <Button
              sx={{
                position: "absolute",
                top: "28px",
                right: "16px",
                height: "40px",
                color: "#707070",
                fontSize: 12,
                borderRadius: 18,
                background: "#FFFFFF",
                fontFamily: "Open Sans",
                border: "1px solid #707070",
                mb: 2,
                zIndex: 1,
              }}
              onClick={() => gridRef.current.api.exportDataAsExcel()}
              variant="outlined"
              startIcon={<FileDownloadOutlinedIcon />}
            >
              Download Data Table
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <AgGridReact
            suppressColumnVirtualisation={true}
            ref={gridRef}
            defaultColDef={defaultColDef}
            rowData={rowData}
            columnDefs={columnDefs}
            data-testid="ag-grid-data"
            domLayout="autoHeight"
            onFirstDataRendered={onFirstDataRendered}
            modules={[ClientSideRowModelModule, ExcelExportModule]}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default DataGrid;

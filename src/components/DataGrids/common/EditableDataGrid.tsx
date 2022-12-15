import { useCallback } from "react";
import { Grid, Typography } from "@mui/material";

// Ag Grid
import { AgGridReact } from "@ag-grid-community/react";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { ClipboardModule } from "@ag-grid-enterprise/clipboard";
import { RangeSelectionModule } from "@ag-grid-enterprise/range-selection";

import "@ag-grid-community/core/dist/styles/ag-grid.css";
import "@ag-grid-community/core/dist/styles/ag-theme-alpine.css";

import "./DataGrid.scss";

const EditableDataGrid = (props: any) => {
  const {
    defaultColDef,
    rowData,
    columnDefs,
    handleCellValueChanged,
    gridRef,
    onRowDragEnd,
    rowDragManaged = false,
    animateRows = false,
    tableHeading,
  } = props;

  // Grid Hooks
  const onFirstDataRendered = useCallback(() => {
    const allColumnIds: any = [];
    gridRef?.current.columnApi.getColumns().forEach((column: any) => {
      allColumnIds.push(column.getId());
    });
    gridRef.current.columnApi.autoSizeColumns(allColumnIds, false);
  }, [gridRef]);

  return (
    <Grid sx={{ mt: 2 }}>
      <Grid item xs={5} justifyContent="flex-end">
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "info.main",
            fontSize: "15px",
            lineHeight: "34px",
            pt: 2,
          }}
        >
          {tableHeading}
        </Typography>
      </Grid>
      <AgGridReact
        suppressColumnVirtualisation={true}
        ref={gridRef}
        defaultColDef={defaultColDef}
        rowData={rowData}
        columnDefs={columnDefs}
        domLayout="autoHeight"
        stopEditingWhenCellsLoseFocus={true}
        singleClickEdit={true}
        onFirstDataRendered={onFirstDataRendered}
        onCellValueChanged={handleCellValueChanged}
        modules={[
          ClientSideRowModelModule,
          ClipboardModule,
          RangeSelectionModule,
        ]}
        ensureDomOrder={true}
        rowDragManaged={rowDragManaged}
        animateRows={animateRows}
        onRowDragEnd={onRowDragEnd}
        enableRangeSelection={true}
        suppressCopySingleCellRanges={true}
        rowSelection="multiple"
      ></AgGridReact>
    </Grid>
  );
};

export default EditableDataGrid;

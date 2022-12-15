import { useState, useEffect, memo } from "react";

// Helpers
import { RoundedNumberFomatter } from "./ValueFormatters/Number";

// Component
import DataGrid from "./common/DataGrid";

// SCSS
import "../../common/DataGrid.scss";

// Type Definition
type CapacityUtilisationProps = {
  gridData: any;
  scenarioId: any;
  fileName: string;
  heading?: string;
};

// Component
const CapacityDataGrid = memo(
  ({ gridData, scenarioId, fileName, heading }: CapacityUtilisationProps) => {
    const {
      labels,
      is_calculation_complete,
      error_message,
      rowsData,
      networkView,
      unitOpsLength = 0,
    } = gridData;
    // State
    const [columnDefs, setColumnDefs] = useState<any[]>([]);

    useEffect(() => {
      const staticColumnDefs = [
        {
          field: "measure",
          headerName: "A",
          pinned: "left",
        },
        {
          field: "Unit",
          headerName: "B",
        },
      ];
      if (networkView && unitOpsLength > 1) {
        staticColumnDefs.unshift({
          field: "unitOp",
          headerName: "C",
          pinned: "left",
        });
      }

      setColumnDefs(() => {
        const newColumnDefs = labels?.map((label: any) => {
          return {
            field: String(label),
            valueFormatter: RoundedNumberFomatter,
          };
        });
        return [...staticColumnDefs, ...(newColumnDefs || [])];
      });
    }, [labels, networkView, unitOpsLength]);

    // Default Column Properties
    const defaultColDef = {
      resizable: true,
    };

    // UI
    return (
      <DataGrid
        scenarioId={scenarioId}
        is_calculation_complete={is_calculation_complete}
        error_message={error_message}
        defaultColDef={defaultColDef}
        rowData={rowsData}
        columnDefs={columnDefs}
        fileName={fileName}
        heading={heading}
      />
    );
  }
);
export default CapacityDataGrid;

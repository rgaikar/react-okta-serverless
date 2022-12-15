// Helpers
import { NumberFomatter } from "../ValueFormatters/Number";

// Cell Editor
import NumericCellEditor from "../CellEditors/DecimalCellEditor";

// Get Event Key
const getEventKey = (params: any) => ({
  keyPress: params?.key,
});

const getColumnDefs = (labels: any, readOnly = true) => {
  return labels?.map((label: any) => {
    return {
      field: String(label),
      editable: readOnly ? false : true,
      valueFormatter: NumberFomatter,
      cellEditor: NumericCellEditor,
      cellEditorParams: getEventKey,
      cellEditorPopup: true,
      valueGetter: (params: any) => {
        return params.data[params.colDef.field].projectionValue;
      },
      valueSetter: (params: any) => {
        params.data[params.colDef.field].projectionValue = params.newValue;
      },
      cellClass: (params: any) => {
        return params.data[params.colDef.field].isModified
          ? "highlighted-cells"
          : "";
      },
    };
  });
};

const getOverAllocationColumnDefs = (
  labels: any,
  isReadOnlyScenario = false
) => {
  return labels?.map((label: any) => {
    return {
      field: String(label),
      editable: (params: any) =>
        params?.data.id === 0 || params?.data.id === -1 || isReadOnlyScenario
          ? false
          : true,
      cellEditor: NumericCellEditor,
      valueFormatter: NumberFomatter,
      cellEditorParams: getEventKey,
      cellEditorPopup: true,
      cellStyle: (params: any) => {
        if (params?.data.id === -1) {
          if (
            Math.sign(params?.value) === -1 ||
            Math.sign(params?.value) === 1
          ) {
            return { color: "#E1242A" };
          } else {
            return { visibility: "hidden" };
          }
        }
        return null;
      },
      valueGetter: (params: any) => {
        return params.data.id === -1
          ? params.data[params.colDef.field]
          : params.data[params.colDef.field]?.projectionValue;
      },
      valueSetter: (params: any) => {
        if (params.data.id === -1) {
          params.data[params.colDef.field] = params.newValue;
        } else {
          params.data[params.colDef.field].projectionValue = params.newValue;
        }
      },
      cellClass: (params: any) => {
        return params.data[params.colDef.field]?.isModified
          ? "highlighted-cells"
          : "";
      },
    };
  });
};

// Default Column Properties
const defaultColDef = {
  resizable: true,
};

export { getColumnDefs, getOverAllocationColumnDefs, defaultColDef };

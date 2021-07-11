import { AgGridReact } from 'ag-grid-react';
import { useSelector } from 'react-redux';
import { AppState } from '../../reducers';

export default function CollateralGrid() {
  const collateral = useSelector(
    (state: AppState) => state.collateral.collateral
  );
  const columnDefs = [
    { field: 'name', headerName: 'Name', editable: true },
    { field: 'value', headerName: 'value', editable: true },
  ];
  const onCellValueChanged = (event: any) => {
    console.log('Data after change is', event.data);
  };
  return (
    <div className="ag-theme-alpine">
      <AgGridReact
        rowData={collateral}
        columnDefs={columnDefs}
        onCellValueChanged={onCellValueChanged}
        immutableData
      ></AgGridReact>
    </div>
  );
}

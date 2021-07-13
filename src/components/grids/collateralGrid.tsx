import { AgGridReact } from 'ag-grid-react';
import { AppState } from '../../reducers';
import { useAppSelector }  from '../../app/hooks'


export default function CollateralGrid() {
  const collateral = useAppSelector(
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
      ></AgGridReact>
    </div>
  );
}

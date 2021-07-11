import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { useSelector } from 'react-redux';
import { AppState } from '../../reducers';

export default function CollateralGrid() {
  const collateral = useSelector((state: AppState) => state.collateral.collateral);
  return (
    <div className="ag-theme-alpine">
      <AgGridReact rowData={collateral}>
        <AgGridColumn field="name"></AgGridColumn>
        <AgGridColumn field="value"></AgGridColumn>
      </AgGridReact>
    </div>
  );
}
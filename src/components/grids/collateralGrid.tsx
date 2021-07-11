import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { useSelector } from 'react-redux';
import { AppState } from '../../reducers';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function CollateralGrid() {
  const collateral = useSelector((state: AppState) => state.collateral.collateral);
  return (
    <div className="ag-theme-alpine" style={{ height: 300, width: 400 }}>
      <AgGridReact rowData={collateral}>
        <AgGridColumn field="name"></AgGridColumn>
        <AgGridColumn field="value"></AgGridColumn>
      </AgGridReact>
    </div>
  );
}
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { useSelector } from 'react-redux';
import { AppState } from '../../reducers';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function LoanGrid() {
  const loans = useSelector((state: AppState) => state.loan.loans);
  return (
    <div className="ag-theme-alpine" style={{ height: 300, width: 600 }}>
      <AgGridReact rowData={loans}>
        <AgGridColumn field="principal"></AgGridColumn>
        <AgGridColumn field="interest"></AgGridColumn>
        <AgGridColumn field="term"></AgGridColumn>
      </AgGridReact>
    </div>
  );
}

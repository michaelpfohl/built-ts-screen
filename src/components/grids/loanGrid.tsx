import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { useSelector } from 'react-redux';
import { AppState } from '../../reducers';

export default function LoanGrid() {
  const loans = useSelector((state: AppState) => state.loan.loans);
  return (
    <div className="ag-theme-alpine">
      <AgGridReact rowData={loans}>
        <AgGridColumn field="principal"></AgGridColumn>
        <AgGridColumn field="interest"></AgGridColumn>
        <AgGridColumn field="term"></AgGridColumn>
      </AgGridReact>
    </div>
  );
}

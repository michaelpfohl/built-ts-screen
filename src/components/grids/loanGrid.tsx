import { AgGridReact } from 'ag-grid-react';
import { useSelector } from 'react-redux';
import { AppState } from '../../reducers';

export default function LoanGrid() {
  const loans = useSelector((state: AppState) => state.loan.loans);
  const columnDefs = [
    { field: "principal", headerName: "Principal", editable: true},
    { field: "interest", headerName: "Interest", editable: true},
    { field: "term", headerName: "Term", editable: true},
]
  return (
    <div className="ag-theme-alpine">
      <AgGridReact rowData={loans} columnDefs={columnDefs}>
      </AgGridReact>
    </div>
  );
}

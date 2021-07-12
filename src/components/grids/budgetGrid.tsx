import { AgGridReact } from 'ag-grid-react';
import { useSelector } from 'react-redux';
import { AppState } from '../../reducers';

export default function BudgetGrid() {
  const budget = useSelector((state: AppState) => state.budget.budgets);
  const columnDefs = [
      { field: "projectName", headerName: "Project Name", editable: true},
      { field: "totalBudget", headerName: "Total Budget", editable: true},
  ]
  return (
    <div className="ag-theme-alpine">
      <AgGridReact rowData={budget} columnDefs={columnDefs}>
      </AgGridReact>
    </div>
  );
}
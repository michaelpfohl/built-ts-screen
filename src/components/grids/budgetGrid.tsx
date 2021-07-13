import { AgGridReact } from 'ag-grid-react';
import { AppState } from '../../reducers';
import { useAppSelector }  from '../../app/hooks'

export default function BudgetGrid() {
  const budget = useAppSelector((state: AppState) => state.budget.budgets);
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
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { useSelector } from 'react-redux';
import { AppState } from '../../reducers';

export default function BudgetGrid() {
  const budget = useSelector((state: AppState) => state.budget.budgets);
  console.log(budget);
  return (
    <div className="ag-theme-alpine">
      <AgGridReact rowData={budget}>
        <AgGridColumn field="projectName"></AgGridColumn>
        <AgGridColumn field="totalBudget"></AgGridColumn>
      </AgGridReact>
    </div>
  );
}
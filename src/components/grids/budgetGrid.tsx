import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { useSelector } from 'react-redux';
import { AppState } from '../../reducers';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function BudgetGrid() {
  const budget = useSelector((state: AppState) => state.budget.budgets);
  console.log(budget);
  return (
    <div className="ag-theme-alpine" style={{ height: 300, width: 400 }}>
      <AgGridReact rowData={budget}>
        <AgGridColumn field="projectName"></AgGridColumn>
        <AgGridColumn field="totalBudget"></AgGridColumn>
      </AgGridReact>
    </div>
  );
}
import { AgGridReact } from 'ag-grid-react';
import { AppState } from '../../reducers';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { updateBudget } from '../../actions/budget';

export default function BudgetGrid() {
  const budget = useAppSelector((state: AppState) => state.budget.budgets);
  const columnDefs = [
    { field: 'projectName', headerName: 'Project Name', editable: true },
    { field: 'totalBudget', headerName: 'Total Budget', editable: true },
  ];

  const dispatch = useAppDispatch();

  const onCellValueChanged = (event: any) => {
    const data = event.data;
    dispatch(updateBudget(data.projectName, data.totalBudget, data.id));
  };

  return (
    <div className="ag-theme-alpine">
      <AgGridReact
        rowData={budget}
        columnDefs={columnDefs}
        onCellValueChanged={onCellValueChanged}
      ></AgGridReact>
    </div>
  );
}

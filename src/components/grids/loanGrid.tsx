import { AgGridReact } from 'ag-grid-react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { AppState } from '../../reducers';
import { updateLoan } from '../../actions/loan';

export default function LoanGrid() {
  const loans = useAppSelector((state: AppState) => state.loan.loans);
  const columnDefs = [
    { field: 'principal', headerName: 'Principal', editable: true },
    { field: 'interest', headerName: 'Interest', editable: true },
    { field: 'term', headerName: 'Term', editable: true },
  ];

  const dispatch = useAppDispatch();

  const onCellValueChanged = (event: any) => {
    const data = event.data;
    dispatch(updateLoan(data.principal, data.interest, data.term, data.id));
  };

  return (
    <div className="ag-theme-alpine">
      <AgGridReact
        rowData={loans}
        columnDefs={columnDefs}
        onCellValueChanged={onCellValueChanged}
      ></AgGridReact>
    </div>
  );
}

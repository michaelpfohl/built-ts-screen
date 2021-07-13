import { AgGridReact } from 'ag-grid-react';
import { AppState } from '../../reducers';
import { useAppDispatch, useAppSelector }  from '../../app/hooks'
import { updateCollateral } from '../../actions/collateral';


export default function CollateralGrid() {
  const collateral = useAppSelector(
    (state: AppState) => state.collateral.collateral
  );
  
  const columnDefs = [
    { field: 'name', headerName: 'Name', editable: true },
    { field: 'value', headerName: 'value', editable: true },
  ];
  const dispatch = useAppDispatch();

  const onCellValueChanged = (event: any) => {
    const data = event.data;
    dispatch(updateCollateral(data.name, data.value, data.id));
  };

  return (
    <div className="ag-theme-alpine">
      <AgGridReact
        rowData={collateral}
        columnDefs={columnDefs}
        onCellValueChanged={onCellValueChanged}
      ></AgGridReact>
    </div>
  );
}

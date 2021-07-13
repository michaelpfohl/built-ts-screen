import { AgGridReact } from 'ag-grid-react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../reducers';
import { Budget } from '../../types/budget';

type BudgetProps = {
  budgets: Budget[];
};

class BudgetGrid extends Component<BudgetProps> {
  budgets = this.props.budgets;
  columnDefs = [
    { field: 'projectName', headerName: 'Project Name', editable: true },
    { field: 'totalBudget', headerName: 'Total Budget', editable: true },
  ];

  render() {
    return (
      <div className="ag-theme-alpine">
        <AgGridReact
          rowData={this.budgets}
          columnDefs={this.columnDefs}
        ></AgGridReact>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return { budgets: state.budget.budgets };
};

// Dispatch not currently being used, unable to get component to show updates to Store
// const matchDispatchToProps = (dispatch: any) => {
//     return { reload: () => dispatch(budgetReducer)}
// }

export default connect(mapStateToProps)(BudgetGrid);

import budgetReducer from '../reducers/budget';
import { createBudget, updateBudget } from '../actions/budget';
import { AppState } from '../reducers';

const state: AppState = {
  loan: {},
  collateral: {},
  budget: {
    budgets: [{ projectName: 'name', totalBudget: 1, id: 1}]
  }
}

describe('Budget reducer', () => {
  it('adds a Budget object to state when createBudget action is dispatched', () => {
    expect(budgetReducer(undefined, createBudget('name', 1, 1))).toEqual({
      budgets: [{ projectName: 'name', totalBudget: 1, id: 1 }],
    });
  });
  it('updates a specific Budget object in state when updateBudget action is dispatched', () => {
    expect(budgetReducer(state.budget, updateBudget('updated name', 2, 1))).toEqual({
      budgets: [{ projectName: 'updated name', totalBudget: 2, id: 1 }],
    });
  });
});

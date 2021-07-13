import budgetReducer from '../reducers/budget';
import { createBudget } from '../actions/budget';

describe('Budget reducer', () => {
  it('adds a Budget object to state when createBudget action is dispatched', () => {
    expect(budgetReducer(undefined, createBudget('name', 1, 1))).toEqual({
      budgets: [{ projectName: 'name', totalBudget: 1, id: 1 }],
    });
  });
});

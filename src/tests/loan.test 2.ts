import loanReducer from '../reducers/loan';
import { createLoan, updateLoan } from '../actions/loan';
import { AppState } from '../reducers';

const state: AppState = {
  loan: {
    loans: [{ principal: 1000, interest: 10, term: 12, id: 1}]
  },
  collateral: {},
  budget: {}
}

describe('Loan reducer', () => {
    it('adds a Loan object to state when createLoan action is dispatched', () => {
      expect(loanReducer(state.loan, createLoan(2000, 20, 24, 2))).toEqual({
        loans: [{ principal: 1000, interest: 10, term: 12, id: 1 }, { principal: 2000, interest: 20, term: 24, id: 2 }]
      });
    });
    it('updates a specific Collateral object in state when updateCollateral action is dispatched', () => {
      expect(loanReducer(state.loan, updateLoan(1111, 11, 11, 1))).toEqual({
        loans: [{ principal: 1111, interest: 11, term: 11, id: 1}]
      });
    });
  });
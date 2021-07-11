import { PayloadAction } from '@reduxjs/toolkit';
import { Loan } from '../types/loan';

const loanReducer = (
  state = { loans: [] },
  action: PayloadAction<Loan>
): any => {
  switch (action.type) {
    case 'CREATE-LOAN':
      return {
        ...state,
        loans: [...state.loans, action.payload],
      };
    default:
      return state;
  }
};

export default loanReducer;

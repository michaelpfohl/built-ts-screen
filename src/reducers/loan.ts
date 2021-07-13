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
    case 'UPDATE-LOAN':
      const index = state.loans.findIndex(
        (loan: Loan) => loan.id === action.payload.id
      );
      const newArray: Loan[] = [...state.loans];
      newArray[index] = action.payload;

      return {
        ...state,
        loans: newArray,
      };
    default:
      return state;
  }
};

export default loanReducer;

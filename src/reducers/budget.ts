import { PayloadAction } from '@reduxjs/toolkit';
import { Budget } from '../types/budget';

const budgetReducer = (
  state = { budgets: [] },
  action: PayloadAction<Budget>
): any => {
  switch (action.type) {
    case 'CREATE-BUDGET':
      return {
        ...state,
        budgets: [...state.budgets, action.payload],
      };
    default:
      return state;
  }
};

export default budgetReducer;

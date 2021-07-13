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
    case 'UPDATE-BUDGET':
      const index = state.budgets.findIndex(
        (budget: Budget) => budget.id === action.payload.id
      );
      const newArray: Budget[] = [...state.budgets];
      newArray[index] = action.payload;

      return {
        ...state,
        budgets: newArray,
      };
    default:
      return state;
  }
};

export default budgetReducer;

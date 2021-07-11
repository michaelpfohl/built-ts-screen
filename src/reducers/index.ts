import loanReducer from './loan';
import budgetReducer from './budget';
import { combineReducers } from 'redux';

export const allReducers = combineReducers({
    loan: loanReducer,
    budget: budgetReducer,
})

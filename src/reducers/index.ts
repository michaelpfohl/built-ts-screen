import loanReducer from './loan';
import budgetReducer from './budget';
import collateralReducer from './collateral';
import { combineReducers } from 'redux';

export const allReducers = combineReducers({
    loan: loanReducer,
    budget: budgetReducer,
    collateral: collateralReducer,
})

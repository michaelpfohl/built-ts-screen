import loanReducer from './loan';
import { combineReducers } from 'redux';

export const allReducers = combineReducers({
    loan: loanReducer,
})

import { PayloadAction } from '@reduxjs/toolkit';
import Loan from '../types/loan';

const loanReducer = (state = { loans: [] }, action: PayloadAction<Loan>) => {
    switch(action.type){
        case 'CREATE':
            return {
                ...state,
                loans: [...state.loans, action.payload],
            }
        default:
            return state;
    }
}

export default loanReducer;
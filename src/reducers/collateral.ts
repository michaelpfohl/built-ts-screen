import { PayloadAction } from '@reduxjs/toolkit';
import { Collateral } from '../types/collateral';

const collateralReducer = (state = { collateral: [] }, action: PayloadAction<Collateral>) => {
    switch(action.type){
        case 'CREATE-COLLATERAL':
            return {
                ...state,
                collateral: [...state.collateral, action.payload],
            }
        default:
            return state;
    }
}

export default collateralReducer;
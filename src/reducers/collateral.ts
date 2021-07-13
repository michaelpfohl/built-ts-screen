import { PayloadAction } from '@reduxjs/toolkit';
import { Collateral } from '../types/collateral';

const collateralReducer = (
  state = { collateral: [] },
  action: PayloadAction<Collateral>
): any => {
  switch (action.type) {
    case 'CREATE-COLLATERAL':
      return {
        ...state,
        collateral: [...state.collateral, action.payload],
      };
    case 'UPDATE-COLLATERAL':
      const index = state.collateral.findIndex((collateral: Collateral) => collateral.id === action.payload.id);
      const newArray: Collateral[] = [...state.collateral];
      newArray[index] = action.payload;

      return {
        ...state,
        collateral: newArray,
      };
    default:
      return state;
  }
};

export default collateralReducer;

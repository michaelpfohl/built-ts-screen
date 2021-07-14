import collateralReducer from '../reducers/collateral';
import { createCollateral, updateCollateral } from '../actions/collateral';
import { AppState } from '../reducers';

const state: AppState = {
    loan: {},
    collateral: {
        collateral: [{ name: 'test', value: 1, id: 1}]
    },
    budget: {}
}

describe('Collateral reducer', () => {
    it('adds a Collateral object to state when createCollateral action is dispatched', () => {
      expect(collateralReducer(state.collateral, createCollateral('name', 1, 2))).toEqual({
        collateral: [{ name: 'test', value: 1, id: 1}, { name: 'name', value: 1, id: 2}],
      });
    });
    it('updates a specific Collateral object in state when updateCollateral action is dispatched', () => {
      expect(collateralReducer(state.collateral, updateCollateral('updated name', 2, 1))).toEqual({
        collateral: [{ name: 'updated name', value: 2, id: 1}],
      });
    });
  });
import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { createCollateral } from '../../actions/collateral';

export function CollateralForm() {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  return (
  <div>
    <h3 className="form-header">Collateral</h3>
    <form className="mb-3">
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="input-full-border"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="value"
        placeholder="Value"
        className="input-no-left-border"
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(createCollateral(name, Number(value)))} type="button" className="submit-button">
        Submit
      </button>
    </form>
  </div>
  );
}
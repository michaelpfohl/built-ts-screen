import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { createCollateral } from '../../actions/collateral';

export function CollateralForm() {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  return (
    <form>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="value"
        placeholder="Value"
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(createCollateral(name, Number(value)))} type="button">
        Submit
      </button>
    </form>
  );
}
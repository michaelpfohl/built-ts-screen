import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { createCollateral } from '../../actions/collateral';

export function CollateralForm() {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const handleClick = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(createCollateral(name, Number(value)));
    setName("");
    setValue("");
  }

  return (
  <div>
    <h3 className="form-header">Collateral</h3>
    <form className="mb-3" onSubmit={(e) => handleClick(e)}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="input-full-border"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="value"
        placeholder="Value"
        className="input-no-left-border"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  </div>
  );
}
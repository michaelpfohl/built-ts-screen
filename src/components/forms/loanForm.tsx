import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { createLoan } from '../../actions/loan';
import { AppState } from '../../reducers';

export function LoanForm() {
  const [principal, setPrincipal] = useState('');
  const [term, setTerm] = useState('');
  const [interest, setInterest] = useState('');
  const dispatch = useAppDispatch();
  const loans = useSelector((state: AppState) => state.loan.loans);

  const handleClick = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(createLoan(Number(principal), Number(term), Number(interest), loans.length + 1))
    setPrincipal("");
    setTerm("");
    setInterest("");
  }

  return (
    <div>
      <h3 className="form-header">Loans</h3>
      <form className="mb-3" onSubmit={(e) => handleClick(e)}>
        <input
          type="text"
          name="principal"
          placeholder="Principal"
          className="input-full-border"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
        <input
          type="text"
          name="term"
          placeholder="Term (in months)"
          className="input-no-left-border"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <input
          type="text"
          name="interest"
          placeholder="Interest"
          className="input-no-left-border"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
        />
        <button
          type="submit"
          className="submit-button"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

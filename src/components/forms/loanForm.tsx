import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { createLoan } from '../../actions/loan';


export function LoanForm() {
  const [principal, setPrincipal] = useState('');
  const [term, setTerm] = useState('');
  const [interest, setInterest] = useState('');
  const dispatch = useAppDispatch();

  return (
    <form>
      <input
        type="text"
        name="principal"
        placeholder="Principal"
        onChange={(e) => setPrincipal(e.target.value)}
      />
      <input
        type="text"
        name="term"
        placeholder="Term (in months)"
        onChange={(e) => setTerm(e.target.value)}
      />
      <input
        type="text"
        name="interest"
        placeholder="Interest"
        onChange={(e) => setInterest(e.target.value)}
      />
      <button onClick={() => dispatch(createLoan(principal, term, interest))} type="button">
        Submit
      </button>
    </form>
  );
}

import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { createBudget } from '../../actions/budget';

export function BudgetForm() {
  const [projectName, setProjectName] = useState('');
  const [totalBudget, setTotalBudget] = useState('');
  const dispatch = useAppDispatch();

  return (
    <form>
      <input
        type="text"
        name="projectName"
        placeholder="Project Name"
        onChange={(e) => setProjectName(e.target.value)}
      />
      <input
        type="text"
        name="totalBudget"
        placeholder="Total Budget"
        onChange={(e) => setTotalBudget(e.target.value)}
      />
      <button
        onClick={() => dispatch(createBudget(projectName, Number(totalBudget)))}
        type="button"
      >
        Submit
      </button>
    </form>
  );
}

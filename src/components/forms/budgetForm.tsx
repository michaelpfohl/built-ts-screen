import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { createBudget } from '../../actions/budget';

export function BudgetForm() {
  const [projectName, setProjectName] = useState('');
  const [totalBudget, setTotalBudget] = useState('');
  const dispatch = useAppDispatch();

  return (
    <div>
      <h3 className="form-header">Budgets</h3>
      <form className="mb-3">
        <input
          type="text"
          name="projectName"
          placeholder="Project Name"
          className="input-full-border"
          onChange={(e) => setProjectName(e.target.value)}
        />
        <input
          type="text"
          name="totalBudget"
          placeholder="Total Budget"
          className="input-no-left-border"
          onChange={(e) => setTotalBudget(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(createBudget(projectName, Number(totalBudget)))
          }
          type="button"
          className="submit-button"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

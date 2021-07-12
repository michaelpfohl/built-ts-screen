import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { createBudget } from '../../actions/budget';

export function BudgetForm() {
  const [projectName, setProjectName] = useState('');
  const [totalBudget, setTotalBudget] = useState('');
  const dispatch = useAppDispatch();

  const handleClick = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(createBudget(projectName, Number(totalBudget)))
    setProjectName("");
    setTotalBudget("");
  }

  return (
    <div>
      <h3 className="form-header">Budgets</h3>
      <form className="mb-3" onSubmit={(e) => handleClick(e)}>
        <input
          type="text"
          name="projectName"
          placeholder="Project Name"
          className="input-full-border"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <input
          type="text"
          name="totalBudget"
          placeholder="Total Budget"
          className="input-no-left-border"
          value={totalBudget}
          onChange={(e) => setTotalBudget(e.target.value)}
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

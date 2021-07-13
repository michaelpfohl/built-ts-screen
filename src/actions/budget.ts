export const createBudget = (
  projectName: string,
  totalBudget: number,
  id: number
) => {
  return {
    type: 'CREATE-BUDGET',
    payload: {
      projectName,
      totalBudget,
      id,
    },
  };
};

export const updateBudget = (
  projectName: string,
  totalBudget: number,
  id: number
) => {
  return {
    type: 'UPDATE-COLLATERAL',
    payload: {
      projectName,
      totalBudget,
      id,
    },
  };
};

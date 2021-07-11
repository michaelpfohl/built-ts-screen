export const createBudget = (projectName: string, totalBudget: number)  => {
    return {
        type: "CREATE-BUDGET",
        payload: {
            projectName,
            totalBudget,
        }
    }
  }
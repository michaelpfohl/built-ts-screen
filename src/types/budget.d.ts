interface Expense {
    name: string;
    amount: number;
}

interface Budget {
    projectName: string;
    totalBudget: number;
    expenses?: Expense[];
}

export { Expense, Budget };
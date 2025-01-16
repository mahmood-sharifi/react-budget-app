export interface Expense {
    id: string;
    source: string;
    value: number;
    date: string;
    transferType?: boolean
}

export interface ExpenseProps {
    expense: Expense;
    deleteExpense: () => void;
}

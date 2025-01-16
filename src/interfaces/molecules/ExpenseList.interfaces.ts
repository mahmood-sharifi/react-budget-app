import { Expense } from '../atoms/Expense.interfaces'

export interface ExpenseListProps {
    expenses: Expense[];
    deleteExpense: (index: string) => void;
}
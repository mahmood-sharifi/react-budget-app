import { Expense } from '../atoms/Expense.interfaces'
import { Income } from '../atoms/Income.interfaces'

export interface SummaryProps {
    totalIncome: number;
    totalExpenses: number;
    savingTarget: number;
    currentSaving: number;
    balance: number;
    incomes: Income[];
    expenses: Expense[];
}

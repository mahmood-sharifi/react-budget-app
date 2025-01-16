import { Expense } from '../atoms/Expense.interfaces'
import { Income } from '../atoms/Income.interfaces'

export interface IncomeExpenseChartProps {
    incomes: Income[];
    expenses: Expense[];
}
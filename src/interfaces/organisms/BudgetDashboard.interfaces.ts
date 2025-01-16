import { Income } from "../atoms/Income.interfaces";
import { Expense } from "../atoms/Expense.interfaces";

export interface BudgetDashboardProps {
  incomes: Income[];
  expenses: Expense[];
  savingTarget: number;
  currentSaving: number;
  balance: number;
  setIncomes: React.Dispatch<React.SetStateAction<Income[]>>;
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
  setSavingTarget: React.Dispatch<React.SetStateAction<number>>;
  transferToSavings: (value: number) => void;
  deleteIncome: (id: string) => void;
  deleteExpense: (id: string) => void;
}

import { Expense } from "../atoms/Expense.interfaces";

export interface ExpenseFormProps {
    setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
}
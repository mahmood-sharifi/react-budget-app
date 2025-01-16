import {Income} from '../atoms/Income.interfaces'

export interface IncomeListProps {
    incomes: Income[];
    deleteIncome: (id: string) => void;
}
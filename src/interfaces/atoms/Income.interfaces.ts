export interface Income {
    id: string;
    source: string;
    value: number;
    date: string;
}

export interface IncomeProps {
    income: Income;
    deleteIncome: () => void;
}

import { Income } from "../atoms/Income.interfaces";

export interface IncomeFormProps {
    setIncomes: React.Dispatch<React.SetStateAction<Income[]>>;
}
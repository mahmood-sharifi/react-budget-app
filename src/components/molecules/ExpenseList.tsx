import React from 'react';
import { ExpenseListProps } from '../../interfaces/molecules/ExpenseList.interfaces';
import Expense from '../atoms/Expense';
import { Wrapper } from '../../styles/molecules/List.styles'

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses, deleteExpense }) => {
    return (
        <Wrapper>
            <h3>Expense</h3>
            <ul>
                {expenses.map((expense) => (
                    <Expense
                        key={expense.id}
                        expense={expense}
                        deleteExpense={() => deleteExpense(expense.id)}
                    />
                ))}
            </ul>
        </Wrapper>
    );
};

export default ExpenseList;

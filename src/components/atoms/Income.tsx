import React from 'react';
import { IncomeProps } from '../../interfaces/atoms/Income.interfaces';
import Button from './Button';
import { listTextFormate } from '../../utils/formatting';

const Income: React.FC<IncomeProps> = ({ income, deleteIncome }) => {
    return (
        <li >
            {listTextFormate(income.source,income.value, income.date)}
            <Button styleType='delete' onClick={deleteIncome}>Delete</Button>
        </li>
    );
};

export default Income;

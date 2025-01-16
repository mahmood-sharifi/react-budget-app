import React from 'react';
import { IncomeListProps } from '../../interfaces/molecules/IncomeList.interfaces';
import Income from '../atoms/Income';
import { Wrapper } from '../../styles/molecules/List.styles'

const IncomeList: React.FC<IncomeListProps> = ({ incomes, deleteIncome }) => {
    return (
        <Wrapper>
            <h3>Incomes</h3>
            <ul>
                {incomes.map((income) => (
                    <Income
                        key={income.id}
                        income={income}
                        deleteIncome={() => deleteIncome(income.id)}
                    />
                ))}
            </ul>
        </Wrapper>
    );
};

export default IncomeList;

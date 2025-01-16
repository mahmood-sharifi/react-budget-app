import React from 'react';
import IncomeForm from '../molecules/IncomeForm';
import ExpenseForm from '../molecules/ExpenseForm';
import SavingForm from '../molecules/SavingForm';
import BalanceForm from '../molecules/BalanceForm';
import Summary from '../molecules/Summary';
import IncomeList from '../molecules/IncomeList';
import ExpenseList from '../molecules/ExpenseList';
import IncomeExpenseChart from '../molecules/IncomeExpenseChart';
import { BudgetDashboardProps } from '../../interfaces/organisms/BudgetDashboard.interfaces';
import { Wrapper } from '../../styles/organisms/BudgetDashboard.styles'

const Dashboard: React.FC<BudgetDashboardProps> = ({
  incomes,
  expenses,
  savingTarget,
  currentSaving,
  balance,
  setIncomes,
  setExpenses,
  setSavingTarget,
  transferToSavings,
  deleteIncome,
  deleteExpense,
}) => {
  const totalIncome = incomes.reduce((acc, income) => acc + income.value, 0);
  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.value, 0);

  return (
    <Wrapper>
      <IncomeForm setIncomes={setIncomes} />
      <ExpenseForm setExpenses={setExpenses} />
      <SavingForm setSavingTarget={setSavingTarget} />
      <BalanceForm transferToSavings={transferToSavings} />
      <Summary
        totalIncome={totalIncome}
        totalExpenses={totalExpenses}
        savingTarget={savingTarget}
        currentSaving={currentSaving}
        balance={balance}
        incomes={incomes}
        expenses={expenses}
      />
      <IncomeList incomes={incomes} deleteIncome={deleteIncome} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
      <IncomeExpenseChart incomes={incomes} expenses={expenses} />
    </Wrapper>
  );
};

export default Dashboard;

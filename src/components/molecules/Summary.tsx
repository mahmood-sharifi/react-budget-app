import React from 'react';
import { SummaryProps } from '../../interfaces/molecules/Summary.interfaces';
import { exportToCsv, exportToPdf } from '../../utils/exportData';
import ProgressBar from '../atoms/PrgressBar';
import { Wrapper } from '../../styles/molecules/Summary.styles';

const Summary: React.FC<SummaryProps> = ({ totalIncome, totalExpenses, savingTarget, currentSaving, balance, incomes, expenses }) => {
  const handleExportToCsv = () => {
    const data = [
      { label: 'Total Income', value: totalIncome },
      { label: 'Total Expenses', value: totalExpenses },
      { label: 'Saving Target', value: savingTarget },
      { label: 'Current Saving', value: currentSaving },
      { label: 'Balance', value: balance },
    ];
    exportToCsv(data, incomes, expenses, 'summary.csv');
  };

  const handleExportToPdf = () => {
    const data = [
      { label: 'Total Income', value: totalIncome },
      { label: 'Total Expenses', value: totalExpenses },
      { label: 'Saving Target', value: savingTarget },
      { label: 'Current Saving', value: currentSaving },
      { label: 'Balance', value: balance },
    ];
    exportToPdf(data, incomes, expenses, 'summary.pdf');
  };

  const currentSavingPercentage = ((currentSaving / savingTarget) * 100).toFixed(2);

  return (
    <Wrapper>
      <h2>Summary</h2>
      <p>Total Income: {totalIncome}</p>
      <p>Total Expenses: {totalExpenses}</p>
      <p>Current Saving: {currentSaving}</p>
      <p>Target: {savingTarget}</p>
      <p>Progress: {savingTarget ? currentSavingPercentage : 0}%</p>
      <ProgressBar percent={Number(currentSavingPercentage)} />
      <p>Balance: {balance}</p>
      <button onClick={handleExportToCsv}>Export to CSV</button>
      <button onClick={handleExportToPdf}>Export to PDF</button>
    </Wrapper>
  );
};

export default Summary;

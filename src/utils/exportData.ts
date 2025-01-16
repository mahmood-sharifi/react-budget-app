import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Income } from '../interfaces/atoms/Income.interfaces';
import { Expense } from '../interfaces/atoms/Expense.interfaces';

interface ExportData {
  label: string;
  value: any;
}

export const exportToCsv = (summaryData: ExportData[], incomeData: Income[], expenseData: Expense[], filename: string) => {
  let csvData = summaryData.map(row => `${row.label},${row.value}`).join('\n');
  
  csvData += '\n\nIncomes\n';
  csvData += 'Source,Value,Date\n';
  csvData += incomeData.map(row => `${row.source},${row.value},${new Date(row.date).toLocaleDateString()}`).join('\n');

  csvData += '\n\nExpenses\n';
  csvData += 'Source,Value,Date\n';
  csvData += expenseData.map(row => `${row.source},${row.value},${new Date(row.date).toLocaleDateString()}`).join('\n');

  const blob = new Blob([csvData], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.setAttribute('hidden', '');
  a.setAttribute('href', url);
  a.setAttribute('download', filename);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export const exportToPdf = (summaryData: ExportData[], incomeData: Income[], expenseData: Expense[], filename: string) => {
  const doc = new jsPDF();
  
  doc.text('Summary', 10, 10);
  autoTable(doc, {
    head: [['Label', 'Value']],
    body: summaryData.map(row => [row.label, row.value]),
    startY: 20,
  });

  doc.text('Incomes', 10, doc.autoTable.previous.finalY + 10);
  autoTable(doc, {
    head: [['Source', 'Value', 'Date']],
    body: incomeData.map(row => [row.source, row.value, new Date(row.date).toLocaleDateString()]),
    startY: doc.autoTable.previous.finalY + 20,
  });

  doc.text('Expenses', 10, doc.autoTable.previous.finalY + 10);
  autoTable(doc, {
    head: [['Source', 'Value', 'Date']],
    body: expenseData.map(row => [row.source, row.value, new Date(row.date).toLocaleDateString()]),
    startY: doc.autoTable.previous.finalY + 20,
  });

  doc.save(filename);
};

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import "chartjs-adapter-date-fns";
import { IncomeExpenseChartProps } from "../../interfaces/molecules/IncomeExpenseChart.interfaces";
import { Wrapper } from "../../styles/molecules/IncomeExpenseChart.styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

const IncomeExpenseChart: React.FC<IncomeExpenseChartProps> = ({
  incomes,
  expenses,
}) => {
  // Combine and sort data by date
  const combinedData = [
    ...incomes.map((income) => ({
      type: "Income",
      value: income.value,
      date: new Date(income.date),
    })),
    ...expenses.map((expense) => ({
      type: "Expense",
      value: expense.value,
      date: new Date(expense.date),
    })),
  ].sort((a, b) => a.date.getTime() - b.date.getTime());

  const dateMap = combinedData.reduce((acc, item) => {
    const date = item.date.toISOString().split("T")[0];
    if (!acc[date]) {
      acc[date] = { income: 0, expense: 0 };
    }
    if (item.type === "Income") {
      acc[date].income += item.value;
    } else {
      acc[date].expense += item.value;
    }
    return acc;
  }, {} as { [key: string]: { income: number; expense: number } });

  const dates = Object.keys(dateMap);

  const incomeData = dates.map((date) => dateMap[date].income);
  const expenseData = dates.map((date) => dateMap[date].expense);

  const data = {
    labels: dates,
    datasets: [
      {
        label: "Incomes",
        data: incomeData,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Expenses",
        data: expenseData,
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "time" as const,
        time: {
          unit: "day" as const,
          tooltipFormat: "MMM d, yyyy",
          displayFormats: {
            day: "MMM d, yyyy",
          },
        },
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Value",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <Wrapper>
      <h3>Income vs Expenses</h3>
      <Bar data={data} options={options} />
    </Wrapper>
  );
};

export default IncomeExpenseChart;

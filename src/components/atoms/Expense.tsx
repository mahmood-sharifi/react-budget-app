import React from "react";
import { ExpenseProps } from "../../interfaces/atoms/Expense.interfaces";
import Button from "./Button";
import { listTextFormate } from "../../utils/formatting";

const Expense: React.FC<ExpenseProps> = ({ expense, deleteExpense }) => {
  return (
    <li>
      {listTextFormate(expense.source,expense.value, expense.date)}
      <Button styleType="delete" onClick={deleteExpense}>
        Delete
      </Button>
    </li>
  );
};

export default Expense;

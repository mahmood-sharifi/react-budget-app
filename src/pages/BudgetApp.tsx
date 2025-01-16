import React, { useState, useEffect } from "react";
import Dashboard from "../components/organisms/BudgetDashboard";

import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "../services/localStorageService";

import { toast } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';

import { Income } from "../interfaces/atoms/Income.interfaces";
import { Expense } from "../interfaces/atoms/Expense.interfaces";

const BudgetApp: React.FC = () => {
  const [incomes, setIncomes] = useState<Income[]>(() => {
    return getFromLocalStorage("incomes") || [];
  });
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    return getFromLocalStorage("expenses") || [];
  });
  const [savingTarget, setSavingTarget] = useState<number>(() => {
    return getFromLocalStorage("savingTarget") || 0;
  });
  const [currentSaving, setCurrentSaving] = useState<number>(() => {
    return getFromLocalStorage("currentSaving") || 0;
  });

  useEffect(() => {
    saveToLocalStorage("incomes", incomes);
  }, [incomes]);

  useEffect(() => {
    saveToLocalStorage("expenses", expenses);
  }, [expenses]);

  useEffect(() => {
    saveToLocalStorage("savingTarget", savingTarget);
  }, [savingTarget]);

  useEffect(() => {
    saveToLocalStorage("currentSaving", currentSaving);
  }, [currentSaving]);

  const totalIncome = incomes.reduce((acc, income) => acc + income.value, 0);
  const totalExpenses = expenses.reduce(
    (acc, expense) => acc + expense.value,
    0
  );
  const balance = totalIncome - totalExpenses;

  const transferToSavings = (amount: number) => {
    if (balance - amount < 0) {
      toast.warning(
        "Insufficient balance. Cannot transfer this amount to savings."
      );
    } else {
      setCurrentSaving((prev) => prev + amount);
      setExpenses((prev) => [
        ...prev,
        {
          id: uuidv4(),
          source: "Transfer to Savings",
          value: amount,
          date: new Date().toISOString().split("T")[0],
          transferType: true,
        },
      ]);
      toast.success("Amount transferred to savings!");
    }
  };

  const deleteIncome = (id: string) => {
    const newIncomes = [...incomes];
    const index = newIncomes.findIndex(income => income.id === id);
    newIncomes.splice(index, 1);
    setIncomes(newIncomes);
    toast.success("Income deleted!");
  };

  const deleteExpense = (id: string) => {
    const newExpenses = [...expenses];
    const index = expenses.findIndex(expense => expense.id === id);
    if (newExpenses[index].transferType) {
      setCurrentSaving((prev) => prev - newExpenses[index].value);
    }
    newExpenses.splice(index, 1);
    setExpenses(newExpenses);
    toast.success("Expense deleted!");
  };

  return (
    <Dashboard
      incomes={incomes}
      expenses={expenses}
      savingTarget={savingTarget}
      currentSaving={currentSaving}
      balance={balance}
      setIncomes={setIncomes}
      setExpenses={setExpenses}
      setSavingTarget={setSavingTarget}
      transferToSavings={transferToSavings}
      deleteIncome={deleteIncome}
      deleteExpense={deleteExpense}
    />
  );
};

export default BudgetApp;

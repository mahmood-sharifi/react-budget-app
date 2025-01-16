import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { IncomeFormProps } from '../../interfaces/molecules/IncomeForm.interfaces';
import { FormContainer } from '../../styles/molecules/Form.styles';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const schema = z.object({
  source: z.string().min(3, 'Source must be at least 3 characters').max(50, 'Source must be less than 50 characters'),
  value: z.preprocess((val) => parseFloat(val as string), z.number().positive('Value must be positive')),
  date: z.string().min(1, 'Date is required'),
});

const IncomeForm: React.FC<IncomeFormProps> = ({ setIncomes }) => {
  const methods = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    setIncomes((prev: any) => [...prev, {...data, id: uuidv4()}]);
    methods.reset();
    toast.success('Income added successfully!');
  };

  return (
    <FormProvider {...methods}>
      <FormContainer>
        <h2>Add Income</h2>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Input name="source" type="text" placeholder="Source" label="Source" required />
          <Input name="value" type="number" placeholder="Value" label="Value" required />
          <Input name="date" type="date" label="Date" required />
          <Button type="submit">Add Income</Button>
        </form>
      </FormContainer>
    </FormProvider>
  );
};

export default IncomeForm;

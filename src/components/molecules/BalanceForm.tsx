import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { BalanceFormProps } from '../../interfaces/molecules/BalanceForm.interfaces';
import { FormContainer } from '../../styles/molecules/Form.styles';
import { toast } from 'react-toastify';

const schema = z.object({
  saving: z.preprocess((val) => parseFloat(val as string), z.number().positive('Saving must be positive')),
});

const BalanceForm: React.FC<BalanceFormProps> = ({ transferToSavings }) => {
  const methods = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    transferToSavings(data.saving);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <FormContainer>
        <h2>Transfer to Saving Account</h2>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Input name="saving" type="number" placeholder="Current Saving" label="Current Saving" required />
          <Button type="submit">Update Saving</Button>
        </form>
      </FormContainer>
    </FormProvider>
  );
};

export default BalanceForm;

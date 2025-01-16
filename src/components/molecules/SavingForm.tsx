import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { SavingFormProps } from '../../interfaces/molecules/SavingForm.interfaces';
import { FormContainer } from '../../styles/molecules/Form.styles';
import { toast } from 'react-toastify';

const schema = z.object({
  target: z.preprocess((val) => parseFloat(val as string), z.number().positive('Target must be positive')),
});

const SavingForm: React.FC<SavingFormProps> = ({ setSavingTarget }) => {
  const methods = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log('Form Data:', data);
    setSavingTarget(data.target);
    methods.reset();
    toast.success('Saving target set successfully!');
  };

  return (
    <FormProvider {...methods}>
      <FormContainer>
        <h2>Set Saving Target</h2>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Input name="target" type="number" placeholder="Target" label="Target" required />
          <Button type="submit">Set Target</Button>
        </form>
      </FormContainer>
    </FormProvider>
  );
};

export default SavingForm;

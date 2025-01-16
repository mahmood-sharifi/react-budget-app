import React from 'react';
import { useFormContext } from 'react-hook-form';
import { InputProps } from '../../interfaces/atoms/Input.interfaces';
import { InputWrapper, StyledInput, StyledLabel, StyledError } from '../../styles/atoms/Input.styles';

const Input: React.FC<InputProps> = ({ name, type, placeholder, required, label }) => {
  const { register, formState: { errors } } = useFormContext();
  const errorMessage = errors[name]?.message as string | undefined;

  return (
    <InputWrapper>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput {...register(name, { required })} type={type} placeholder={placeholder} id={name} />
      {errorMessage && <StyledError>{errorMessage}</StyledError>}
    </InputWrapper>
  );
};

export default Input;
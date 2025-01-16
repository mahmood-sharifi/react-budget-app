import React from 'react';
import { ButtonProps } from '../../interfaces/atoms/Button.interfaces';
import { StyledButton } from '../../styles/atoms/Button.styles';

const Button: React.FC<ButtonProps> = ({ type, children, onClick, styleType }) => {
  return <StyledButton onClick={onClick} type={type} styleType={styleType} >{children}</StyledButton>;
};

export default Button;

import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps {
    styleType?: 'delete';
    type?: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
    onClick?: () => void;
}

export interface StyledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    styleType?: string;
}

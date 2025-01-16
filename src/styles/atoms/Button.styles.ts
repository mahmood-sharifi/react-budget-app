import styled from 'styled-components';
import { spacings } from '../variables';
import { StyledButtonProps } from '../../interfaces/atoms/Button.interfaces';

export const StyledButton = styled('button').withConfig({
  shouldForwardProp: (prop) => !['styleType'].includes(prop),
})<StyledButtonProps>`
  margin: ${spacings.small};
  padding: ${({styleType}) => styleType === 'delete' ? `${spacings.small} ${spacings.medium}` : `${spacings.medium} ${spacings.large}`};
  background-color: ${({styleType, theme}) => styleType === 'delete' ? theme.danger+'00' : theme.primary};
  color: ${(props) => props.theme.color};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: ${({styleType, theme}) => styleType === 'delete' ? theme.danger : theme.color};
  transition: 200ms ease-in-out;

  &:hover {
    background-color: ${({styleType, theme}) => styleType === 'delete' ? theme.danger : theme.primaryHover};
    color: ${(props) => props.theme.color};
  }
`;
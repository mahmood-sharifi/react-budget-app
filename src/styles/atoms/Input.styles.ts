import styled from 'styled-components';
import { spacings, fontSizes } from '../variables';

export const InputWrapper = styled.div`
    position: relative;
    padding-bottom: ${spacings.small};
`;

export const StyledInput = styled.input`
  margin: ${spacings.small};
  padding: ${spacings.medium};
  border: 1px solid ${(props) => props.theme.light};
  border-radius: 4px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

export const StyledLabel = styled.label`
  display: block;
  margin: ${spacings.small} 0;
  color: ${(props) => props.theme.color};
`;

export const StyledError = styled.label`
  color: ${(props) => props.theme.danger};
  font-size: ${fontSizes.small};
  position: absolute;
  left: 0;
  bottom: 0;
`;

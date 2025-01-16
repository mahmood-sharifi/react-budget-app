import styled from 'styled-components';
import { FormContainer } from './Form.styles';

export const Wrapper = styled(FormContainer)`
  background-color: ${(props) => props.theme.secondaryBackground};
  height: fit-content;
`;